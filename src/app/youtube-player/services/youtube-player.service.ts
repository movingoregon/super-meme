import { Injectable, NgZone, EventEmitter } from '@angular/core';
import { YT } from '../../youtube-player/models/youtube';

const $window: any = window;
const iFrameSrc = 'http://www.youtube.com/iframe_api';

@Injectable()
export class YoutubePlayerService {
  constructor(private zone: NgZone) { }

  createPlayer(domElementId: string, playerOptions: YT.PlayerOptions,
    readyEvent: EventEmitter<YT.Player>, stateChangeEvent: EventEmitter<YT.PlayerState>) {
    return setInterval(() => {
      if ((typeof $window.YT !== 'undefined') && $window.YT && $window.YT.Player) {
        const player = new $window.YT.Player(domElementId, {
          ...playerOptions,
          events: {
            onReady: (ev: YT.PlayerEvent) => {
              this.zone.run(() =>
                readyEvent.emit(ev.target));
            },
            onStateChange: (ev: YT.OnStateChangeEvent) => {
              /**
               * player state is 1 (playing), 2 for Pause. Reference https://developers.google.com/youtube/iframe_api_reference
               */
              this.zone.run(() => stateChangeEvent.next(ev.data));
            }
          }
        });
      }
    }, 100);
  }

  loadPlayerApi(): void {
    const doc = $window.document;
    const playerApi = doc.createElement('script');
    playerApi.type = 'text/javascript';
    playerApi.src = iFrameSrc;
    doc.body.appendChild(playerApi);
  }
}
