// function setupSignature(){
//     signatureGraphics = createGraphics(width, height);
// }

// function mousePressed() {
//   drawing = true;
//   prevX = mouseX;
//   prevY = mouseY;
// }

// function mouseReleased() {
//   drawing = false;
// }

// function mouseDragged() {
//   if (drawing) {
//     drawLine(prevX, prevY, mouseX, mouseY);

//     prevX = mouseX;
//     prevY = mouseY;
//   }
// }

// function touchStarted() {
//   if (touches.length > 0) {
//     drawing = true;
//     prevX = touches[0].x;
//     prevY = touches[0].y;
//   }
// }

// function touchEnded() {
//   drawing = false;
// }

// function touchMoved() {
//   if (drawing && touches.length > 0) {
//     drawLine(prevX, prevY, touches[0].x, touches[0].y);
//     prevX = touches[0].x;
//     prevY = touches[0].y;
//   }
//   // return false; // Prevent default touch behavior
// }

// function drawLine(x1, y1, x2, y2) {
//   signatureGraphics.strokeWeight(5);
//   signatureGraphics.stroke(colorList[8]); // Set the stroke color to black
//   signatureGraphics.line(x1, y1, x2, y2);
// }