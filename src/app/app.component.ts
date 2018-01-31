import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  videoId = 'YAkgqiyBOrQ';

  constructor() {
    this.videoId = '';

    setTimeout(() => {

    }, 1000);
  }

  setupPlayer = (player) => {
    player.loadVideoById('YAkgqiyBOrQ');
  }
}
