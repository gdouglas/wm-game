// Purpose: This file contains the javascript for the map. It initializes the map, opens and closes the tile modal, applies attributes to the tiles, and updates the tile state.
//state object to hold the state of each of the 25 tiles
const tileState = {
  currentTile: null,
  tile0: {
    name: "Tile 1",
    description: "This is tile 1",
    icon: "noun-river.png",
    riparian: true,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile1: {
    name: "Tile 2",
    description: "This is tile 2",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile2: {
    name: "Tile 3",
    description: "This is tile 3",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile3: {
    name: "Tile 4",
    description: "This is tile 4",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile4: {
    name: "Tile 5",
    description: "This is tile 5",
    icon: "noun-lake-trees.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile5: {
    name: "Tile 6",
    description: "This is tile 6",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile6: {
    name: "Tile 7",
    description: "This is tile 7",
    icon: "noun-river.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile7: {
    name: "Tile 8",
    description: "This is tile 8",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile8: {
    name: "Tile 9",
    description: "This is tile 9",
    icon: "noun-river.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile9: {
    name: "Tile 10",
    description: "This is tile 10",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile10: {
    name: "Tile 11",
    description: "This is tile 11",
    icon: "noun-mountain.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile11: {
    name: "Tile 12",
    description: "This is tile 12",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile12: {
    name: "Tile 13",
    description: "This is tile 13",
    icon: "noun-river.png",
    riparian: true,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile13: {
    name: "Tile 14",
    description: "This is tile 14",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile14: {
    name: "Tile 15",
    description: "This is tile 15",
    icon: "noun-deforestation-five.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile15: {
    name: "Tile 16",
    description: "This is tile 16",
    icon: "noun-farm.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile16: {
    name: "Tile 17",
    description: "This is tile 17",
    icon: "noun-road.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile17: {
    name: "Tile 18",
    description: "This is tile 18",
    icon: "noun-river.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile18: {
    name: "Tile 19",
    description: "This is tile 1",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile19: {
    name: "Tile 20",
    description: "This is tile 20",
    icon: "noun-pine-forest.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile20: {
    name: "Tile 21",
    description: "This is tile 21",
    icon: "noun-city.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile21: {
    name: "Tile 22",
    description: "This is tile 22",
    icon: "noun-city.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile22: {
    name: "Tile 23",
    description: "This is tile 23",
    icon: "noun-lake-lines.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile23: {
    name: "Tile 24",
    description: "This is tile 24",
    icon: "noun-lake-lines.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  },
  tile24: {
    name: "Tile 25",
    description: "This is tile 25",
    icon: "noun-deforestation-logger.png",
    riparian: false,
    impassable: false,
    culturallySignificant: false,
    logable: true
  }
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
  console.log(state);
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