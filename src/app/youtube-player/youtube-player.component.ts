import { Component, OnInit, EventEmitter, AfterContentInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { YoutubePlayerService } from '../common/services/youtube-player.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements AfterContentInit {
  @Input() videoId;
  @Input() height: number;
  @Input() width: number;
  @Input() playerParams: any;

  @Output() ready = new EventEmitter<any>();

  constructor(private playerService: YoutubePlayerService) { }

  ngAfterContentInit() {
    const doc = window.document;
    const playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = 'https://www.youtube.com/iframe_api';
    doc.body.appendChild(playerApi);
    this.playerService.createPlayer('player', this.videoId, { height: this.height, width: this.width }, {}, this.ready);
  }
}
