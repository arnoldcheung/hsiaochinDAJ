// function that toggles on and off the control panel ----------------------------------------------------------------------------------------

function togglePanel() {
  panelVisible = !panelVisible;
  controlPanel.style('display', panelVisible ? 'block' : 'none');
  hideShowButton.html(panelVisible ? getTranslation('hideControlInstruction') : getTranslation('showControlInstruction'));
}

// function that toggles the color selection cycle ----------------------------------------------------------------------------------------

function toggleColorSelection() {
	currentColorSelectionIndex = (currentColorSelectionIndex + 1) % numSelectableColors;
	elementName.html(getTranslation('colorNameList')[currentColorSelectionIndex]);
	elementName.style('color', colorList[currentColorSelectionIndex]);


	resetCurrentSelected()

	if(currentColorSelectionIndex == 0){
		backgroundSlider.addClass('current-selected');
	} else if(currentColorSelectionIndex == 1){
		chiSlider.addClass('current-selected');
	} else if(currentColorSelectionIndex == 2){
		size_slider.addClass('current-selected');
	} else if(currentColorSelectionIndex == 3){
		energyHeightSlider.addClass('current-selected');
		energySizeSlider.addClass('current-selected');
	} else if (currentColorSelectionIndex == 4){
		orbit_speed_slider.addClass('current-selected');
	} else if (currentColorSelectionIndex == 5){
		radiationSizeSlider.addClass('current-selected');
	}

}

// function that toggles the font selection cycle ----------------------------------------------------------------------------------------

function toggleFontSelection() {
  	currentFontIndex = (currentFontIndex + 1) % numSelectableFonts;
	// elementName.html(colorNameList[currentColorSelectionIndex]);
	currentFont = fonts[currentFontIndex];

	// console.log(currentFontIndex);
}


// Event for when a new color is selected ----------------------------------------------------------------------------------------

