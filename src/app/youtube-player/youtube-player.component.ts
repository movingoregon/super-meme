import { Component, OnInit, EventEmitter, AfterContentInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { YoutubePlayerService } from './services/youtube-player.service';
import { YT } from './models/youtube';
const domEleId = 'player';

@Component({
  selector: 'ng5-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: []
})
export class YoutubePlayerComponent implements AfterContentInit {
  @Input() videoId: string;
  @Input() height: number;
  @Input() width: number;
  @Input() playerParams: YT.PlayerVars;

  @Output() playerReadyEvent = new EventEmitter<YT.Player>();
  @Output() playerStateChangeEvent = new EventEmitter<YT.PlayerState>();

  constructor(private playerService: YoutubePlayerService) { }

  ngAfterContentInit() {
    const playerOptions: YT.PlayerOptions = {
      videoId: this.videoId || '',
      height: this.height || 300,
      width: this.width || 300,
      playerVars: {
        ...this.playerParams,
        enablejsapi: 1
      }
    };

    this.playerService.loadPlayerApi();
    this.playerService.createPlayer(domEleId, playerOptions, this.playerReadyEvent, this.playerStateChangeEvent);
  }
}
