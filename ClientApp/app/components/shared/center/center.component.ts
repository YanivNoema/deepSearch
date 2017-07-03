
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


class Url {

    Address: string;
    IsRemoved: boolean;

    constructor(Input: string) {

        this.Address = Input;
        this.IsRemoved = false;

    }   
}

class Phrase {

    Words: string[] = [];
    IsRemoved: boolean;

    constructor(Phrase: string) {

        this.Words = Phrase.split(' ');
        this.IsRemoved = false;
    }

}

class Searches {

    Url: Url;
    PharseList: Phrase[] = [];
    IsCaseSensative: boolean;
    IsExcatMatch: boolean;

}


@Component({
    selector: 'shared-center',
    styleUrls: ['./center.component.css'],
    templateUrl: './center.component.html'
})

export class CenterComponent {

    URL: string;
    Pharse: string;
    UrlList: Url[] = [];
    PhraseList: Phrase[] = [];
    SearchesList: Searches[] = [];

    //toggle: boolean = false;
    // update placeholder after each insertion

    AddURL(): void {

        if (this.URL != undefined) {
            this.UrlList.push(new Url("http://" + this.URL));
            this.URL = "http://";
        }
    }

    AddPharse(): void {

        if (this.Pharse != undefined) {
            this.PhraseList.push( new Phrase(this.Pharse));
            this.Pharse = "Add more phrase";
        }
    }

    Search(): void {

    }

    RemoveDiv(U: Url) {
        U.IsRemoved = true;
        
    }
}


    