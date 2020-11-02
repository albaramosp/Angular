import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

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

  onFavChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Fav was changed, now it is ", eventArgs);
  }
}
