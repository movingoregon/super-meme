import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { YT } from '../../youtube-player/models/youtube';

const $window: any = window;

@Injectable()
export class YoutubePlayerService {
  public player: YT.Player;

  constructor(private zone: NgZone) { }

  createPlayer(domElementId: string, playerOptions: YT.PlayerOptions, readyEvent: EventEmitter<YT.Player>) {
    return setInterval(() => {
      if ((typeof $window.YT !== 'undefined') && $window.YT && $window.YT.Player) {
        this.player = new $window.YT.Player(domElementId, {
          ...playerOptions,
          events: {
            onReady: (ev: YT.PlayerEvent) => {
              this.zone.run(() =>
                readyEvent && readyEvent.emit(ev.target));
            }
          }
        });
      }
    }, 100);
  }
}
