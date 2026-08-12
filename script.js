//your code here!
const list = document.getElementById("infi-list");

let count = 0;

// Function to add list items
function addItems(number) {
    for (let i = 0; i < number; i++) {
        count++;

        const li = document.createElement("li");
        li.textContent = `Item ${count}`;

        list.appendChild(li);
    }
}

// Add 10 items initially
addItems(10);

// Detect when user reaches the bottom
window.addEventListener("scroll", function () {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        addItems(2);
    }

});
