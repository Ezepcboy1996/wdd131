// Dynamically insert the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically insert the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
