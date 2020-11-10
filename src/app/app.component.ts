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

  tweet = {
    body: "This is the content of a tweet",
    isLiked: false,
    totalLikes: 0
  }

  courses = [];
  canAdd = true;

  viewMode = "list";

  onAdd(){
    this.courses.push({id:4, name:"Nuevo curso"});
  }

  loadCourses(){
    this.courses = [
      {
        id: 1,
        name: "Curso de python"
      },
      {
        id: 2,
        name: "Curso de java"
      },
      {
        id: 3,
        name: "Curso de angular"
      }
    ];
  }

  onRemove(course){
    this.courses.splice(this.courses.indexOf(course), 1);
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

  coursesExist(){
    console.log("I'm called and I'm ", this.courses.length > 0);
    if (this.courses.length > 0){
      return true;
    } else {
      return false;
    }
  }

  onFavChanged(eventArgs: FavoriteChangedEventArgs){
    console.log("Fav was changed, now it is ", eventArgs);
  }
}
