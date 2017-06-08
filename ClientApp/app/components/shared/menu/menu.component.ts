
import { Component } from '@angular/core';

@Component({
    selector: 'shared-menu',
    styleUrls: ['./menu.component.css'],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    name: string;
    constructor() {
        this.name = 'Sam';
    }
}

