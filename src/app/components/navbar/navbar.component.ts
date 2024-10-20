import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
// Method to open the sidebar
  w3_open() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
      sidebar.style.display = "block";
    }
  }

  // Method to close the sidebar
  w3_close() {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar) {
      sidebar.style.display = "none";
    }
  }
}
