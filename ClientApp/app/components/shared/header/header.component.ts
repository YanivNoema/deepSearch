
import { Component } from '@angular/core';

@Component({
    selector: 'shared-header',
    styleUrls: ['./header.component.css'],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}
