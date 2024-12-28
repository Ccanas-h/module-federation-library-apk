import {Component} from '@angular/core';
// IMPORTANT: Make sure you import the service
//  from 'auth-lib'!
import { AuthLibService } from 'auth-lib';
@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

      // Add this:
      user = this.service.user;

      lastName$ = this.service.lastName$;

      // And add that:
      constructor(public service: AuthLibService) { }

  search(): void {
    alert('Not implemented for this demo!');
  }
}
