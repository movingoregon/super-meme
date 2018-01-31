import { Injectable, NgZone, EventEmitter } from '@angular/core';

const $window: any = window;

@Injectable()
export class YoutubePlayerService {
  public player: any;

  constructor(private zone: NgZone) { }

  createPlayer(domElementId: string, videoId: string, playerDim: any, playerOptions: any, playerReady: any) {
    return setInterval(() => {
      if ((typeof $window.YT !== 'undefined') && $window.YT && $window.YT.Player) {
        this.player = new $window.YT.Player(domElementId, {
          height: playerDim.height,
          width: playerDim.width,
          videoId: videoId,
          events: {
            onReady: (ev: any) => {
              this.zone.run(() =>
                playerReady && playerReady.emit(ev.target));
            },
            onStateChange: this.onPlayerStateChange
          }
        });
      }
    }, 100);
  }

  onPlayerStateChange = ($event) => {
    console.log($event);
  }
}
