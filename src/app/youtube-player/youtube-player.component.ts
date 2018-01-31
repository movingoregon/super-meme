import { Component, OnInit, EventEmitter, AfterContentInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { YoutubePlayerService } from '../common/services/youtube-player.service';
import { YT } from './models/youtube';
const domEleId = 'player';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: []
})
export class YoutubePlayerComponent implements AfterContentInit {
  @Input() videoId: string;
  @Input() height: number;
  @Input() width: number;
  @Input() playerParams: YT.PlayerVars;

  @Output() ready = new EventEmitter<YT.Player>();

  constructor(private playerService: YoutubePlayerService) { }

  ngAfterContentInit() {
    const doc = window.document;
    const playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'http://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);

    const playerOptions: YT.PlayerOptions = {
      videoId: this.videoId,
      height: this.height,
      width: this.width,
      playerVars: {
        autoplay: 0,
        color: 'red',
        enablejsapi: 1
      }
    };
    this.playerService.createPlayer(domEleId, playerOptions, this.ready);
  }
}
