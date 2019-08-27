import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-audio-player-component',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

    @Input() title: string;
    @Input() src: string;
    progress: number;
    progressInterval;
    player;

    get progressBar(): number {
        return (this.player.currentTime / this.player.duration) * 100;
    }

    set progressBar(value: number) {
        this.player.currentTime = this.player.duration * (value / 100);
    }

    constructor() {        
    }

    ngOnInit(): void {
        this.player = new Audio();
        this.player.src = this.src;
        this.player.title = this.title;

        this.progressInterval = setInterval(() => {
            this.progress = (this.player.currentTime / this.player.duration) * 100;
        }, 100);
    }

    play(): void {
        this.player.play();
    }

    pause(): void {
        this.player.pause();
    }

    stop(): void {
        this.player.pause();
        this.player.currentTime = 0;
    }
}
