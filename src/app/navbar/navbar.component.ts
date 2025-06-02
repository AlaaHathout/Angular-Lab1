import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  onHome() {
    alert('Home clicked');
  }

  onAbout() {
    alert('About clicked');
  }

  onProducts() {
    alert('Products clicked');
  }

  onContact() {
    alert('Contact clicked');
  }
}
