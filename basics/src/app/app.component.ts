import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  imgURL = "https://imagesvibe.com/wp-content/uploads/2023/05/Cute-Cat-Images14.jpg";
  images = [
    "https://imagesvibe.com/wp-content/uploads/2023/05/Cute-Cat-Images14.jpg",
    "https://imagesvibe.com/wp-content/uploads/2023/05/Cute-Cat-Images14.jpg",
    "https://imagesvibe.com/wp-content/uploads/2023/05/Cute-Cat-Images14.jpg"
  ]
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  };
  blueClass = false;
  fontSize = 16;

  getTitle() {
    return this.title;
  };

  changeImage(e: KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value;
  };

  logImg(event: string) {
    console.log(event);
  };
}
