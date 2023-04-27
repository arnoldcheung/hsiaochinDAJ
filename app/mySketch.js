
// Screen size definition
let deviceWidth = 2360 / 2;
let deviceHeight = 1640 / 2;

// let deviceWidth = 1290 / 2;
// let deviceHeight = 2796 / 2;

// let deviceWidth = 2796 / 2;
// let deviceHeight = 1290 / 2;

currentPixelDensity = 2;

// Control Panel Setup
let panelVisible = true; // boolean to check if controlPanel is currently visible
let controlPanel; // the Div that is the control panel

let hideShowButton; // the button toggle that turns the controlPanel on & off (will rename)

let iroPicker; // iro color picker
let iroPickerDiv;

let elementName; // element name Div element

let nextElementButton;

let captureButton;
let resetButton;
let generateButton;

let mainCanvas;
let puntoGraphics;
let starsGraphics;
let orbitGraphics;
let energyGraphics;
let radiationGraphics;
let waveGraphics;
let buttonMenuDiv;

// draw signature

let signatureGraphics;
let signatureContext;

let overlayCanvas;
let drawing = false;
let prevX, prevY;

var initial_punto_r;
var punto_r;

let generated = false;

let universeNumber;

// sliders ----------------------------------------------------------------------------------------

let sliderSpacing = 35;

let size_slider;

let energySizeSlider;

let waveFrequencySlider;
let energyHeightSlider;

let orbit_speed_slider;

let radiationSizeSlider

// Checkboxes ----------------------------------------------------------------------------------------

let energyCheckbox;
let radiationCheckbox
let orbitCheckbox;


let nameInput;
let numberInput;

let growSize;
let layerSize;

let font = 'Courier New';

// color selection toggle

let colorList = ['#021E3A', // bg
				'#FFFFFF', // stars
				'#FF6400', // Punto
				'#DBFF26', // energy 1
				'#3DE049', // energy 2
				'#FFFFFF', // orbit
				'#AEF064', // radiation
				'#FF8AFF', // wave
				'#FFFFFF'] // signature

let colorNameList = ['Space',
					'Stars',
					'Punto',
					'Energy One',
					'Energy Two',
					'Orbit',
					'Radiation', 
					'Wave',
					'Signature'];

let numSelectableColors = colorList.length;
let currentColorSelectionIndex = 0;


// orbit ----------------------------------------------------------------------------------------
const numCircles = 1200;
let circleData = [];

