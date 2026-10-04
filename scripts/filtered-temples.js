const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2616.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-70489.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8453.jpg"
  }
];


// 2. Display Cards Engine
function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-container");
  if (!container) return;
  
  container.innerHTML = ""; 
  
  filteredTemples.forEach(temple => {
    const card = document.createElement("figure");
    card.className = "temple-card";
    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;
    container.appendChild(card);
  });
}

function extractYear(dateString) {
  const segments = dateString.split(",");
  const yearString = segments[0].trim();
  return parseInt(yearString, 10);
}

function filterTemples(criteria) {
  const galleryTitle = document.getElementById("gallery-title");
  let result = [];
  
  if (criteria === "home") {
    result = temples;
    if (galleryTitle) galleryTitle.textContent = "Home";
  } else if (criteria === "old") {
    result = temples.filter(t => extractYear(t.dedicated) < 1900);
    if (galleryTitle) galleryTitle.textContent = "Old Temples (Built before 1900)";
  } else if (criteria === "new") {
    result = temples.filter(t => extractYear(t.dedicated) > 2000);
    if (galleryTitle) galleryTitle.textContent = "New Temples (Built after 2000)";
  } else if (criteria === "large") {
    result = temples.filter(t => t.area > 90000);
    if (galleryTitle) galleryTitle.textContent = "Large Temples (Over 90,000 sq ft)";
  } else if (criteria === "small") {
    result = temples.filter(t => t.area < 10000);
    if (galleryTitle) galleryTitle.textContent = "Small Temples (Under 10,000 sq ft)";
  }
  
  displayTemples(result);
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer generation
  const yearEl = document.getElementById("currentyear");
  const modEl = document.getElementById("lastModified");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (modEl) modEl.textContent = document.lastModified;

  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
      hamburger.textContent = nav.classList.contains('show') ? '✖' : '☰';
    });
  }

  const buttonMap = {
    "home-btn": "home",
    "old-btn": "old",
    "new-btn": "new",
    "large-btn": "large",
    "small-btn": "small"
  };

  Object.keys(buttonMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        filterTemples(buttonMap[id]);
        
        
        document.querySelectorAll("#main-nav a").forEach(link => link.classList.remove("active"));
        btn.classList.add("active");
        
        // Close menu dropdown drawer automatically on mobile view selection
        if (nav && nav.classList.contains('show')) {
          nav.classList.remove('show');
          if (hamburger) hamburger.textContent = '☰';
        }
      });
    }
  });

  
  filterTemples("home");
});
