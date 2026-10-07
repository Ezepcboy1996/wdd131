document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "reviewSubmissionCounter";
    
    // Check if entry exists, retrieve value or fall back to 0
    let currentCount = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
    
    // Increment submission counter metrics tracking parameter
    currentCount += 1;
    localStorage.setItem(STORAGE_KEY, currentCount);
    
    // Update numerical counter field cleanly in the HTML view
    const counterDisplay = document.getElementById("reviewCount");
    if (counterDisplay) {
        counterDisplay.textContent = currentCount;
    }

    // Handle last modified validation for footer component consistency
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }
});
