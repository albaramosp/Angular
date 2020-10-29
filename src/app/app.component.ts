import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Angular tutorial',
    isFavorite: false
  }

  onFavChanged(){
    console.log("Fav was changed!");
  }
}
