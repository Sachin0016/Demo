import { Component, OnInit } from '@angular/core';
import { ClickCollectOrderService } from './Service/click-collect-order.service';
import * as moment from 'moment';
import { element } from 'protractor';


@Component({
  selector: 'app-click-collect',
  templateUrl: './click-collect.component.html',
  styleUrls: ['./click-collect.component.css']
})
export class ClickCollectComponent implements OnInit {

  clickCollectOrderList = [];
  clickCollectOrderBlockTime: any;
  clickCollectOrderListID = [];
  clickCollectOrderIDList = [];
  currentDate: any = moment(new Date());

  isAllCancel: boolean = false;

  selectedFrom: any = moment(this.currentDate).subtract(3, 'days');
  selectedTo: any = this.currentDate;
  statusItem = 'All';

  orderID: any;
  orderPaginate: number = 1;

  timeStatus: any;

  constructor(private clickCollectOrderService: ClickCollectOrderService) { }

  ngOnInit() {
    setInterval(() => {
      this.assignBlackListTime(this.clickCollectOrderList);
    }, 10000);
    this.getclickCollectOrderServiceResponse();

  }

  /* assig value into sapbalck list time */
  assignBlackListTime(listItems) {
    listItems.forEach(element => {
      let sapBlackTime = {};
      let sapTime = {};
      element.sapBlackTime = this.getTimeIntervalCalculate(element.sapBlacklistTime);
      let sapBlackTimeFormat = moment(element.sapBlackTime, 'HH:mm');
      element.sapTime = '';
      if (element.sapBlackTime[0] === '-') {
        element.sapTime = 'Blocked';
      } else {
        if (moment(new Date(element.sapBlacklistTime).setUTCSeconds(0, 0)).diff(moment(), 'minutes') < 10) {
          element.sapTime = 'DueZone';
        }
      }
    });
  }
  /* get Order-Details from service class */
  getclickCollectOrderServiceResponse() {

    return this.clickCollectOrderService.getcickCollectOrderServiceRequest().subscribe((data: any) => {
      this.clickCollectOrderList = data;
      this.assignBlackListTime(this.clickCollectOrderList);
      this.getClickOrderByID(this.clickCollectOrderList[0]);
    })
  }


  getClickOrderByID(webOrderItemID) {
    console.log('kkk', webOrderItemID.webOrderId)
    return this.clickCollectOrderService.getcickCollectOrderIDServiceRequest(webOrderItemID.webOrderId).subscribe((data: any) => {
      this.clickCollectOrderIDList = data;
      this.clickCollectOrderListID = this.clickCollectOrderIDList.filter(element => {
        return element.webOrderId == webOrderItemID.webOrderId;
      })
      console.log('bbbb', this.clickCollectOrderListID)
      console.log("Order-LIst :", this.clickCollectOrderIDList);
    })
  }

  /* get Order-Details By ID's from service class */
  getOrderID(orderId) {
    this.orderID = orderId;
    console.log("order Id", this.orderID);
    return this.clickCollectOrderService.getcickCollectOrderIDServiceRequest(this.orderID).subscribe((data: any) => {
      this.clickCollectOrderIDList = data;
      this.clickCollectOrderListID = this.clickCollectOrderIDList.filter(element => {
        return element.webOrderId == this.orderID;
      })
    })
  }

  /* Calculate  Time period based on Sap-Blocked-Time */
  getTimeIntervalCalculate(sapBlacklistTime) {
    let duration = moment(new Date(sapBlacklistTime).setUTCSeconds(0, 0)).diff(moment(), 'seconds');
    let strSecond = Math.abs(duration);
    let time = ["hours", "mitutes"];
    let timeResult = strSecond % 3600;
    time["hours"] = Math.floor(strSecond / 3600);
    time["mitutes"] = Math.floor(timeResult / 60);
    if (time["hours"] == '0' && time["mitutes"] == '0') {
      return '0:00';
    } else {
      if (moment(new Date(sapBlacklistTime).setUTCSeconds(0, 0)).diff(this.currentDate, 'seconds') < 0) {
        return `${'-'}${time["hours"]}:${(time["mitutes"] < 10 ? "0" + time["mitutes"] : time["mitutes"])}`;
      } else {
        return `${time["hours"]}:${(time["mitutes"] < 10 ? "0" + time["mitutes"] : time["mitutes"])}`;
      }
    }

  }

  /* From Date selected event */
  onSelectedFromDate(fromDate) {
    if (moment(new Date(this.selectedFrom).setHours(0, 0, 0, 0)).diff(this.selectedTo, 'days') > 0) {
      this.selectedTo = null;
    }
  }

  /* To Date selected event */
  onSelectedToDate(toDate) {
    if (moment(new Date(this.selectedFrom).setHours(0, 0, 0, 0)).diff(this.selectedTo, 'days') > 0) {
      this.selectedFrom = null;
    }
  }
  /* show Status based on Staus input */
  getStatus(statusValue) {
    this.statusItem = statusValue;
    this.isAllCancel = true;
  }
  /* show Time-Status based on time input */
  getTimeStatus(timeStatusValue) {
    this.timeStatus = timeStatusValue;
    this.isAllCancel = true;
    this.statusItem = timeStatusValue;
  }
  /* Cancel selected Status item and set Status value as All */
  resetStatus() {
    this.statusItem = 'All';
    if (this.statusItem) {
      this.timeStatus = '';
      this.isAllCancel = false;
    }
  }
  /* add  Staus popup value */
  statusNotification = [
    { id: 1, name: 'New' },
    { id: 2, name: 'Ready' },
    { id: 3, name: 'Picked' },
    { id: 4, name: 'Picking' },
    { id: 5, name: 'Return' },
    { id: 6, name: 'Completed' }
  ];
  /* add  Time popup value */
  timeZone = [
    { id: 1, name: 'Blocked' },
    { id: 2, name: 'DueZone' }
  ];
  /*  Configure ng2-Date-Picker for From Date */
  datePickerFromConfig = {
    format: "DD/MM/YY",
    max: moment(new Date())
  };
  /*  Configure ng2-Date-Picker for TO Date */
  datePickerToConfig = {
    format: "DD/MM/YY",
    max: moment(new Date()),
  };

}
