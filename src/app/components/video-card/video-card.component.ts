import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col cursor-pointer">
      <div class="relative">
        <img
          [src]="video.thumbnailUrl"
          [alt]="video.title"
          class="w-full rounded-xl"
        >
        <span class="absolute bottom-1 right-1 bg-black text-white text-xs px-2 py-1 rounded">
          8:20
        </span>
      </div>
      <div class="flex mt-3 space-x-3">
        <img
          [src]="video.channelAvatarUrl"
          [alt]="video.channelName"
          class="w-9 h-9 rounded-full"
        >
        <div>
          <h3 class="font-semibold line-clamp-2 dark:text-white">{{ video.title }}</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">{{ video.channelName }}</p>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            {{ video.views | number }} views • {{ video.uploadedAt }}
          </p>
        </div>
      </div>
    </div>
  `
})
export class VideoCardComponent {
  @Input() video!: Video;
}