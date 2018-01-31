import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubePlayerService } from './common/services/youtube-player.service';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [YoutubePlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
