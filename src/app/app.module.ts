import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


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
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [YoutubePlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
