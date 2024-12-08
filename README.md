# YouTube Clone

A feature-rich YouTube clone built using Angular, designed to provide a streamlined and responsive video streaming experience. This project demonstrates core Angular concepts and showcases an implementation of modern web application development.

## Features

- **Responsive Design**: Optimized for both desktop and mobile views.
- **Video Streaming**: Integrated with a mock backend or YouTube API for video playback.
- **Search Functionality**: Powerful search bar to find videos by title, tags, or categories.
- **Video Player**: Customizable video player with options like play, pause, volume control, and fullscreen.
- **User Authentication**: Login and registration functionality for personalized experiences (optional feature).
- **Comments and Likes**: User interactions like commenting and liking videos.
- **Playlists**: Create, edit, and manage playlists.

## About This Project

This project was inspired by the YouTube platform, aiming to replicate its core features while providing a foundation for learning advanced Angular concepts. The application utilizes Angular's powerful capabilities to manage state, interact with REST APIs, and handle routing effectively. It serves as a practical demonstration of how to build scalable and maintainable single-page applications (SPAs).

## Technologies Used

- **Frontend**:
  - Angular (latest version)
  - TypeScript
  - RxJS (for reactive programming)
  - Angular Material (for UI components)

- **Backend**:
  - Mock backend with JSON Server (optional for development)
  - Alternatively, integrated with YouTube Data API v3

- **Styling**:
  - SCSS
  - Flexbox and Grid Layout for responsiveness

- **Others**:
  - ngx-infinite-scroll (for loading more videos dynamically)
  - Angular Router (for navigation)

## Getting Started

Follow the steps below to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/youtube-clone.git
   cd youtube-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   ng serve
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:4200/`.

5. **Optional: Setup JSON Server** (if not using an external API):
   ```bash
   npm install -g json-server
   json-server --watch db.json
   ```

## Future Enhancements

- Add video upload functionality
- Implement user profiles and subscriptions
- Support for dark mode
- Improve performance for large datasets
- Add more animations and transitions

## Contribution

Contributions are welcome! Feel free to open issues, create pull requests, or suggest new features.

## License

This project is licensed under the [MIT License](LICENSE).

---
