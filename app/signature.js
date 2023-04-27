function setupSignature(){
    signatureGraphics = createGraphics(width, height);
    // signatureContext = signatureGraphics.drawingContext;

    // // Customize the appearance of the drawn lines
    // signatureContext.strokeStyle = 'black';
    // signatureContext.lineWidth = 5;
    // signatureContext.lineJoin = 'round';
    // signatureContext.lineCap = 'round';

    // // Set up touch and mouse event listeners
    // setupEventListeners();
}

// function drawSignature(){


// }






function mousePressed() {
  drawing = true;
  prevX = mouseX;
  prevY = mouseY;
}

function mouseReleased() {
  drawing = false;
}

function mouseDragged() {
  if (drawing) {
    signatureGraphics.strokeWeight(5);
    signatureGraphics.stroke(0); // Set the stroke color to black
    signatureGraphics.line(prevX, prevY, mouseX, mouseY);

    prevX = mouseX;
    prevY = mouseY;
  }
}

function touchStarted() {
  drawing = true;
  prevX = mouseX;
  prevY = mouseY;
}

function touchEnded() {
  drawing = false;
}

function touchMoved() {
  if (drawing) {
    signatureGraphics.strokeWeight(5);
    signatureGraphics.stroke(0); // Set the stroke color to black
    signatureGraphics.line(prevX, prevY, mouseX, mouseY);

    prevX = mouseX;
    prevY = mouseY;
  }
  // return false; // Prevent default touch behavior
}