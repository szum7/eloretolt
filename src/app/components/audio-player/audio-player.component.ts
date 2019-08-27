import { Component, Input, OnInit } from '@angular/core';
import { AudioFile } from '../track-list/track-list.component';

@Component({
    selector: 'app-audio-player-component',
    templateUrl: './audio-player.component.html',
    styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

    @Input() track: AudioFile;
    progress: number;
    progressInterval;
    player;

    get isInited(): boolean {
        return !!this.track && !this.track.isEmpty();
    }

    get progressBar(): number {
        return (this.player.currentTime / this.player.duration) * 100;
    }

    set progressBar(value: number) {
        this.player.currentTime = this.player.duration * (value / 100);
    }

    get currentTime(): string {
        return "00:00"; //this.player.currentTime;
    }

    get duration(): string {
        return "02:18"; //this.player.duration;
    }

    constructor() {        
    }

    ngOnInit(): void {
        this.player = new Audio();
        this.player.src = this.track.src;
        this.player.title = this.track.title;

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
