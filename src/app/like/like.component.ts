import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tweet-like',
  template: `
              <div style="overflow: hidden;">
                <svg id="likeBtn" (click)="onLikeClicked()" style="float: left;" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg> <p [innerText]="totalLikes"></p>
              </div>
            `,
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() totalLikes: number;
  @Input() isLiked: boolean;

  ngOnInit(): void {
  }

  onLikeClicked(){
    if (!this.isLiked){
      this.totalLikes += 1;
      document.getElementById("likeBtn").style.color = "deeppink";

    } else {
      this.totalLikes -= 1;
      document.getElementById("likeBtn").style.color = "#ccc";
    }

    this.isLiked = !this.isLiked;
  }

}
