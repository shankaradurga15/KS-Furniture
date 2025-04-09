function animateNumber(elementId, finalNumber, duration) {
    const element = document.getElementById(elementId);
    let startNumber = 0; // Starting number
    const increment = Math.ceil(finalNumber / (duration / 10)); // Adjust increment to fit duration

    const timer = setInterval(() => {
        startNumber += increment;
        if (startNumber >= finalNumber) {
            element.textContent = finalNumber; // Ensure the final number matches exactly
            clearInterval(timer);
        } else {
            element.textContent = startNumber;
        }
    }, 10); // Runs every 10ms
}

// Trigger animation when the page loads
document.addEventListener("DOMContentLoaded", function () {
    animateNumber("product-count", 24000, 2000); // Animate "PRODUCTS" in the header
    animateNumber("products-detail-count", 24000, 2000); // Animate "24000 products"
    animateNumber("years-count", 12, 1500); // Animate "12 years"
});
// Simulated data (replace with real data if fetching from an API)
const statsData = {
    stat1: 1300,
    stat2: 88,
    stat3: 30000,
    stat4: 5000000 // Represented as $5M
};

// Function to animate numbers
function animateValue(id, start, end, duration) {
    const element = document.getElementById(id);
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString(); // Format with commas
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

// Animate stats
animateValue("stat1", 0, statsData.stat1, 2000); // 2 seconds
animateValue("stat2", 0, statsData.stat2, 2000);
animateValue("stat3", 0, statsData.stat3, 2000);
animateValue("stat4", 0, statsData.stat4, 2000);


const items = [
    { name: "Single Bed", url: "bed.html" },
    { name: "Double-size bed", url: "bed.html" },
    { name: "Kattil", url: "bed.html" },
    { name: "Steel Cot", url: "bed.html" },
    { name: "Wood Cot", url: "bed.html" },
    { name: "Tiny Bed", url: "bed.html" },
    { name: "Bed", url: "bed.html" },
    { name: "Chair", url: "chair.html" },
    { name: "Armchair", url: "chair.html" },
    { name: "Recliner Chair", url: "chair.html" },
    { name: "Rocking Chair", url: "chair.html" },
    { name: "Dining Chair", url: "chair.html" },
    { name: "Plastic Chair", url: "chair.html" },
    { name: "Study Table", url: "table.html" },
    { name: "Table", url: "table.html" },
    { name: "Dressing Table", url: "table.html" },
    { name: "Dinning Table", url: "table.html" },
    { name: "Wood Desk", url: "table.html" },
    { name: "Dinning Table with Chairs", url: "table.html" },
    { name: "Desk", url: "table.html" },
    { name: "King-size Bed", url: "bed.html" },
    { name: "Washing Machine", url: "washing machine.html" },
    { name: "Front-load Machine", url: "washing machine.html" },
    { name: "Top-load Machine", url: "washing machine.html" },
    { name: "Semi-automatic Machine", url: "washing machine.html" },
    { name: "Mixer", url: "mixer.html" },
    { name: "Electric Blender", url: "mixer.html" },
    { name: "Hand Mixer", url: "mixer.html" },
    { name: "Stand Mixer", url: "mixer.html" },
    { name: "Food Mixer", url: "mixer.html" },
    { name: "Coffee Blender", url: "mixer.html" },
    { name: "Spice Blender", url: "mixer.html" },
    { name: "Grinder", url: "mixer.html" },
    { name: "Sofa", url: "sofa.html" },
    { name: "Modular Sofa", url: "sofa.html" },
    { name: "Two Seat Sofa", url: "sofa.html" },
    { name: "Sleeper Sofa", url: "sofa.html" },
    { name: "Chesterfield Sofa", url: "sofa.html" },
    { name: "Recliner Sofa", url: "sofa.html" },
    { name: "Futon Sofa", url: "sofa.html" },
    { name: "Tuxedo Sofa", url: "sofa.html" },
    { name: "Tailored Sofa", url: "sofa.html" },
    { name: "Camelback Sofa", url: "sofa.html" },
    { name: "Long Seat Sofa", url: "sofa.html" },
    { name: "Divan Sofa", url: "sofa.html" },
    { name: "Cupboard", url: "cupboard.html" },
    { name: "Small Cupboard", url: "cupboard.html" },
    { name: "Large Cupboard", url: "cupboard.html" },
    { name: "Wardrobe", url: "cupboard.html" },
    { name: "Small Wardrobe", url: "cupboard.html" },
    { name: "Large Wardrobe", url: "cupboard.html" },
    { name: "Sliding Wardrobe", url: "cupboard.html" },
    { name: "Cabinet", url: "cupboard.html" },
    { name: "Base Cabinet", url: "cupboard.html" },
    { name: "Corner Cabinet", url: "cupboard.html" },
    { name: "Glass Cabinet", url: "cupboard.html" },
    { name: "Tall Cabinet", url: "cupboard.html" },
    { name: "Wardrobe", url: "cupboard.html" },
    { name: "Refrigerator", url: "fridge.html" },
    { name: "Single Door Refrigerator", url: "fridge.html" },
    { name: "Double Door Refrigerator", url: "fridge.html" },
    { name: "Triple Door Refrigerator", url: "fridge.html" },
    { name: "Mini Refrigerator", url: "fridge.html" },
];

function liveSearch() {
    let input = document.getElementById("searchBox");
    let results = document.getElementById("searchResults");
    let query = input.value.toLowerCase();

    results.innerHTML = ""; // Clear previous results

    // If less than 2 characters, don't show results
    if (query.length < 2) {
        results.style.display = "none";
        return;
    }


    let filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

    if (filteredItems.length === 0) {
        results.innerHTML = "<li>No results found</li>";
    } else {
        filteredItems.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="${item.url}" style="text-decoration: none; color: black;">${item.name}</a>`;
            li.onclick = () => window.location.href = item.url; // Navigate on click
            results.appendChild(li);
        });
    }

    results.style.display = "block";
}

// Click outside to reset search box
document.addEventListener("click", function(event) {
    let searchBox = document.querySelector(".search-box");
    let input = document.getElementById("searchBox");
    let results = document.getElementById("searchResults");

    if (!searchBox.contains(event.target)) {
        input.value = ""; // Clear input
        results.style.display = "none"; // Hide results
    }
});

function increaseQuantity() {
    let quantity = document.getElementById("quantity");
    quantity.value = parseInt(quantity.value) + 1;
}

function decreaseQuantity() {
    let quantity = document.getElementById("quantity");
    if (parseInt(quantity.value) > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
}
//about us
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
//menu
const toggleBtn = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
const menuItems = document.querySelectorAll('.menu-list li');

toggleBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
    toggleBtn.classList.toggle('active');

    // Apply staggered animation
    if (menuList.classList.contains('active')) {
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 300); // Delay effect
        });
    } else {
        menuItems.forEach((item) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
        });
    }
});
//product container
function switchImage(imgElement) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = imgElement.src;

  // Remove active class from all
  document.querySelectorAll(".thumbnail").forEach(thumb => thumb.classList.remove("active"));
  imgElement.classList.add("active");
}

function toggleReview() {
  const review = document.getElementById("extraReview");
  review.classList.toggle("show");
}
