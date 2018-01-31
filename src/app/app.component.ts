import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videoId = '';

  setupPlayer = (player) => {
    player.loadVideoById('YAkgqiyBOrQ');
  }

  playerStateChange = (event) => {
    console.log(event);
  }
}
