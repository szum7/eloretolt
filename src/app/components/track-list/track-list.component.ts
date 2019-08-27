import { Component } from '@angular/core';

class AudioFile {
    title: string;
    src: string;

    constructor(title: string, src: string) {
        this.title = title;
        this.src = src;
    }
}

@Component({
    selector: 'app-track-list-component',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {

    public tracks: Array<AudioFile>;

    constructor(){
        this.tracks = [
            new AudioFile("DnD", "../../../assets/tracks/aeriform_Secret-160.mp3")
        ];
    }
}
