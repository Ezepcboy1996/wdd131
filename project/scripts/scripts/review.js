document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "reviewCount"; 
    
    // Retrieve metrics or instantiate baseline
    let currentCount = parseInt(localStorage.getItem(STORAGE_KEY)) || 0;
    
    currentCount += 1;
    localStorage.setItem(STORAGE_KEY, currentCount);
    
    const counterDisplay = document.getElementById("reviewCount");
    if (counterDisplay) {
        counterDisplay.textContent = currentCount;
    }

    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }
});