function setColor(){
	colorList[currentColorSelectionIndex] = iroP.color.hexString;
	elementName.style('color', colorList[currentColorSelectionIndex]);
	// punto_r = 10;
	backgroundSlider.value(255); // reset background screen color alpha to 0
	
	// not set generated flag to false if it is for signature
	if(currentColorSelectionIndex != 7) { 
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
	let sanitizedName = currentNameInput
		.replace(/</g, '')
		.replace(/>/g, '')
		.replace(/&/g, '');

	sanitizedName = filterSensitiveWords(sanitizedName);
	nameInput.value(sanitizedName);
	mySignature = nameInput.value();
	
	if(nameInput.value() == ''){
		signature = false;
	}
}

// Event function for message input, sanitises input ----------------------------------------------------------------------------------------

function sanitizeMessageInput(inputText) {
	// signature = true;
	const currentMessageInput = messageInput.value();
	let sanitizedMessage = currentMessageInput
		.replace(/</g, '')
		.replace(/>/g, '')
		.replace(/&/g, '');
	sanitizedMessage = filterSensitiveWords(sanitizedMessage);
	messageInput.value(sanitizedMessage);
	myMessage = messageInput.value();
}

// function displayMessageWithLineBreaks(myMessage){

// 	mainCanvas.push();
// 	mainCanvas.fill(colorList[8]);
// 	mainCanvas.textFont(currentFont);
// 	mainCanvas.textAlign(LEFT, TOP);
// 	mainCanvas.textSize(30);

// 	// Display the message with line breaks

// 	let lineHeight = 35;
// 	let maxWidth = mainCanvas.width * 0.25;  // Set the maximum width for the text block
// 	let x = 15;
// 	let y = 10;
	
// 	let words = myMessage.split(' ');
// 	let currentLine = '';
	
// 	for (let i = 0; i < words.length; i++) {
// 		let prospectiveLine = currentLine + words[i] + ' ';
// 		let prospectiveLineWidth = textWidth(prospectiveLine);
	
// 		if (prospectiveLineWidth > maxWidth) {
// 		// Draw the current line and move to the next line
// 		mainCanvas.text(currentLine, x, y);
// 		y += lineHeight;
// 		currentLine = '';
// 		}
	
// 		currentLine += words[i] + ' ';
// 	}
	
// 	// Draw the remaining text
// 	mainCanvas.text(currentLine, x, y);
// 	mainCanvas.pop();
// }



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
	downloadCanvas.clear();
	downloadCanvas.image(mainCanvas, 0, 0);
	downloadCanvas.image(bottomBannerGraphics, 0, mainCanvas.height);

	// mainCanvas.image(bottomBannerGraphics, 0, height - buttonMenuHeight);

	// Initialize Cloudinary
	const cloudName = 'dfipkxvuc';
	const unsignedUploadPreset = 'olv6o5vs';

	// get elements
	const modal = document.getElementById('modal');
	const modalLoadingDiv = document.getElementById('modal-loading');
	const qrcodeDiv = document.getElementById('modal-qrcode');
	const modalTitle = document.getElementById("modal-title");
	const modalSubtitle = document.getElementById("modal-subtitle");
	const modalResetButton = document.getElementById("modal-reset");

	// set modal text
	if(mySignature){
		modalTitle.innerText = getTranslation("retrieveSketchTitle", { name: mySignature });
	} else {
		modalTitle.innerText = getTranslation("retrieveSketchTitleNoName");
	}
	modalSubtitle.innerText = getTranslation("retrieveSketchSubTitle");
	modalResetButton.innerText = getTranslation("resetInstruction");

	// open modal
	modal.classList.add('open');
	modalLoadingDiv.style.display = "block";
	qrcodeDiv.style.display = "none";
	
	// Get image data from canvas
 	const imageData = downloadCanvas.canvas.toDataURL('image/png');

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
		qrcodeDiv.style.display = "flex";
		qrcodeDiv.style.justifyContent = "center";
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

	// colorList = [
	// 	'#021E3A', // bg
	// 	'#FFFFFF', // stars
	// 	'#FF6400', // Punto
	// 	'#DBFF26', // energy 1
	// 	'#3DE049', // energy 2
	// 	'#FFFFFF', // orbit
	// 	'#AEF064', // radiation
	// 	'#FFFFFF'] // signature

	colorList = [
		'#021E3A', // bg
		'#FFFFFF', // stars
		'#FF6400', // Punto
		'#DBFF26', // energy 1
		// '#3DE049', // energy 2
		'#FFFFFF', // orbit
		'#AEF064', // radiation
		// '#FF8AFF', // wave
		'#FFFFFF'] // signature

	currentColorSelectionIndex = 0;

	energyColor2 = '#3DE049';

	// resets flags
	generated = false;
	signature = false;
	mySignature = '';
	myMessage = '';

	// clears all the canvas and graphics
	clear();
	mainCanvas.background(colorList[0]);
	downloadCanvas.clear();
	starsGraphics.clear();
	puntoGraphics.clear();
	orbitGraphics.clear();
	energyGraphics.clear();
	radiationGraphics.clear();
	// waveGraphics.clear();
	// bottomBannerGraphics.clear();

	punto_r = initial_punto_r;


	
	controlPanel.removeClass('en-font');
	controlPanel.removeClass('zh-font');
  
	if(currentLanguage == 'en'){
		controlPanel.addClass('en-font');
		// console.log('add en font')
	} else if (currentLanguage == 'zh'){
		controlPanel.addClass('zh-font');
		// console.log('add zh font')
	}
  


	// resize the canvas, incase of device rotation / screensize change
	resizeCanvas(windowWidth, windowHeight);
	mainCanvas.resizeCanvas(width, height);
	starsGraphics.resizeCanvas(width, height);
	puntoGraphics.resizeCanvas(width, height);
	orbitGraphics.resizeCanvas(width, height);
	energyGraphics.resizeCanvas(min(width, height), min(width, height));
	radiationGraphics.resizeCanvas(max(width, height), max(width, height));
	// waveGraphics.resizeCanvas(width, height);
	bottomBannerGraphics.resizeCanvas(width, buttonMenuHeight)

	// re-setup the star graphics
	drawStars(3000, {minSize: 1, maxSize: 5, canvas: starsGraphics});
	resetBottomBanner();

	// reset the control panels and their buttons / sliders
	resetControlPanel();
	resetNumberInput();

	resetNameInput();
	resetMessageInput();
	resetColorPicker();
	resetCheckboxes();
	resetSliders();
	resetButtonMenu();
	


	resetCurrentSelected()

	backgroundSlider.addClass('current-selected');


	// change element name back to space (colorList[0])
	// elementName.html(colorNameList[currentColorSelectionIndex]);
}

function resetCurrentSelected(){
	backgroundSlider.removeClass('current-selected');
	chiSlider.removeClass('current-selected');
	size_slider.removeClass('current-selected');
	energySizeSlider.removeClass('current-selected');
	energyHeightSlider.removeClass('current-selected');
	orbit_speed_slider.removeClass('current-selected');
	radiationSizeSlider.removeClass('current-selected')
}