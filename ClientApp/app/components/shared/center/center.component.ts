
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Url {

    address: string
    prettyUrl: string;

    constructor(add: string) {
        this.address = add;
         
    }

    UrlFilter(unUrl: string): void {
        
    }
}



@Component({
    selector: 'shared-center',
    styleUrls: ['./center.component.css'],
    templateUrl: './center.component.html'
})
export class CenterComponent {

    str: string;
    urlList: Url[] = [];
    toggle: boolean = false;

    sendUrlForDeepSearching(): void {
        if (this.str != undefined) {
            this.urlList.push(new Url(this.str));
            this.str = "http://"
        }

        if (this.urlList.length > 0)
            this.toggle = true;
    }
}
