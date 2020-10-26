import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let a of authors">
                    {{ a }}
                </li>
            </ul>
            `
})
export class AuthorsComponent implements OnInit {
  title = "List of authors";
  authors;

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
