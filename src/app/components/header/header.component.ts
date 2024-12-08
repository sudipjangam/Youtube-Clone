import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <header class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div class="flex items-center justify-between px-4 h-14">
        <div class="flex items-center">
          <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img src="../../assets/img/youtubelogo.png" alt="YouTube Logo" class="h-5 ml-4">
          <!-- <img src="../youtubelogo.png" alt="YouTube Logo" class="h-5 ml-4 dark:hidden">
          <img src="../youtubelogo.png" alt="YouTube Logo" class="h-5 ml-4 hidden dark:block"> -->
        </div>
        
        <div class="flex-1 max-w-2xl mx-4">
          <div class="flex">
            <input
              type="text"
              placeholder="Search"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-l-full focus:outline-none focus:border-blue-500"
              [(ngModel)]="searchQuery"
            >
            <button class="px-6 py-2 bg-gray-100 dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-full hover:bg-gray-200 dark:hover:bg-gray-600">
              <svg class="w-5 h-5 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        <div class="flex items-center space-x-4">
          <button 
            (click)="toggleTheme()" 
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!(isDarkMode$ | async)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              <path *ngIf="isDarkMode$ | async" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
            </svg>
          </button>
          <button class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div class="relative">
            <button 
              (click)="toggleProfileMenu()"
              class="w-8 h-8 rounded-full overflow-hidden"
            >
              <img src="https://picsum.photos/seed/user/32/32" alt="Profile" class="w-full h-full object-cover">
            </button>

            <div *ngIf="showProfileMenu" class="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2">
              <div class="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center">
                  <img src="https://picsum.photos/seed/user/32/32" alt="Profile" class="w-10 h-10 rounded-full">
                  <div class="ml-3">
                    <p class="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">john.doe.com</p>
                  </div>
                </div>
              </div>

              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                  YouTube Studio
                </a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                  Purchases and memberships
                </a>
                <div class="border-t border-gray-200 dark:border-gray-700">
                  <div class="px-4 py-2">
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Language</p>
                    <select class="mt-1 block w-full text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-800">
                      <option value="en">English</option>
                      <option value="hi">Hindi</option>
                      <option value="mr">Marathi</option>
                    </select>
                  </div>
                  <div class="px-4 py-2">
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Restricted Mode</p>
                    <div class="mt-1 flex items-center">
                      <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600">
                      <span class="ml-2 text-sm text-gray-700 dark:text-gray-200">Off</span>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 dark:border-gray-700">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Settings
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Help
                  </a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  searchQuery: string = '';
  showProfileMenu: boolean = false;
  isDarkMode$ = this.themeService.isDarkMode$;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }
}