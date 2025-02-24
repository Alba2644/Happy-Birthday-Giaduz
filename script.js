// To get the correct Positions --> into the console digit "getCorrectPositions()" and they will show up.


// Define the target date (March 6, 2025)
const targetDate = new Date('2025-03-06');

// Get the current date
const currentDate = new Date();

// Check if the current date is before the target date
if (currentDate < targetDate) {
  // Redirect to the "before-date.html" page
  window.location.href = 'before-date.html';
} else {
  // Display the puzzle page
  const currentDateElement = document.getElementById('current-date');
  currentDateElement.textContent = `Today's Date: ${currentDate.toLocaleDateString()}`;

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

  // Create an array of numbers from 1 to 225
  const numbers = Array.from({ length: 225 }, (_, i) => i + 1);

  // Shuffle the array using the Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  }

  const shuffledNumbers = shuffleArray(numbers);

  // Create the randomized correctPositions object
  const correctPositions = {};
  for (let i = 1; i <= 225; i++) {
    correctPositions[i] = shuffledNumbers[i - 1];
  }

  // Function to get and log the correct positions
  function getCorrectPositions() {
    console.log("Correct Positions:", correctPositions);
  }

  // Expose getCorrectPositions to the global scope
  window.getCorrectPositions = getCorrectPositions;

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
    const currentPositions = {};

    pieces.forEach(piece => {
      const pieceId = piece.dataset.piece;
      const cellId = piece.parentElement.dataset.cellId;
      currentPositions[pieceId] = cellId; // Store current position

      if (cellId != correctPositions[pieceId]) {
        correct = false;
      }
    });

    // Log current positions
    console.log("Current Positions:", currentPositions);

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
}
