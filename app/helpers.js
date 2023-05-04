// function that toggles on and off the control panel ----------------------------------------------------------------------------------------

function togglePanel() {
  panelVisible = !panelVisible;
  controlPanel.style('display', panelVisible ? 'block' : 'none');
  hideShowButton.html(panelVisible ? 'Hide Control' : 'Show Control');
}

// function that toggles the color selection cycle ----------------------------------------------------------------------------------------

function toggleColorSelection() {
  currentColorSelectionIndex = (currentColorSelectionIndex + 1) % numSelectableColors;
	elementName.html(colorNameList[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);
	
	if(currentColorSelectionIndex == 2){
		puntoCheckbox.checked(true);
  } else if(currentColorSelectionIndex == 3){
		energyCheckbox.checked(true);
	} else if (currentColorSelectionIndex == 5){
		orbitCheckbox.checked(true); 
	} else if (currentColorSelectionIndex == 6){
		radiationCheckbox.checked(true); 
	} else if (currentColorSelectionIndex == 7){
		waveCheckbox.checked(true);
	} else if (currentColorSelectionIndex == 8){
		signatureCheckbox.checked(true);
	}
}

// function that toggles the font selection cycle ----------------------------------------------------------------------------------------

function toggleFontSelection() {
  currentFontIndex = (currentFontIndex + 1) % numSelectableFonts;
	// elementName.html(colorNameList[currentColorSelectionIndex]);
	currentFont = fonts[currentFontIndex];
}


// Event for when a new color is selected ----------------------------------------------------------------------------------------

function setColor(){
	colorList[currentColorSelectionIndex] = iroP.color.hexString;
	elementName.style('color', colorList[currentColorSelectionIndex]);
	punto_r = 10;
	
	// not set generated flag to false if it is for signature
	if(currentColorSelectionIndex != 8) { 
		generated = false;
	}
}

// function that resets the sketch when screen is resized ----------------------------------------------------------------------------------------

function windowResized() {
  resetUniverse();
}

// Event function for number input, allow only numbers ----------------------------------------------------------------------------------------

function validateNumberInput() {
  let currentValue = numberInput.value();
  let sanitizedValue = currentValue.replace(/[^0-9]/g, '');
	
  numberInput.value(sanitizedValue);
}

// Event function for name input, sanitises input ----------------------------------------------------------------------------------------

function sanitizeNameInput(inputText) {
	signature = true;
	const currentNameInput = nameInput.value();
	const sanitizedName = currentNameInput
	.replace(/</g, '')
    .replace(/>/g, '')
    .replace(/&/g, '');
	nameInput.value(sanitizedName);
}

// Event function for message input, sanitises input ----------------------------------------------------------------------------------------

function sanitizeMessageInput(inputText) {
	// signature = true;
	const currentMessageInput = messageInput.value();
	const sanitizedMessage = currentmessageInput
	.replace(/</g, '')
    .replace(/>/g, '')
    .replace(/&/g, '');
	messageInput.value(sanitizedMessage);
	myMessage = messageInput.value();
}



// function that adds metatag ----------------------------------------------------------------------------------------

function createMetaTag() {
	let meta = createElement('meta');
	meta.attribute('name', 'viewport');
	meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');

	let head = select('head');
	meta.parent(head);
}

// Event function for capturing the canvas, to be added with qr code function ----------------------------------------------------------------------------------------
async function captureCanvas(){
	// mainCanvas.save('universe.png');

	// Initialize Cloudinary
	const cloudName = 'dbvqnmaio';
	const unsignedUploadPreset = 'nomzit8e';

	// get elements
	const modal = document.getElementById('modal');
	const modalLoadingDiv = document.getElementById('modal-loading');
	const qrcodeDiv = document.getElementById('modal-qrcode');
	
	// open modal
	modal.classList.add('open');
	modalLoadingDiv.style.display = "block";
	qrcodeDiv.style.display = "none";
	
	// Get image data from canvas
  const imageData = mainCanvas.canvas.toDataURL('image/png');

  // Upload image to Cloudinary
	const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			upload_preset: unsignedUploadPreset,
			file: imageData
		})
	});

	if (response.ok) {
		const data = await response.json();
		const imageUrl = data.secure_url;
		
		qrcodeDiv.replaceChildren();
		const qrCode = new QRCode(qrcodeDiv);

		// generate the qrcode from the imageUrl
		qrCode.makeCode(imageUrl);
		
		// show the qrcode
		modalLoadingDiv.style.display = "none";
		qrcodeDiv.style.display = "block";
	} else {
		console.log(await response.json());
		throw new Error('Failed to upload image to Cloudinary');
	}
}

// resets punto, (can remove) ----------------------------------------------------------------------------------------

function resetPunto(){
	puntoGraphics.clear();
	punto_r = initial_punto_r;
}

// resets the entire sketch ----------------------------------------------------------------------------------------

function resetUniverse() {

	// reset colors

	colorList = [
		'#021E3A', // bg
		'#FFFFFF', // stars
		'#FF6400', // Punto
		'#DBFF26', // energy 1
		'#3DE049', // energy 2
		'#FFFFFF', // orbit
		'#AEF064', // radiation
		'#FF8AFF', // wave
		'#FFFFFF'] // signature

	currentColorSelectionIndex = 0;

	// resets flags
	generated = false;
	signature = false;

	// clears all the canvas and graphics
	clear();
	mainCanvas.background(colorList[0]);
	starsGraphics.clear();
	puntoGraphics.clear();
	orbitGraphics.clear();
	energyGraphics.clear();
	radiationGraphics.clear();
	// waveGraphics.clear();

	// resize the canvas, incase of device rotation / screensize change
	resizeCanvas(windowWidth, windowHeight);
	mainCanvas.resizeCanvas(width, height);
	starsGraphics.resizeCanvas(width, height);
	puntoGraphics.resizeCanvas(width, height);
	orbitGraphics.resizeCanvas(width, height);
	energyGraphics.resizeCanvas(min(width, height), min(width, height));
	radiationGraphics.resizeCanvas(max(width, height), max(width, height));
	// waveGraphics.resizeCanvas(width, height);

	// re-setup the star graphics
	drawStars(3000, {minSize: 1, maxSize: 5, canvas: starsGraphics});

	// reset the control panels and their buttons / sliders
	resetControlPanel();
	resetNameInput();
	resetMessageInput();
	resetNumberInput();
	resetColorPicker();
	resetCheckboxes();
	resetSliders();
	resetButtonMenu();

	// change element name back to space (colorList[0])
	elementName.html(colorNameList[currentColorSelectionIndex]);
}