function setup() {
	createMetaTag();
	pixelDensity(currentPixelDensity);

  // createCanvas(400, 800);
	// createCanvas(deviceWidth * 2, deviceHeight * 2);
	// createCanvas(deviceWidth, deviceHeight);

	createCanvas(window.innerWidth, window.innerHeight);

	background(0);
	
	angleMode(DEGREES);
	
	// for pc testing
	// deviceWidth = width;
	// deviceHeight = height;
	
	//create main canvas ----------------------------------------------------------------------------------------
	mainCanvas = createGraphics(width, height);
	mainCanvas.angleMode(DEGREES);
	
	// create orbit cancvas ----------------------------------------------------------------------------------------
	setupOrbit();
	
	// Create punto grapghics ----------------------------------------------------------------------------------------
	setupPunto();
	
	// Create scatter grapghics ----------------------------------------------------------------------------------------
	setupStars();
	
	// Create energy grapghics ----------------------------------------------------------------------------------------
	setupEnergy();
	
	// Create wave grapghics ----------------------------------------------------------------------------------------
	setupWaves();	
	
	// Create radiation graphics ----------------------------------------------------------------------------------------
	setupRadiation();
	

	setupSignature();

  // Create control panel ----------------------------------------------------------------------------------------
	// controlPanel = createDiv();
	// controlPanel.position(0, 0);
	// controlPanel.style('width', width * 0.4 + 'px');
	// controlPanel.style('height', height + 'px');
	// controlPanel.style('background-color', 'rgba(255,255,255,0.75)');
	// controlPanel.style('display', 'block');
	setupControlPanel();
		
	// Create number input ----------------------------------------------------------------------------------------
	
	// numberInput = createInput('Create your universe with 8 Numbers ...');
	// numberInput.parent(controlPanel);
	
	// numberInput.elt.addEventListener('focus', function() {
   	// 	this.value = '';
  	// });

	// numberInput.style('width', controlPanel.width * 0.75 + 'px');
	// numberInput.style('height', '20px');
	
	// numberInput.attribute('type', 'tel');
	// numberInput.attribute('pattern', '\\d*');
	// numberInput.attribute('maxlength', '8');
	// numberInput.input(validateNumberInput);
	// numberInput.position(30, 20);
	
	// generateButton = createButton('Go');
	// generateButton.parent(controlPanel);
	// generateButton.position(numberInput.x + numberInput.width + 20, numberInput.y);
	// generateButton.mouseClicked(generateUniverse);
	// generateButton.touchEnded(generateUniverse);

	setupNumberInput();
		
	// or text section ----------------------------------------------------------------------------------------

	// orTxt = createDiv('or create your universe manually ...');
	// orTxt.parent(controlPanel);
	// orTxt.position(30, 50);

	
	// Create Element Name ----------------------------------------------------------------------------------------
	
	// elementName = createDiv(colorNameList[currentColorSelectionIndex]);
	// elementName.id("elementName")
	// elementName.style('color', colorList[currentColorSelectionIndex]);
	// elementName.position(30, 80);
	// elementName.parent(controlPanel);
	
	// // print(elementName.width + 10);
	
	// // Create a button to toggle color selection ----------------------------------------------------------------------------------------
  	// nextElementButton = createButton("Next Element");
	// // nextElementButton.class('button-74');
 	// nextElementButton.position(elementName.x, elementName.y + parseFloat(elementName.style('height')) + 10);
  	// nextElementButton.mouseClicked(toggleColorSelection);
	// nextElementButton.parent(controlPanel);
	
	// Create iro picker ----------------------------------------------------------------------------------------
	// iroPickerDiv = createDiv();
	// iroPickerDiv.parent(controlPanel);
	// iroPickerDiv.id("iroPickerDiv")

	// iroPickerDiv.position(30, nextElementButton.y + 30);
	
	// iroP = new iro.ColorPicker('#iroPickerDiv',  {width: controlPanel.height * 0.3});
	// iroP.on('color:change', setColor)#
	
	setupColorPicker();

	
	// Create Checkboxes ----------------------------------------------------------------------------------------
	checkboxSetup();
	
	// Create sliders ----------------------------------------------------------------------------------------
	sliderSetup();
	
//   // Create the name input field
//   nameInput = createInput('Your Name');
// 	nameInput.parent(controlPanel);
//   nameInput.attribute('type', 'text');
// 	nameInput.position(size_slider.x, signatureCheckbox.y + 3);
// 	nameInput.style('width', controlPanel.width * 0.9 - nameInput.x + 'px');
// 	nameInput.elt.addEventListener('focus', function() {
//     signatureCheckbox.checked(true);
// 		this.value = '';
//   });
// 	nameInput.input(sanitizeNameInput);
	
// 	nameInput.touchStarted(signatureEvent);
// 	nameInput.mouseClicked(signatureEvent);

	setupNameInput();

//   // Create a button to toggle the control panel ----------------------------------------------------------------------------------------
//   hideShowButton = createButton("Hide Control");
//   hideShowButton.position(10, height - 30);
//   hideShowButton.mouseClicked(togglePanel);
	
// 	// Create a button to capture the canvas ----------------------------------------------------------------------------------------
//   captureButton = createButton("Capture");
//   captureButton.position(hideShowButton.x + hideShowButton.width + 10, height - 30);
//   captureButton.mouseClicked(captureCanvas);
	
// 	// Create a button to reset ----------------------------------------------------------------------------------------
//   resetButton = createButton("Reset Universe");
//   resetButton.position(captureButton.x + captureButton.width + 10, height - 30);
//   resetButton.mouseClicked(resetUniverse);
	
	setupButtonMenu();

	// // Create a button to toggle font selection ----------------------------------------------------------------------------------------
	// fontToggle = createButton("Font Toggle");
	// fontToggle.position(nameInput.x + parseFloat(nameInput.style('width')) + 20, nameInput.y);
	// fontToggle.mouseClicked(toggleFontSelection);
	// fontToggle.parent(controlPanel);

	// close the control panel by default
	togglePanel();
}

