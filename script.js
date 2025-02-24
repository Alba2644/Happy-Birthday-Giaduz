// Define the target date (March 8, 2025)
const targetDate = new Date('2025-03-08');

// Get the current date
const currentDate = new Date();

// Check if the current date is before the target date
if (currentDate < targetDate) {
  // Redirect to the "before-date.html" page
  window.location.href = 'before-date.html';
} else {
  // Display the puzzle page
  const currentDateElement = document.getElementById('current-date');
  currentDateElement.textContent = `Today's Date: ${currentDate.toLocaleDateString()}`};

// Display the current date
//const currentDateElement = document.getElementById('current-date');
//const currentDate = new Date().toLocaleDateString();
currentDateElement.textContent = `Today's Date: ${currentDate}`;

// Create the 15x15 grid (225 cells total)
const grid = document.getElementById('puzzle-grid');

for (let i = 0; i < 15 * 15; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  cell.dataset.cellId = i + 1; // Unique ID for each cell
  cell.textContent = i + 1; // Display cell number
  grid.appendChild(cell);
}

// Add drag-and-drop functionality
const pieces = document.querySelectorAll('.piece');

// Add drag event listeners to pieces
pieces.forEach(piece => {
  piece.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.dataset.piece);
  });
});

// Add drop event listeners to grid cells
const gridCells = document.querySelectorAll('.grid-cell');
gridCells.forEach(cell => {
  cell.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow dropping
  });

  cell.addEventListener('drop', (e) => {
    e.preventDefault();
    const pieceId = e.dataTransfer.getData('text/plain');
    const piece = document.querySelector(`[data-piece="${pieceId}"]`);

    // Remove the piece from its current position
    piece.remove();

    // Append the piece to the cell and align it to the top-left corner
    cell.appendChild(piece);
    piece.style.position = 'absolute';
    piece.style.top = '0';
    piece.style.left = '0';
  });
});

// Define correct positions for the pieces
const correctPositions = {
    1: 1,
    2: 2,
    3: 3,
    /*4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    20: 20,
    21: 21,
    22: 22,
    23: 23,
    24: 24,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    29: 29,
    30: 30,
    31: 31,
    32: 32,
    33: 33,
    34: 34,
    35: 35,
    36: 36,
    37: 37,
    38: 38,
    39: 39,
    40: 40,
    41: 41,
    42: 42,
    43: 43,
    44: 44,
    45: 45,
    46: 46,
    47: 47,
    48: 48,
    49: 49,
    50: 50,
    51: 51,
    52: 52,
    53: 53,
    54: 54,
    55: 55,
    56: 56,
    57: 57,
    58: 58,
    59: 59,
    60: 60,
    61: 61,
    62: 62,
    63: 63,
    64: 64,
    65: 65,
    66: 66,
    67: 67,
    68: 68,
    69: 69,
    70: 70,
    71: 71,
    72: 72,
    73: 73,
    74: 74,
    75: 75,
    76: 76,
    77: 77,
    78: 78,
    79: 79,
    80: 80,
    81: 81,
    82: 82,
    83: 83,
    84: 84,
    85: 85,
    86: 86,
    87: 87,
    88: 88,
    89: 89,
    90: 90,
    91: 91,
    92: 92,
    93: 93,
    94: 94,
    95: 95,
    96: 96,
    97: 97,
    98: 98,
    99: 99,
    100: 100,
    101: 101,
    102: 102,
    103: 103,
    104: 104,
    105: 105,
    106: 106,
    107: 107,
    108: 108,
    109: 109,
    110: 110,
    111: 111,
    112: 112,
    113: 113,
    114: 114,
    115: 115,
    116: 116,
    117: 117,
    118: 118,
    119: 119,
    120: 120,
    121: 121,
    122: 122,
    123: 123,
    124: 124,
    125: 125,
    126: 126,
    127: 127,
    128: 128,
    129: 129,
    130: 130,
    131: 131,
    132: 132,
    133: 133,
    134: 134,
    135: 135,
    136: 136,
    137: 137,
    138: 138,
    139: 139,
    140: 140,
    141: 141,
    142: 142,
    143: 143,
    144: 144,
    145: 145,
    146: 146,
    147: 147,
    148: 148,
    149: 149,
    150: 150,
    151: 151,
    152: 152,
    153: 153,
    154: 154,
    155: 155,
    156: 156,
    157: 157,
    158: 158,
    159: 159,
    160: 160,
    161: 161,
    162: 162,
    163: 163,
    164: 164,
    165: 165,
    166: 166,
    167: 167,
    168: 168,
    169: 169,
    170: 170,
    171: 171,
    172: 172,
    173: 173,
    174: 174,
    175: 175,
    176: 176,
    177: 177,
    178: 178,
    179: 179,
    180: 180,
    181: 181,
    182: 182,
    183: 183,
    184: 184,
    185: 185,
    186: 186,
    187: 187,
    188: 188,
    189: 189,
    190: 190,
    191: 191,
    192: 192,
    193: 193,
    194: 194,
    195: 195,
    196: 196,
    197: 197,
    198: 198,
    199: 199,
    200: 200,
    201: 201,
    202: 202,
    203: 203,
    204: 204,
    205: 205,
    206: 206,
    207: 207,
    208: 208,
    209: 209,
    210: 210,
    211: 211,
    212: 212,
    213: 213,
    214: 214,
    215: 215,
    216: 216,
    217: 217,
    218: 218,
    219: 219,
    220: 220,
    221: 221,
    222: 222,
    223: 223,
    224: 224,
    225: 225*/
};

// Get the modal and close button
const modal = document.getElementById('solved-modal');
const closeButton = document.querySelector('.close');

// Function to show the modal
function showModal() {
  modal.style.display = 'block';
}

// Function to hide the modal
function hideModal() {
  modal.style.display = 'none';
}

// Close the modal when the close button is clicked
closeButton.addEventListener('click', hideModal);

// Close the modal when clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

// Function to check if the puzzle is solved
function checkPuzzle() {
  let correct = true;
  pieces.forEach(piece => {
    const pieceId = piece.dataset.piece;
    const cellId = piece.parentElement.dataset.cellId;
    if (cellId != correctPositions[pieceId]) {
      correct = false;
    }
  });
  if (correct) {
    showModal(); // Show the custom modal with the image
  } else {
    alert("Keep trying! 🧩");
  }
}

// Add a button to check the puzzle
const checkButton = document.createElement('button');
checkButton.textContent = 'Check Puzzle';
checkButton.addEventListener('click', checkPuzzle);
document.body.appendChild(checkButton);

// Function to reset the puzzle
function resetPuzzle() {
  pieces.forEach(piece => {
    // Move the piece back to the puzzle pieces container
    document.getElementById('puzzle-pieces').appendChild(piece);
    // Reset the piece's position
    piece.style.position = 'static';
  });
}

// Add a button to reset the puzzle
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Puzzle';
resetButton.addEventListener('click', resetPuzzle);
document.body.appendChild(resetButton);