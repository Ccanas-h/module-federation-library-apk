import { AuthLibService } from 'auth-lib';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';
  
  constructor(public service: AuthLibService) {
    this.service.login('Max', null);
  }
}
