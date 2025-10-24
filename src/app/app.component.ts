import { AfterViewInit, Component } from '@angular/core';

declare global {
  interface Window {
    initialize?: () => void;
  }
}

import '../assets/login-animation.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  email = '';
  password = '';

  ngAfterViewInit(): void {
    window.initialize?.();
  }

  login(): void {
    // eslint-disable-next-line no-console
    console.log(`email: ${this.email} password: ${this.password}`);
    alert(`Email: ${this.email} Password: ${this.password}`);
  }
}