function draw() {
 	clear(); // reset base canvas
	mainCanvas.background(colorList[0]); // reset background
	orbitGraphics.clear();  // reset orbit
	radiationGraphics.clear();  // reset radiation
	waveGraphics.clear();  // reset wave
	
	// get values from sliders ----------------------------------------------------------------------------------------
	layerSize = energySizeSlider.value();
	
	stroke_w = energySizeSlider.value();
	
	waveFrequency = waveFrequencySlider.value();
	energyHeight = energyHeightSlider.value();
		
	size_slider.input(() => {
    punto_r = size_slider.value();
  });
	
	radiationSize = radiationSizeSlider.value();
	
	orbit_speed = orbit_speed_slider.value();
	
	// Star grapghics ----------------------------------------------------------------------------------------

	mainCanvas.push();
	mainCanvas.tint(colorList[1] + '80');
	mainCanvas.image(starsGraphics, 0, 0);
	mainCanvas.pop();
	
	// wave grapghics ----------------------------------------------------------------------------------------
	if(waveCheckbox.checked()){
		drawWave();
		mainCanvas.image(waveGraphics, 0, 0);	
	}
	
	// radiation graphics ----------------------------------------------------------------------------------------
	if(radiationCheckbox.checked()){
		drawRadiation();
		mainCanvas.push();
		mainCanvas.imageMode(CENTER);
		mainCanvas.translate(width / 2, height / 2);
		mainCanvas.rotate(frameCount * 0.2);
		mainCanvas.image(radiationGraphics, 0, 0); // the triangles
		mainCanvas.pop();
	}
	
	// punto graphics ----------------------------------------------------------------------------------------
	if(puntoCheckbox.checked()){
		drawPunto();
		mainCanvas.image(puntoGraphics, 0, 0); // the circle
	}

	
	// Orbit graphics ----------------------------------------------------------------------------------------
	if(orbitCheckbox.checked()){
		drawOrbit();
		mainCanvas.push();
		mainCanvas.tint(colorList[5]);
		mainCanvas.image(orbitGraphics, 0, 0); // the orbit
		mainCanvas.pop();
	}
	
	// energy graphics ----------------------------------------------------------------------------------------
	if(energyCheckbox.checked()){
		drawEnergy();
		mainCanvas.push();
		mainCanvas.translate(width / 2, height / 2);
		mainCanvas.translate(0, energyHeight);
		mainCanvas.rotate(-135);
		mainCanvas.image(energyGraphics, 0, 0); // the radiating squares
		mainCanvas.pop();
	}
	
	// signature ----------------------------------------------------------------------------------------
	if(signatureCheckbox.checked()){
		mainCanvas.push();
		mainCanvas.fill(colorList[8]);
		mainCanvas.textFont(font);
		mainCanvas.textAlign(RIGHT, BOTTOM);
		mainCanvas.textSize(15);
		mainCanvas.text(nameInput.value() + '@MGM', width - 10, height - 5);
		mainCanvas.pop();

	}
	
	// generate universe number ----------------------------------------------------------------------------------------
	
	if(generated){
		mainCanvas.push();
		mainCanvas.fill(colorList[8]);
		mainCanvas.textFont(font);
		mainCanvas.textAlign(CENTER, BOTTOM);
		mainCanvas.textSize(15);
		mainCanvas.text(universeNumber, width / 2, height - 5);
		mainCanvas.pop();
	}
		
	// composing the canvas ----------------------------------------------------------------------------------------
	// base
	// |- mainCanvas (background = space color)
	//    |- starsGraphics
	//    |- waveGraphics
	//    |- radiationGraphics
	//    |- puntoGraphics
	//    |- orbitGraphics
	//    |- energyGraphics
	//    |- Signature
	//		|- Universe Number
	//

	// for testing

	mainCanvas.push();
	mainCanvas.fill('#FF0000');
	mainCanvas.textFont(font);
	mainCanvas.textAlign(LEFT, TOP);
	mainCanvas.textSize(50);
	mainCanvas.text('Test 32', 0, 0);
	mainCanvas.pop();

	mainCanvas.image(signatureGraphics, 0, 0); // the radiating squares

	image(mainCanvas, 0, 0);
	

	
}


