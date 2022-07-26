import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  menuActive: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("resize", this.showMenuButtons);
  }

  showMenuButtons(){    
    return window.innerWidth <= 900;
  }

  toggleMenuState() {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.toggle("active");
    this.menuActive = !this.menuActive;
  }
}
