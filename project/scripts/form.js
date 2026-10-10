// Official assignment array data source
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power cells", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "ac-100", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
    
            // Sets array's ID as the element value per guidelines
            option.value = product.id;
            
            // Custom title-case formatter for optimal presentation layout
            const formattedName = product.name.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
                
            option.textContent = formattedName;
            productSelect.appendChild(option);
        });
    }

    // Dynamic Footer Last Modified Date
    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }
});
