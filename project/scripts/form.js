// Data model array provided by the assignment guidelines
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power converter", averagerating: 4.7 },
  { id: "fs-1987", name: "warp drive", averagerating: 4.1 },
  { id: "nv-1966", name: "tricorder", averagerating: 4.8 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");
    
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
    
            option.value = product.id;
            
            
            const formattedName = product.name.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
                
            option.textContent = formattedName;
            productSelect.appendChild(option);
        });
    }

    const lastModifiedEl = document.getElementById("lastModified");
    if (lastModifiedEl) {
        lastModifiedEl.textContent = document.lastModified;
    }
});
