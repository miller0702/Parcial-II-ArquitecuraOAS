import { Injectable } from '@angular/core';
import { isObservable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  active$ = new Subject<string>();
  activeDos = '';

  setActive(){ 
    this.active$.next('active')
    this.activeDos = 'active'
  }

  setInactive(){
    this.active$.next('')
    this.activeDos = ''
  }
}
