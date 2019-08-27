import { Component } from '@angular/core';

@Component({
    selector: 'app-track-list-component',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {

    player;
    song: string;

    public progress: number;
    public colour: string;

    constructor(){
        this.player = new Audio();
        this.song = "../../../assets/tracks/aeriform_Secret-160.mp3";

        this.player.src = this.song;
        this.player.textContent = "Sample";

        let progressInterval = setInterval(() => {
            this.progress = (this.player.currentTime / this.player.duration) * 100;
        }, 100);

        let colorInterval = setInterval(() => {
            this.colour = this.getRandomColor();
        }, 500);
    }

    play(): void {
        this.player.play();
    }

    stop(): void {
        this.player.pause();
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
