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

  onContact() {
    alert('Contact clicked');
  }
}
