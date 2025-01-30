import { Component } from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    NgClass,RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
