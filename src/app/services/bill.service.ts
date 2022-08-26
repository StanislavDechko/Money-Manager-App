import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillUrls } from 'src/environments/constans';
import { Bill } from '../interfaces/Bill';
import { Transaction } from '../interfaces/Transaction';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  createBill(bill: Bill): Observable<any> {
    return this.http.post(BillUrls.Api + BillUrls.CreateBill, bill);
  }

  editBill(bill: Bill): Observable<any> {
    return this.http.post(BillUrls.Api + BillUrls.EditBill, bill);
  }

  deleteBill(bill: Bill): Observable<any> {
    return this.http.delete(BillUrls.Api + BillUrls.DeleteBill, { body: bill});
  }

  addTransaction(activeBillId: number, transaction: Transaction): Observable<any> {
    return this.http.post(BillUrls.Api + `/${activeBillId}` + BillUrls.AddTransaction, transaction);
  }

  addTransactions(activeBillId: number, transactions: Transaction[]): Observable<any> {
    return this.http.post(BillUrls.Api + `/${activeBillId}` + BillUrls.AddTransactions, transactions);
  }

}
