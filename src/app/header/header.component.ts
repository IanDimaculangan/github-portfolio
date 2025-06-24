import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListItemIcon, MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-header',
  imports : [MatListModule, CommonModule, MatIconModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  menuOpen = false; // Boolean flag to track if the menu should be shown

  // Toggle method that inverts the current state
  toggleMenu() {
    this.menuOpen = !this.menuOpen; 
  }
}
