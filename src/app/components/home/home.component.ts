import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/interfaces/Bill';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user!: string;
  bills!: Bill[];
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(response => {
      this.bills = response.bills;
      this.user = response.username;
    })
  }

  
  get activeBill(): Bill {
    return this.bills.filter(bill => bill.isActive)[0];
  }
}
