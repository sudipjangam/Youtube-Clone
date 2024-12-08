import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="fixed left-0 top-14 w-64 h-screen bg-white dark:bg-gray-900 overflow-y-auto">
      <div class="p-3">
        <div class="flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer">
          <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="ml-6 dark:text-white">Home</span>
        </div>
        <div class="flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer">
          <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
          </svg>
          <span class="ml-6 dark:text-white">Shorts</span>
        </div>
        <div class="flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer">
          <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="ml-6 dark:text-white">Subscriptions</span>
        </div>
        <hr class="my-3 border-gray-200 dark:border-gray-700">
        <div class="flex items-center px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl cursor-pointer">
          <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="ml-6 dark:text-white">History</span>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent {}