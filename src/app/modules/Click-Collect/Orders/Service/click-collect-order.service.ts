import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CickCollectOrder } from '../shared/CickCollectOrder';

@Injectable({
  providedIn: 'root'
})
export class ClickCollectOrderService {
  /* json url */
  public jsonFileURL: any = '/assets/order.json';
  public jsonFileURLOrderDetailsByid = '/assets/orderDetailsByid.json';

  public hostName = 'http://34.76.233.210/orders';

  cickCollectOrderServiceUrl = '/api/v1/orders/portal/order_details/G015/CC';
  cickCollectOrderIDServiceUrl = '/api/v1/orders/portal/order_article_details/';

  constructor(private http: HttpClient) { }

  getcickCollectOrderServiceRequest(): Observable<CickCollectOrder> {
    // return this.http.get<CickCollectOrder>(this.hostName + this.cickCollectOrderServiceUrl).pipe(retry(1),catchError(this.errorHandl));
    return this.http.get<CickCollectOrder>(this.jsonFileURL).pipe(retry(1), catchError(this.errorHandl));
  }
  getcickCollectOrderIDServiceRequest(orderId): Observable<any> {
    return this.http.get<CickCollectOrder>(this.jsonFileURLOrderDetailsByid).pipe(retry(1), catchError(this.errorHandl));
    // return this.http.get<any>(this.hostName + this.cickCollectOrderIDServiceUrl + orderId).pipe(retry(1), catchError(this.errorHandl));
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
