document.addEventListener('DOMContentLoaded', function() {
    const viewCountElement = document.getElementById('view-count');

    // Check if the view count is already stored in localStorage
    let viewCount = localStorage.getItem('siteViewCount');

    // If not, initialize it to 0
    if (!viewCount) {
        viewCount = 0;
    }

    // Increment the view count
    viewCount = parseInt(viewCount) + 1;

    // Update the view count in localStorage
    localStorage.setItem('siteViewCount', viewCount);

    // Display the view count on the page
    viewCountElement.textContent = viewCount;
});
