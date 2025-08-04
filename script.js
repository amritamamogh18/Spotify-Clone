// Player functionality
document.addEventListener('DOMContentLoaded', function() {
  // Play/pause button
  const playPauseBtn = document.querySelector('.play-pause');
  const playBtns = document.querySelectorAll('.play-btn');
  
  playPauseBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-pause')) {
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
    } else {
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
    }
  });
  
  // Play buttons on song cards
  playBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const songCard = this.closest('.song-card');
      const img = songCard.querySelector('img').src;
      const title = songCard.querySelector('h3').textContent;
      const artist = songCard.querySelector('p').textContent;
      
      // Update player with selected song
      const playerSongImg = document.querySelector('.player-song img');
      const playerSongTitle = document.querySelector('.song-details h4');
      const playerSongArtist = document.querySelector('.song-details p');
      
      playerSongImg.src = img;
      playerSongTitle.textContent = title;
      playerSongArtist.textContent = artist;
      
      // Set play button to pause
      const playIcon = document.querySelector('.play-pause i');
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
    });
  });
  
  // Like button
  const likeBtn = document.querySelector('.like-btn');
  likeBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
      icon.classList.remove('far');
      icon.classList.add('fas');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  });
  
  // Progress bar click
  const progressContainer = document.querySelector('.progress-container');
  const progress = document.querySelector('.progress');
  
  progressContainer.addEventListener('click', function(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = 200; // Song duration in seconds
    
    // Update progress bar width
    const newWidth = (clickX / width) * 100;
    progress.style.width = `${newWidth}%`;
    
    // Update time (simplified)
    const newTime = (clickX / width) * duration;
    const minutes = Math.floor(newTime / 60);
    const seconds = Math.floor(newTime % 60).toString().padStart(2, '0');
    document.querySelector('.time:first-child').textContent = `${minutes}:${seconds}`;
  });
  
  // Simulate progress (for demo)
  setInterval(() => {
    const progress = document.querySelector('.progress');
    const currentWidth = parseFloat(progress.style.width) || 0;
    
    if (currentWidth < 100) {
      progress.style.width = `${currentWidth + 0.5}%`;
      
      // Update time (simplified)
      const duration = 200; // Song duration in seconds
      const newTime = (currentWidth / 100) * duration;
      const minutes = Math.floor(newTime / 60);
      const seconds = Math.floor(newTime % 60).toString().padStart(2, '0');
      document.querySelector('.time:first-child').textContent = `${minutes}:${seconds}`;
    }
  }, 1000);
  
  // Volume slider
  const volumeSlider = document.querySelector('.volume-slider input');
  volumeSlider.addEventListener('input', function() {
    // In a real app, this would control the audio volume
    console.log(`Volume set to ${this.value}%`);
  });
  
  // Playlist card clicks
  const playlistCards = document.querySelectorAll('.playlist-card');
  playlistCards.forEach(card => {
    card.addEventListener('click', function() {
      // In a real app, this would navigate to the playlist
      console.log(`Opening playlist: ${this.querySelector('h3').textContent}`);
    });
  });
});