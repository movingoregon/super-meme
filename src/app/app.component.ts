import { Component } from '@angular/core';

@Component({
  selector: 'ng5-root',
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
