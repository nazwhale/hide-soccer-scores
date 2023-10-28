const imageUrl = chrome.runtime.getURL('icons/icon.png');

function isHighlightsVideo(element) {
    return element.textContent.toLowerCase().includes("highlights")
}

// This function replaces score patterns with "SCORE HIDDEN"
function hideScores(element) {
    if (element == null) {
        return;
    }
    element.textContent = "RESULT HIDDEN"
}

function hideVideo(v) {
    const title = v.querySelector('#video-title');
    if (!title) {
        return;
    }

    if (!isHighlightsVideo(title)) {
        return;
    }

    // select thumbnail
    const thumbnail = v.querySelector('.yt-core-image--fill-parent-height');
    if (!thumbnail) {
        return;
    }


    // hide thumbnail
    thumbnail.style.backgroundImage = `url(${imageUrl})`;
    thumbnail.style.backgroundSize = 'cover';
    thumbnail.style.backgroundRepeat = 'no-repeat';
    thumbnail.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // 1x1 transparent gif

    hideScores(title);
}

function hideCompact(v) {
    // get all yt-formatted-string elements
    const title = v.querySelector('.title');

    console.log(title)
    title.innerText = "asdf"

    // select thumbnail
    const thumbnail = v.querySelector('.yt-core-image--fill-parent-height');
    if (!thumbnail) {
        return;
    }


    // hide thumbnail
    thumbnail.style.backgroundImage = `url(${imageUrl})`;
    thumbnail.style.backgroundSize = 'cover';
    thumbnail.style.backgroundRepeat = 'no-repeat';
    thumbnail.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // 1x1 transparent gif

    hideScores(title)
}

function hider() {
    const videos = document.querySelectorAll('.ytd-video-renderer');
    videos.forEach(v => {
        hideVideo(v)
    });

    const compactVideos = document.querySelectorAll('.ytd-watch-card-compact-video-renderer');
    compactVideos.forEach(v => {
        hideCompact(v)
    });

}
hider()

const observer = new MutationObserver(() => {
    hider()
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
