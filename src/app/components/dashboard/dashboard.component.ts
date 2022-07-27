import { UserServiceService as UserService } from '../../services/user.service';
import { Bill } from './../../interfaces/Bill';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardComponent implements OnInit {
  now: Date = new Date();
  bills: Bill[] = [{
    name: "Main",
    isActive: true,
    balance: {
      cashAmount: "1",
      currency: "$",
      history: {
        totalIncome: 100,
        totalExpenses: 50
      }
    },
    ui: {
      textColor: "white",
      backgroundColor: "black",
      border: "2px solid red"
    }
  }, {
    name: "Main",
    isActive: true,
    balance: {
      cashAmount: "2",
      currency: "$",
      history: {
        totalIncome: 100,
        totalExpenses: 50
      }
    },
    ui: {
      textColor: "white",
      backgroundColor: "red",
      border: "2px solid red"
    }
  }, {
    name: "Main",
    isActive: true,
    balance: {
      cashAmount: "3",
      currency: "$",
      history: {
        totalIncome: 100,
        totalExpenses: 50
      }
    },
    ui: {
      textColor: "white",
      backgroundColor: "yellow",
      border: "2px solid red"
    }
  }, {
    name: "Main",
    isActive: true,
    balance: {
      cashAmount: "4",
      currency: "$",
      history: {
        totalIncome: 100,
        totalExpenses: 50
      }
    },
    ui: {
      textColor: "white",
      backgroundColor: "blue",
      border: "2px solid red"
    }
  }, {
    name: "Main",
    isActive: true,
    balance: {
      cashAmount: "5",
      currency: "$",
      history: {
        totalIncome: 100,
        totalExpenses: 50
      }
    },
    ui: {
      textColor: "white",
      backgroundColor: "green",
      border: "2px solid red"
    }
  }, {
    name: "Main",
    isActive: true,
    balance: {
      cashAmount: "6",
      currency: "$",
      history: {
        totalIncome: 100,
        totalExpenses: 50
      }
    },
    ui: {
      textColor: "white",
      backgroundColor: "purple",
      border: "2px solid red"
    }
  }];
  customOptions: OwlOptions = {
    stagePadding: 15,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    navText: ['<span class="material-symbols-outlined">arrow_back_ios</span>', '<span class="material-symbols-outlined">arrow_forward_ios</span>'],
    nav: true,
    responsive: {
      0: {
        items: 0
      },
      260: {
        items: 1
      },
      400: {
        items: 1
      },
      550: {
        items: 2
      },
      830: {
        items: 3
      },
      940: {
        items: 4
      },
      1100: {
        items: 5
      }
    },
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(response => {
      this.bills = response.bills;
    })
  }

  get activeBill(): Bill {
    return this.bills.filter(bill => bill.isActive)[0];
  }

  makeActive(index: number): void {
    this.bills.map(bill => bill.isActive = false);
    this.bills[index].isActive = true;
  }
}
