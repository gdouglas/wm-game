// Purpose: This file contains the javascript for the map. It initializes the map, opens and closes the tile modal, applies attributes to the tiles, and updates the tile state.
//state object to hold the state of each of the 25 tiles
const tileState = {
  currentTile: null,
  tile0: {
    name: "Tile 1",
    description: "This is tile 1",
    icon: "noun-pine-forest.png",
    riparian: true,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile1: {
    name: "Tile 2",
    description: "This is tile 2",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile2: {
    name: "Tile 3",
    description: "This is tile 3",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile3: {
    name: "Tile 4",
    description: "This is tile 4",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile4: {
    name: "Tile 5",
    description: "This is tile 5",
    icon: "noun-lake-trees.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile5: {
    name: "Tile 6",
    description: "This is tile 6",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile6: {
    name: "Tile 7",
    description: "This is tile 7",
    icon: "noun-river.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile7: {
    name: "Tile 8",
    description: "This is tile 8",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile8: {
    name: "Tile 9",
    description: "This is tile 9",
    icon: "noun-river.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile9: {
    name: "Tile 10",
    description: "This is tile 10",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile10: {
    name: "Tile 11",
    description: "This is tile 11",
    icon: "noun-mountain.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile11: {
    name: "Tile 12",
    description: "This is tile 12",
    icon: "noun-road.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile12: {
    name: "Tile 13",
    description: "This is tile 13",
    icon: "noun-river.png",
    riparian: true,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile13: {
    name: "Tile 14",
    description: "This is tile 14",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile14: {
    name: "Tile 15",
    description: "This is tile 15",
    icon: "noun-deforestation-five.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile15: {
    name: "Tile 16",
    description: "This is tile 16",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile16: {
    name: "Tile 17",
    description: "This is tile 17",
    icon: "noun-farm.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile17: {
    name: "Tile 18",
    description: "This is tile 18",
    icon: "noun-river.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile18: {
    name: "Tile 19",
    description: "This is tile 1",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile19: {
    name: "Tile 20",
    description: "This is tile 20",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile20: {
    name: "Tile 21",
    description: "This is tile 21",
    icon: "noun-city.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile21: {
    name: "Tile 22",
    description: "This is tile 22",
    icon: "noun-city.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile22: {
    name: "Tile 23",
    description: "This is tile 23",
    icon: "noun-lake-lines.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile23: {
    name: "Tile 24",
    description: "This is tile 24",
    icon: "noun-lake-lines.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  },
  tile24: {
    name: "Tile 25",
    description: "This is tile 25",
    icon: "noun-deforestation-logger.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: false
  }
};

//create a state object to hold the score for each stakeholder
const stakeholderState = {
  stakeholder1: {
    logging: 1,
    riparian: 0,
    culturallySignificant: 0,
    score: 0
  },
  stakeholder2: {
    logging: 0,
    riparian: 1,
    culturallySignificant: 1,
    score: 0
  },
  stakeholder3: {
    logging: -1,
    riparian: 1,
    culturallySignificant: 2,
    score: 0
  },
  stakeholder4: {
    logging: 1,
    riparian: 1,
    culturallySignificant: 1,
    score: 0
  },
  stakeholder5: {
    logging: -1,
    riparian: 1,
    culturallySignificant: 0,
    score: 0
  },


};
  

// Add to script.js
document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.getElementById('grid-container');
  initOverlayControls();
  initializeMap();
  initializeModal();
});

function initializeMap() {
  const gridContainer = document.getElementById('grid-container');
  for (let i = 0; i < 25; i++) {
    const tile = document.createElement('div');
    tile.id = `tile${i}`;
    tile.className = 'grid-item';
    tile.addEventListener('click', function() {
      openTileModal(this);
    });
    // add a background image to the tile based on its icon in the state object
    tile.style.backgroundImage = `url('game-icons/${tileState[tile.id].icon}')`;
    gridContainer.appendChild(tile);
  }
  applyTileState();
}

function initializeModal() {
  const modal = document.getElementById('tile-modal');
  // Close button in the modal
  document.querySelector('.tile-modal-close-button').addEventListener('click', function() {
    closeTileModal();
  });
  window.onclick = function(event) {
    if (event.target == modal) {
      closeTileModal();
    }
  };
  //when the modal is open escape key will close the modal
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeTileModal();
    }
  });
}


function openTileModal(currentTile) {
  tileState.currentTile = currentTile;
  //get the state of the current tile
  const state = getTileState(currentTile);
  //set the title, description and image of the modal to match the state of the current tile
  // #tileTitle
  // #tileDescription
  // #tileImage
  document.getElementById('tileTitle').textContent = state.name;
  document.getElementById('tileDescription').textContent = state.description;
  document.getElementById('tileImage').src = `game-icons/${state.icon}`;
  //set the value of the input fields in the modal to match the state of the current tile
  setModalFormValues(state);
  document.getElementById('tile-modal').style.display = 'block';
}

function setModalFormValues(state) {
    // set the checkbox values based on the state of the current tile
    const form = document.getElementById('attributeForm');
    form.riparian.checked = state.riparian;
    form.impassable.checked = state.impassable;
    form.culturallySignificant.checked = state.culturallySignificant;
    form.logable.checked = state.logable;
}

//return the state of a tile
function getTileState(tile) {
  return tileState[tile.id];
}

function closeTileModal() {
  document.getElementById('tile-modal').style.display = 'none';
}

// apply the values of the checkbox to the current tile. add classes to update the look of the tile
function applyAttributes() {
  tile = tileState.currentTile;
  const form = document.getElementById('attributeForm');
  const attributes = ['riparian', 'impassable', 'culturallySignificant', 'logable'];
  tile.className = 'grid-item'; // Reset class
  updateTileState(tile, form);
  attributes.forEach(attr => {
    if (form[attr].checked) {
      tile.classList.add(attr);
    }
  });
  calculateStakeholderScores();
  closeTileModal(); // Close the modal after applying attributes
}

// update all tiles in the grid container to have classes that match the state of the tile
function applyTileState() {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.childNodes.forEach(tile => {
    const state = getTileState(tile);
    const attributes = ['riparian', 'impassable', 'culturallySignificant', 'logable'];
    tile.className = 'grid-item'; // Reset class
    attributes.forEach(attr => {
      if (state[attr]) {
        tile.classList.add(attr);
      }
    });
  });
  calculateStakeholderScores();
}

function updateTileState(tile, form) {
  tileState[tile.id].riparian = form.riparian.checked;
  tileState[tile.id].impassable = form.impassable.checked;
  tileState[tile.id].culturallySignificant = form.culturallySignificant.checked;
  tileState[tile.id].logable = form.logable.checked;
}

//when the toggle overlay button is clicked add a class to the grid container, show only the base map
function toggleOverlay() {
  let gridContainer = document.getElementById('grid-container');
  const overlayToggle = document.getElementById('overlay-toggle');
  gridContainer.classList.toggle('no-overlay');
  // change the text of overlay-toggle to match if the overlay is on or off
  overlayToggle.textContent = gridContainer.classList.contains('no-overlay') ? 'Show Overlays' : 'Hide All Overlays';
};


function initOverlayControls() {
  // add a listener for when the checkboxes in overlay-options are toggled to add a class to the grid container with the value of each checkbox
  document.querySelectorAll('#overlay-options input').forEach(item => {
    item.addEventListener('change', function() {
      document.getElementById('grid-container').classList.toggle(this.name);
    });
  });
}

// get a count of all the states in each tile 
function getTileCounts() {
  const gridContainer = document.getElementById('grid-container');
  const tileCounts = {
    riparian: 0,
    impassable: 0,
    culturallySignificant: 0,
    logable: 0
  };
  gridContainer.childNodes.forEach(tile => {
    const state = getTileState(tile);
    for (let attr in tileCounts) {
      if (state[attr]) {
        tileCounts[attr]++;
      }
    }
  });
  return tileCounts;
}

//recursively go through all the stakeholders and create a score for each one
function calculateStakeholderScores() {
  const tileCounts = getTileCounts();
  const stakeholders = Object.keys(stakeholderState);
  stakeholders.forEach(stakeholder => {
    //multiple the values in the map against the values in the state object then sum them up
    stakeholderState[stakeholder].score = stakeholderState[stakeholder].logging * tileCounts.logable + stakeholderState[stakeholder].riparian * tileCounts.riparian + stakeholderState[stakeholder].culturallySignificant * tileCounts.culturallySignificant;
  });
  // console.log(score);
  
  renderScores();
}


// for each #score-stakeholder-n p element set the value of the contained span.approval to the score of the stakeholder from the stakeholederState object
function renderScores() {
  console.log("render scores");
  const stakeholders = Object.keys(stakeholderState);
  stakeholders.forEach(stakeholder => {
    console.log(stakeholder);
    const score = stakeholderState[stakeholder].score;
    document.querySelector(`#score-${stakeholder} .approval`).textContent = score;
  });
}