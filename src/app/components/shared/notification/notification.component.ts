import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
  private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  notify(text: string) {
    this._snackBar.openFromComponent(NotificationComponent, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
      data: {
        text: text
      }
    });
  }
}
