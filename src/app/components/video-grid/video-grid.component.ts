import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoService } from '../../services/video.service';
import { VideoCardComponent } from '../video-card/video-card.component';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video-grid',
  standalone: true,
  imports: [CommonModule, VideoCardComponent],
  template: `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      @for (video of videos; track video.id) {
        <app-video-card [video]="video" />
      }
    </div>
  `
})
export class VideoGridComponent implements OnInit {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.videoService.getVideos().subscribe(videos => {
      this.videos = videos;
    });
  }
}