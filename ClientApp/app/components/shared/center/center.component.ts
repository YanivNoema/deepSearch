
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
    UrlToggle: boolean;
    PhraseToggle: boolean;


    // update placeholder after each insertion

    AddURL(): void {

        if (this.URL != undefined) {
            this.UrlList.push(new Url("http://" + this.URL));
            this.URL = "http://";
            this.UrlToggle = true;
        }
    }

    AddPharse(): void {

        if (this.Pharse != undefined) {
            this.PhraseList.push( new Phrase(this.Pharse));
            this.Pharse = "Add more phrase";
            this.PhraseToggle = true;
        }
    }

    Search(): void {

    }

    RemoveUrl(U: Url) {
        U.IsRemoved = true;
        let index: number = this.UrlList.indexOf(U);
        if (index !== -1) {
            this.UrlList.splice(index, 1);
        } 

        if (this.UrlList.length === 0) {
            this.UrlToggle = false;

        }
    }

    RemovePhrase(P: Phrase) {
        P.IsRemoved = true;
        let index: number = this.PhraseList.indexOf(P);
        if (index !== -1) {
            this.PhraseList.splice(index, 1);
        }

        if (this.PhraseList.length === 0) {
            this.PhraseToggle = false;

        }
    }
}


    