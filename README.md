# YouTube Player

* [Description](#Description)
* [Usage](#usage)
* [Events](#Events)
* [Download](#download)

## Description
`ng5-yt-player` is a component developed using angular 5 and youtube iframe_api. 

## Usage

```js
/**
 * @typedef options
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 * @param {Number} width
 * @param {Number} height
 * @param {String} videoId
 * @param {Object} playerParams
 * @param {Object} playerReadyEvent
 * @param {Object} playerStateChangeEvent
 */

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */


import { YouTubePlayerModule } from 'ng5-yt-player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

```HTML
<ng5-youtube-player [videoId]="videoId" [height]="300" [width]="300" [playerParams]="{}" 
    (playerReadyEvent)="setupPlayer($event)" (playerStateChangeEvent)="playerStateChange($event)">
</ng5-youtube-player>

```
## Events
* `playerReadyEvent` - event emitter is used to listen player ready event and it provies an instance of player  `YT.Player`.
* `playerStateChangeEvent` - event emitter is used to listen player State Change Events, such as `Play`, `Pause`.
  * `Play`- 1
  * `Pause` - 2

## Download

Using [NPM](https://www.npmjs.org/):

```sh
 npm install ng5-yt-player --save
```