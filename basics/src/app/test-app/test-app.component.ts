import { Component } from '@angular/core';

@Component({
    selector: 'app-test-app',
    templateUrl: './test-app.component.html',
    styleUrls: ['./test-app.component.css']
})
export class TestAppComponent {
    name = "Matt";

    getName() {
        return this.name;
    }
}
