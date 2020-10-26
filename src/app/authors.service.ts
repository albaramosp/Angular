import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(){
    return ["Alba Ramos", "Darwin Cordova", "Fabricio Cordova"];
  }
}
