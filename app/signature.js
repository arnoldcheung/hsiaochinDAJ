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
    signatureGraphics.elt.addEventListener('touchstart', (e) => {
      e.preventDefault();
      drawing = true;
      signatureContext.beginPath();
      signatureContext.moveTo(e.touches[0].clientX, e.touches[0].clientY);
    });
  
    signatureGraphics.elt.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (drawing) {
        signatureContext.lineTo(e.touches[0].clientX, e.touches[0].clientY);
        signatureContext.stroke();
      }
    });
  
    signatureGraphics.elt.addEventListener('touchend', (e) => {
      e.preventDefault();
      drawing = false;
    });
  
    // Mouse event listeners
    signatureGraphics.elt.addEventListener('mousedown', (e) => {
      e.preventDefault();
      drawing = true;
      signatureContext.beginPath();
      signatureContext.moveTo(e.clientX, e.clientY);
    });
  
    signatureGraphics.elt.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if (drawing) {
        signatureContext.lineTo(e.clientX, e.clientY);
        signatureContext.stroke();
      }
    });
  
    signatureGraphics.elt.addEventListener('mouseup', (e) => {
      e.preventDefault();
      drawing = false;
    });
}