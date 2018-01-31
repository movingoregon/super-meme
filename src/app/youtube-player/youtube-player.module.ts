import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { YoutubePlayerComponent } from './youtube-player.component';
import { YoutubePlayerService } from './services/youtube-player.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    declarations: [
        YoutubePlayerComponent
    ],
    schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    providers: [YoutubePlayerService],
    exports: [
        YoutubePlayerComponent
    ]
})
export class YouTubePlayerModule {
}
