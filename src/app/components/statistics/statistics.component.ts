import { Bill } from './../../interfaces/Bill';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  @Input() bill!: Bill;
  @Output() billChange = new EventEmitter<Bill>();
  renderPieChart = false;
  renderLineChart = false;
  incomePieChartData!: any[];
  expensePieChartData!: any[];

  lineChartData!: any[];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';

  constructor(private transactionsService: TransactionService) {}

  ngOnInit(): void {
  }

  onBillChange(bill: Bill) {
    this.billChange.emit(bill);
  }

  ngOnChanges(changes: any) {
    this.transactionsService.getChartData(this.bill).subscribe(response => {
      this.incomePieChartData = response.incomeByCategory;
      this.expensePieChartData = response.expensesByCategory;
      this.renderPieChart = true;
    });

    this.transactionsService.getLineChartData(this.bill).subscribe(response => {
      this.lineChartData = response;
      this.renderLineChart = true;
    })
  }
}
