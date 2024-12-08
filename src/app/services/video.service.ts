import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private mockVideos: Video[] = [
    {
      id: '1',
      title: 'Building a YouTube Clone with Angular',
      description: 'Learn how to build a YouTube clone using Angular and Tailwind CSS',
      thumbnailUrl: 'https://picsum.photos/seed/1/320/180',
      channelName: 'Angular Dev',
      channelAvatarUrl: 'https://picsum.photos/seed/avatar1/40/40',
      views: 15000,
      uploadedAt: '2 days ago'
    },
    {
      id: '2',
      title: 'Tailwind CSS Tutorial',
      description: 'Complete guide to Tailwind CSS',
      thumbnailUrl: 'https://picsum.photos/seed/2/320/180',
      channelName: 'CSS Master',
      channelAvatarUrl: 'https://picsum.photos/seed/avatar2/40/40',
      views: 25000,
      uploadedAt: '1 week ago'
    },
    {
      id: '3',
      title: 'Angular Performance Tips',
      description: 'Advanced techniques for optimizing Angular applications',
      thumbnailUrl: 'https://picsum.photos/seed/3/320/180',
      channelName: 'Tech Guru',
      channelAvatarUrl: 'https://picsum.photos/seed/avatar3/40/40',
      views: 50000,
      uploadedAt: '3 days ago'
    },
    {
      id: '4',
      title: 'Web Development in 2024',
      description: 'Latest trends in web development',
      thumbnailUrl: 'https://picsum.photos/seed/4/320/180',
      channelName: 'Future Code',
      channelAvatarUrl: 'https://picsum.photos/seed/avatar4/40/40',
      views: 100000,
      uploadedAt: '1 day ago'
    }
  ];

  getVideos(): Observable<Video[]> {
    return of(this.mockVideos);
  }
}