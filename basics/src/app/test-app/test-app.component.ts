import { Component } from '@angular/core';

@Component({
    selector: 'app-test-app',
    templateUrl: './test-app.component.html',
    styleUrls: ['./test-app.component.css']
})
export class TestAppComponent {
    name = "Matt"
    imgURL_2 = "https://imagesvibe.com/wp-content/uploads/2023/05/Cute-Cat-Images14.jpg";

    getName() {
        return this.name;
    }
}
