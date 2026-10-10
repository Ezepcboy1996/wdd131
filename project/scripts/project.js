// 1. Localized Data Matrix (Objects inside an Array with verified, stable image URLs)
const hiddenGems = [
    { 
        id: "gem-trail", 
        name: "Oak Creek Trail", 
        category: "nature", 
        location: "North Valley", 
        desc: "A hidden, shaded trail following a natural mountain creek. Ideal for morning walks and peaceful photography away from traffic.", 
        img: "https://cloudfront.traillink.com/photos/oak-creek-trail_288129_sc.jpg" 
    },
    { 
        id: "gem-coffee", 
        name: "The Foundry Coffee Vault", 
        category: "food", 
        location: "Downtown Quarter", 
        desc: "Built inside a repurposed industrial warehouse, this specialty shop roasts coffee beans on-site and hosts weekend open-mics.", 
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXSgJJ1uCZ2yfEVN4wCpOSZLi4Ja5tWy0MaDw4XXEr6ebeGEff2DQZhg&s=10" 
    },
    { 
        id: "gem-gallery", 
        name: "Artisan Co-Op Gallery", 
        category: "culture", 
        location: "East Foothills", 
        desc: "A non-profit exhibition center showcasing clay pottery, metal sculptures, and oil paintings created exclusively by regional residents.", 
        img: "https://plus.unsplash.com/premium_photo-1679634980848-3eac70956469?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
    },
    { 
        id: "gem-overlook", 
        name: "Summit Ridge Point", 
        category: "nature", 
        location: "South Ridge Park", 
        desc: "The highest vehicle-accessible elevation point in the tri-city area, providing clear panoramic views of the entire valley basin.", 
        img: "https://images.unsplash.com/photo-1659402520794-7feb9a19d499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" 
    },
    { 
        id: "gem-bistro", 
        name: "Harvest Garden Bistro", 
        category: "food", 
        location: "Westside Farms", 
        desc: "An outdoor farm-to-table kitchen serving seasonal dishes crafted entirely around ingredients gathered daily from adjacent greenhouses.", 
        img: "https://images.stockcake.com/public/5/f/9/5f9e80cb-f7c1-4101-aeb8-3b6366ab99ea_medium/outdoor-summer-feast-stockcake.jpg" 
    }
];

document.addEventListener("DOMContentLoaded", () => {
    // Inject Last Modified Date timestamp inside all footers dynamically
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }

    // Initialize module parameters depending on which page element is active in the viewport
    initDirectorySection();
    initFormMetricsTracker();
});

// Function 1: Render Interface Cards with Template Literals and Conditional Checking
function displayGemsCatalog(filteredItems) {
    const catalogGrid = document.getElementById("gemsGrid");
    if (!catalogGrid) return;

    catalogGrid.innerHTML = "";

    // Conditional Branching validation verification checks
    if (filteredItems.length === 0) {
        catalogGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--error-color); font-weight: bold;">No hidden gems found matching this specific category selection.</p>`;
        return;
    }

    // Array Method processing loop utilizing template literals exclusively to generate standard HTML components
    filteredItems.forEach(item => {
        const isFavorite = localStorage.getItem(`fav-${item.id}`) === "true";
        const labelText = isFavorite ? "❤️ Remove Favorite" : "☆ Save to Favorites";

        const cardTemplate = `
            <article class="gem-card">
                <img src="${item.img}" alt="${item.name} location visual showcase" loading="lazy">
                <div class="gem-info">
                    <span class="gem-tag">${item.category}</span>
                    <h3>${item.name}</h3>
                    <p class="gem-location">📍 <em>${item.location}</em></p>
                    <p class="gem-desc">${item.desc}</p>
                    <button class="favorite-btn" data-id="${item.id}">${labelText}</button>
                </div>
            </article>
        `;
        catalogGrid.insertAdjacentHTML("beforeend", cardTemplate);
    });

    // Rebind active click triggers to newly generated canvas DOM targets
    bindFavoriteClicks();
}

// Function 2: Filter Router and Action Observers (DOM Selection & Event Listening interaction)
function initDirectorySection() {
    const controlsContainer = document.getElementById("filterControls");
    if (!controlsContainer) return;

    // Execute standard primary rendering path on directory page load
    displayGemsCatalog(hiddenGems);

    controlsContainer.addEventListener("click", (event) => {
        if (!event.target.classList.contains("filter-btn")) return;

        // Reset visual active tracking classes on filter layout
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        event.target.classList.add("active");

        const pickedCategory = event.target.getAttribute("data-category");

        // Conditional path sorting through core Array Filter methods
        if (pickedCategory === "all") {
            displayGemsCatalog(hiddenGems);
        } else {
            const matches = hiddenGems.filter(gem => gem.category === pickedCategory);
            displayGemsCatalog(matches);
        }
    });
}

// Function 3: DOM Favoriting Logic (Interacting with and modifying specific targets dynamically)
function bindFavoriteClicks() {
    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const targetId = e.target.getAttribute("data-id");
            const keyName = `fav-${targetId}`;
            const state = localStorage.getItem(keyName) === "true";

            // Toggle boolean value state inside the local storage file system context
            localStorage.setItem(keyName, !state);

            // Directly modify the text content labels in place without a complete canvas refresh
            if (!state) {
                e.target.textContent = "❤️ Remove Favorite";
            } else {
                e.target.textContent = "☆ Save to Favorites";
            }
        });
    });
}

// Function 4: Handle form completion states and increment localStorage recommendation counts
function initFormMetricsTracker() {
    const submissionTextTarget = document.getElementById("submissionCount");
    const activeFormElement = document.getElementById("recommendationForm");

    if (activeFormElement) {
        activeFormElement.addEventListener("submit", () => {
            let count = parseInt(localStorage.getItem("totalSubmissionsCount")) || 0;
            localStorage.setItem("totalSubmissionsCount", count + 1);
        });
    }

    if (submissionTextTarget) {
        const recordedCount = localStorage.getItem("totalSubmissionsCount") || 0;
        submissionTextTarget.textContent = `${recordedCount}`;
    }
}
