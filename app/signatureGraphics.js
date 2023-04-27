function setupSignature(){
    signatureGraphics = createGraphics(width, height);
    signatureContext = signatureGraphics.drawingContext;

    // Customize the appearance of the drawn lines
    signatureContext.strokeStyle = 'black';
    signatureContext.lineWidth = 5;
    signatureContext.lineJoin = 'round';
    signatureContext.lineCap = 'round';

    // Set up touch and mouse event listeners
    setupEventListeners();
}

// function drawSignature(){


// }

function setupEventListeners() {
    // Touch event listeners
    overlayCanvas.elt.addEventListener('touchstart', (e) => {
      e.preventDefault();
      drawing = true;
      overlayContext.beginPath();
      overlayContext.moveTo(e.touches[0].clientX, e.touches[0].clientY);
    });
  
    overlayCanvas.elt.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (drawing) {
        overlayContext.lineTo(e.touches[0].clientX, e.touches[0].clientY);
        overlayContext.stroke();
      }
    });
  
    overlayCanvas.elt.addEventListener('touchend', (e) => {
      e.preventDefault();
      drawing = false;
    });
  
    // Mouse event listeners
    overlayCanvas.elt.addEventListener('mousedown', (e) => {
      e.preventDefault();
      drawing = true;
      overlayContext.beginPath();
      overlayContext.moveTo(e.clientX, e.clientY);
    });
  
    overlayCanvas.elt.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (drawing) {
        overlayContext.lineTo(e.clientX, e.clientY);
        overlayContext.stroke();
      }
    });
  
    overlayCanvas.elt.addEventListener('mouseup', (e) => {
      e.preventDefault();
      drawing = false;
    });
}