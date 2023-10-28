// This function replaces score patterns with "SCORE HIDDEN"
function hideScores(element) {
    const scorePattern = /\b\d{1,2}-\d{1,2}\b/g;
    element.textContent = element.textContent.replace(scorePattern, "SCORE HIDDEN");
}

// Find video titles
const videoTitles = document.querySelectorAll('#video-title');
videoTitles.forEach(hideScores);

// Find potential thumbnails with scores
const thumbnailTexts = document.querySelectorAll('.ytd-thumbnail-overlay-text-renderer');
thumbnailTexts.forEach(hideScores);

// Since YouTube loads content dynamically, we need to observe changes and hide scores as new content loads
const observer = new MutationObserver(() => {
    const videoTitles = document.querySelectorAll('#video-title');
    videoTitles.forEach(hideScores);

    const thumbnailTexts = document.querySelectorAll('.ytd-thumbnail-overlay-text-renderer');
    thumbnailTexts.forEach(hideScores);
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
