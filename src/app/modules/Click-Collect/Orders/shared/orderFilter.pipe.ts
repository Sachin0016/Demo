import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({ name: 'orderFilter' })

export class OrderFilterPipe implements PipeTransform {
    transform(items: any[], value: any): any {
        if (value && Array.isArray(items)) {
            const definedValue = [];
            for (let key in value) {
                if (value[key] && value[key] !== 'All') {
                    const tempObj = {};
                    tempObj[key] = value[key];
                    definedValue.push(tempObj);
                    console.log('definedValue',definedValue);
                }
            }
            if (definedValue.length > 0) {
                return items.filter((elements): any => {
                    let loopCount = 0;
                    definedValue.filter((filterItems): any => {
                        if(Object.keys(filterItems)[0]=='orderStatus' && Object.values(filterItems)[0] ==='Blocked' || Object.values(filterItems)[0] ==='DueZone'){
                            delete filterItems.orderStatus
                        }
                        console.log('definedValue2',definedValue);
                        loopCount = (elements[Object.keys(filterItems)[0]] === Object.values(filterItems)[0]) ? loopCount + 1 : loopCount;
                    });
                    if (loopCount === definedValue.length) {
                        return elements;
                    }
                })
            } else {
                return items;
            }
        } else {
            return items;
        }
    }
}