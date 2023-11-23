import { colorData } from './colors.js';

const tileContainer = document.getElementById("tile-container");
const feelingFilter = document.getElementById("feeling-filter");

// Function to render tiles based on feeling filter
const renderTiles = (tiles) => {
  tileContainer.innerHTML = ''; // Clear previous tiles

  tiles.forEach(tile => {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.style.backgroundColor = tile.color;
    tileContainer.append(newTile);
  });
};

// Function to populate feeling filter options
const populateFeelingOptions = () => {
  const feelings = [...new Set(colorData.map(tile => tile.feeling))]; // Get unique feelings
  feelings.forEach(feeling => {
    const option = document.createElement('option');
    option.value = feeling.toLowerCase(); // Convert feeling to lowercase for matching
    option.textContent = feeling.charAt(0).toUpperCase() + feeling.slice(1); // Capitalize first letter
    feelingFilter.appendChild(option);
  });
};

// Filter tiles based on selected feeling
feelingFilter.addEventListener('change', () => {
  const selectedFeeling = feelingFilter.value;

  if (selectedFeeling === 'all') {
    renderTiles(colorData); // Show all tiles
  } else {
    const filteredTiles = colorData.filter(tile => tile.feeling.toLowerCase() === selectedFeeling);
    renderTiles(filteredTiles); // Show tiles with selected feeling
  }
});

// Initial setup
populateFeelingOptions();
renderTiles(colorData);

















document.body.addEventListener('click', function(event) {
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    document.body.appendChild(ripple);

    const rect = event.target.getBoundingClientRect();
    const posX = event.clientX - rect.left;
    const posY = event.clientY - rect.top;

    ripple.style.left = `${posX}px`;
    ripple.style.top = `${posY}px`;

    const randomColor = getRandomColor();
    ripple.style.backgroundColor = randomColor;

    ripple.onanimationend = () => {
        document.body.removeChild(ripple);
    };
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}












const button = document.querySelector('.intro button');
const intro = document.querySelector('.intro');
const h1 = document.querySelector('.intro h1');

// Constants
const blackColor = 'black';
const whiteColor = 'white';

// State
let currentColor = 'black'; // black or white

button.addEventListener('click', (event) => {
    console.log("User clicked the button");
    console.log(event);

    if (currentColor === "black") {
        intro.style.backgroundColor = whiteColor;
        intro.style.color = blackColor;
        h1.style.color = blackColor;
        currentColor = 'white';
    } else {
        intro.style.backgroundColor = blackColor;
        intro.style.color = whiteColor;
        h1.style.color = whiteColor;
        currentColor = 'black';
    }
});













document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('task-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('task-input').value;
      const favoriteColor = document.getElementById('description-field').value;
      const currentMood = document.getElementById('priority').value;
  
      const submissionInfo = `Name: ${nameInput}\nFavorite Color: ${favoriteColor}\nCurrent Mood: ${currentMood}`;
      alert(submissionInfo);
      
      alert("Thank you for your submission! Have a great day!");
    });
});
















