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
window.onload = () => {
    animateNumber("product-count", 24000, 2000); // Animate "PRODUCTS" in the header
    animateNumber("products-detail-count", 24000, 2000); // Animate "24000 products"
    animateNumber("years-count", 12, 1500); // Animate "12 years"
};
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
    { name: "Tables", url: "chair&table.html" },
    { name: "Armchair", url: "chair&table.html" },
    { name: "Recliner Chair", url: "chair&table.html" },
    { name: "Study Table", url: "chair&table.html" },
    { name: "Wood Table", url: "chair&table.html" },
    { name: "Dinning Table", url: "chair&table.html" },
    { name: "Desk", url: "desk&cabinet.html" },
    { name: "Cabinet", url: "desk&cabinet.html" },
    { name: "King-size Bed", url: "bed.html" }
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
//Menu

document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector(".nav-menu-icon");
    let menu = document.querySelector(".nav-menu");

    // Toggle menu when clicking menu icon
    menuIcon.addEventListener("click", function (event) {
        menu.classList.toggle("active");
        event.stopPropagation(); // Prevent closing when clicking the icon
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove("active"); // Hide menu
        }
    });
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


