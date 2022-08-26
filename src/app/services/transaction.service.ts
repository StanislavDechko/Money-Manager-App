import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionUrls } from 'src/environments/constans';
import { Bill } from '../interfaces/Bill';
import { Transaction } from '../interfaces/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }
  
  getTransactions(file: any): Observable<any> {
    let formData = new FormData();
    formData.append("accountStatementPdf", file);
    return this.http.post(TransactionUrls.Api + TransactionUrls.GetTransactions, formData);
  }

  deleteTransaction(transaction: Transaction): Observable<any> {
    return this.http.delete(TransactionUrls.Api + TransactionUrls.DeleteTransaction, { body:  transaction  });
  }

  getChartData(bill: Bill): Observable<any> {
    return this.http.post(TransactionUrls.Api + TransactionUrls.GetChartData, bill);
  }

  getLineChartData(bill: Bill): Observable<any> {
    return this.http.post(TransactionUrls.Api + TransactionUrls.GetLineChartData, bill);
  }
}
