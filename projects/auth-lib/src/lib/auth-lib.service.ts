import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthLibService {

  private userName: string;

  private lastNames: string[] = ['abad', 'basualto', 'cañas', 'darin', 'fuentes'];
  private lastNameSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.lastNames[0]);


  public get user(): string {
    return this.userName;
  }


  public get lastName$(): BehaviorSubject<string> {
    return this.lastNameSubject;
  }

  constructor() {}


  public changeLastName(): void {
    const randomIndex = Math.floor(Math.random() * this.lastNames.length);
    this.lastNameSubject.next(this.lastNames[randomIndex]);
  }


  public login(userName: string, password: string): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.userName = userName;
  }




  
}
