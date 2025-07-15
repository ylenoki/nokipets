let hunger = 50;
let happiness = 50;
let cleanliness = 50;

function updateStats() {
  document.getElementById("hunger").textContent = hunger;
  document.getElementById("happiness").textContent = happiness;
  document.getElementById("cleanliness").textContent = cleanliness;
}

function feed() {
  hunger = Math.max(0, hunger - 10);
  updateStats();
}

function play() {
  happiness = Math.min(100, happiness + 10);
  hunger = Math.min(100, hunger + 5);
  cleanliness = Math.max(0, cleanliness - 5);
  updateStats();
}

function groom() {
  cleanliness = Math.min(100, cleanliness + 15);
  updateStats();
}

function adoptCat(name, image) {
  document.getElementById("petNameDisplay").textContent = name;
  document.getElementById("petImage").src = image;
  document.getElementById("adoptionSection").classList.add("hidden");
  document.getElementById("petDashboard").classList.remove("hidden");
  updateStats();
}

// Auto decay stats every 5 seconds
setInterval(() => {
  hunger = Math.min(100, hunger + 1);
  happiness = Math.max(0, happiness - 1);
  cleanliness = Math.max(0, cleanliness - 1);
  updateStats();
}, 5000);
