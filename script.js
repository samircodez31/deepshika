const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle navigation visibility
});

// Fade-in and fade-out effect for sections
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.add('fade-out');
            entry.target.classList.remove('fade-in');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});


// Select all audio elements
const tracks = document.querySelectorAll('.track audio');

// Function to handle track change
function handleTrackEnd() {
    // Find the currently playing track
    const currentTrack = this;
    // Get the next sibling track
    const nextTrack = currentTrack.parentElement.nextElementSibling?.querySelector('audio');

    // If there is a next track, play it
    if (nextTrack) {
        nextTrack.play();
        highlightCurrentTrack(nextTrack);
    }
}

// Function to highlight the current track
function highlightCurrentTrack(currentAudio) {
    // Remove highlight from all tracks
    tracks.forEach(track => {
        track.parentElement.classList.remove('playing');
    });
    // Highlight the currently playing track
    currentAudio.parentElement.classList.add('playing');
}

// Add event listeners to each track
tracks.forEach(track => {
    track.addEventListener('ended', handleTrackEnd);
    track.addEventListener('play', () => highlightCurrentTrack(track));
});
