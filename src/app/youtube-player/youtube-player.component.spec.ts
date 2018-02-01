import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlayerComponent } from './youtube-player.component';
import { YoutubePlayerService } from '../common/services/youtube-player.service';

describe('YoutubePlayerComponent', () => {
  let component: YoutubePlayerComponent;
  let fixture: ComponentFixture<YoutubePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [YoutubePlayerComponent],
      providers: [YoutubePlayerService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
