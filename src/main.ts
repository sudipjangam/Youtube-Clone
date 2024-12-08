import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { SidebarComponent } from './app/components/sidebar/sidebar.component';
import { VideoGridComponent } from './app/components/video-grid/video-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, VideoGridComponent],
  template: `
    <app-header />
    <app-sidebar />
    <main class="pt-14 pl-64">
      <app-video-grid />
    </main>
  `,
})
export class App {
  name = 'YouTube Clone';
}

bootstrapApplication(App);