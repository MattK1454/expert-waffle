import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  imgURL = "https://imagesvibe.com/wp-content/uploads/2023/05/Cute-Cat-Images14.jpg";

  getTitle() {
    return this.title;
  }

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  }
}
