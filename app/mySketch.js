currentPixelDensity = 1;

// Control Panel Setup ----------------------------------------------------------------------------------------
let panelVisible = true; // boolean to check if controlPanel is currently visible
let controlPanel; // the Div that is the control panel

let iroPickerDiv; // div that contains the colorpicker

let elementName; // element name Div element

// buttons ----------------------------------------------------------------------------------------
let generateButton;
let fontButton;
let nextElementButton;
let hideShowButton; // the button toggle that turns the controlPanel on & off (will rename)
let captureButton;
let resetButton;
let translateButton;

// list of canvas and graphics stacked on top of base canvas ----------------------------------------------------------------------------------------
let mainCanvas;
let backgroundScreenGraphics;

let puntoGraphics;
let starsGraphics;
let orbitGraphics;
let energyGraphics;
let radiationGraphics;
// let waveGraphics;
let buttonMenuDiv;

let buttonMenuHeight = 70;

let bottomBannerGraphics;

let downloadCanvas;

// flag to show signature or not ----------------------------------------------------------------------------------------
let signature = false;

// punto variables ----------------------------------------------------------------------------------------
var initial_punto_r;
var punto_r;

// flag that checks if the art is generated or modified ----------------------------------------------------------------------------------------
let generated = false;

// the generation number ----------------------------------------------------------------------------------------
let universeNumber;

// sliders ----------------------------------------------------------------------------------------

let sliderIntroText;

let sliderSpacing = 40;

let size_slider;

let energySizeSlider;

// let waveFrequencySlider;
let energyHeightSlider;

let orbit_speed_slider;

let radiationSizeSlider

// newly adsded sliders ---
let backgroundSlider;
let chiSlider;
let signatureSlider;

// Checkboxes ----------------------------------------------------------------------------------------
let puntoCheckbox;
let orbitCheckbox;
let energyCheckbox;
let radiationCheckbox
// let waveCheckbox;

// newly adsded checkboxes ---
let backgroundCheckbox;
let chiCheckbox;
let signatureCheckbox;

// text inputs ----------------------------------------------------------------------------------------
let nameInput;
let messageInput;
let numberInput;

// energy variables ----------------------------------------------------------------------------------------
let growSize; // spped of the energy shapes grow
let layerSize; // thickness of the energy

// font ----------------------------------------------------------------------------------------
// let fonts = [
// 	'Courier New',
// 	'Arial',
// 	'Georgia',
// 	'Times New Roman',
// 	'Verdana' ];

let fonts;

let currentFontIndex = 0;
let currentFont;
let numSelectableFonts;

// text and messages ----------------------------------------------------------------------------------------
let mySignature = '';
let myMessage = '';


// color selection toggle ----------------------------------------------------------------------------------------

// let colorList = ['#021E3A', // bg
// 				'#FFFFFF', // stars
// 				'#FF6400', // Punto
// 				'#DBFF26', // energy 1
// 				'#3DE049', // energy 2
// 				'#FFFFFF', // orbit
// 				'#AEF064', // radiation
// 				'#FFFFFF'] // signature

// let colorNameList = ['Space',
// 					'Stars',
// 					'Punto',
// 					'Energy 1',
// 					'Energy 2',
// 					'Vitality',
// 					'Radiation', 
// 					'Signature'];

let colorList = ['#021E3A', // bg
				'#FFFFFF', // stars
				'#FF6400', // Punto
				'#DBFF26', // energy 1
				// '#3DE049', // energy 2
				'#FFFFFF', // orbit
				'#AEF064', // radiation
				'#FFFFFF'] // signature

let colorNameList = ['Space',
					'Stars',
					'Punto',
					'Energy',
					// 'Energy 2',
					'Vitality',
					'Radiation', 
					'Signature'];


let numSelectableColors = colorList.length;
let currentColorSelectionIndex = 0;

let energyColor2 = '#3DE049';


// orbit variable ----------------------------------------------------------------------------------------
const numCircles = 1200;
let circleData = [];


// mgm logo
let logo;
let logoImg;
let exhibitionTitleDiv;

function preload() {
	logo = loadImage("assets/logos/MGM 3D Logo.png");

	enFont1 = loadFont("assets/fonts/FontsFree-Net-Proxima-Nova-Sbold.otf");
	enFont2 = loadFont("assets/fonts/Cinzel-ExtraBold.ttf");
	enFont3 = loadFont("assets/fonts/VinaSans-Regular.ttf");
	zhFont1 = loadFont("assets/fonts/NotoSerifHK-SemiBold.ttf");
	zhFont2 = loadFont("assets/fonts/NotoSansTC-Bold.otf");
	zhFont3 = loadFont("assets/fonts/NotoSerifJP-Medium.otf");

	fonts = [
		// enFont1,
		// enFont2,
		// enFont3,
		zhFont1,
		zhFont2,
		zhFont3]

	currentFont = fonts[currentFontIndex];
	numSelectableFonts = fonts.length;
}

function setup() {
	createMetaTag();
	pixelDensity(currentPixelDensity);
	createCanvas(windowWidth, windowHeight);

	background(0);
	
	angleMode(DEGREES);
	
	//create main canvas ----------------------------------------------------------------------------------------
	mainCanvas = createGraphics(width, height);
	mainCanvas.angleMode(DEGREES);

	backgroundScreenGraphics = createGraphics(width, height);
	backgroundScreenGraphics.background(0);

	// create download Canvas ----------------------------------------------------------------------------------------
	downloadCanvas = createGraphics(mainCanvas.width, mainCanvas.height + buttonMenuHeight);
	
	// create orbit cancvas ----------------------------------------------------------------------------------------
	setupOrbit();
	
	// Create punto grapghics ----------------------------------------------------------------------------------------
	setupPunto();
	
	// Create scatter grapghics ----------------------------------------------------------------------------------------
	setupStars();
	
	// Create energy grapghics ----------------------------------------------------------------------------------------
	setupEnergy();
	
	// Create wave grapghics ----------------------------------------------------------------------------------------
	// setupWaves();	
	
	// Create radiation graphics ----------------------------------------------------------------------------------------
	setupRadiation();
	
	// Setup control panel ----------------------------------------------------------------------------------------
	setupControlPanel();

	setupNumberInput();

	setupNameInput();

	setupMessageInput();
	
	
	
	
	// Create Checkboxes ----------------------------------------------------------------------------------------
	checkboxSetup();
	
	// Create sliders ----------------------------------------------------------------------------------------
	sliderSetup();
	
	setupColorPicker();


	// Setup the three buttons at the bottom ----------------------------------------------------------------------------------------

	setupButtonMenu();
	setupBottomBanner();

	togglePanel(); //turn panel off at the beginning

	resetUniverse();
}

function draw() {
 	clear(); // reset base canvas
	mainCanvas.background(colorList[0]); // reset background



	orbitGraphics.clear();  // reset orbit
	radiationGraphics.clear();  // reset radiation
	// waveGraphics.clear();  // reset wave
	
	// get values from sliders ----------------------------------------------------------------------------------------
	layerSize = energySizeSlider.value();
	
	stroke_w = energySizeSlider.value();
	
	// waveFrequency = waveFrequencySlider.value();
	energyHeight = energyHeightSlider.value();
		
	size_slider.input(() => {
		punto_r = size_slider.value();
	});
	
	radiationSize = radiationSizeSlider.value();
	
	orbit_speed = orbit_speed_slider.value();

	screenAlpha = backgroundSlider.value();
	chiAlpha = chiSlider.value();


	// background tine ----------------------------------
	// screenAlphaHex = hex(screenAlpha, 2);

	mainCanvas.push();
	mainCanvas.tint(255, 255 - screenAlpha)
	mainCanvas.image(backgroundScreenGraphics, 0, 0)
	mainCanvas.pop();

	
	// Star grapghics ----------------------------------------------------------------------------------------

	mainCanvas.push();

	chiAlphaHex = hex(chiAlpha, 2)

	mainCanvas.tint(colorList[1] + chiAlphaHex);
	mainCanvas.image(starsGraphics, 0, 0);
	mainCanvas.pop();
	
	// // wave grapghics ----------------------------------------------------------------------------------------
	// if(waveCheckbox.checked()){
	// 	drawWave();
	// 	mainCanvas.image(waveGraphics, 0, 0);	
	// }
	
	// radiation graphics ----------------------------------------------------------------------------------------
	if(radiationSize > 0.1){
		drawRadiation();
		mainCanvas.push();
		mainCanvas.imageMode(CENTER);
		mainCanvas.translate(width / 2, height / 2);
		mainCanvas.rotate(frameCount * 0.2);
		mainCanvas.image(radiationGraphics, 0, 0); // the triangles
		mainCanvas.pop();
	}
	
	// punto graphics ----------------------------------------------------------------------------------------
	// if(puntoCheckbox.checked()){
	drawPunto();
	mainCanvas.image(puntoGraphics, 0, 0); // the circle
	// }

	
	// Orbit graphics ----------------------------------------------------------------------------------------
	if(orbit_speed > -5){
		drawOrbit();
		mainCanvas.push();
		mainCanvas.tint(colorList[4]);
		mainCanvas.image(orbitGraphics, 0, 0); // the orbit
		mainCanvas.pop();
	}
	
	// energy graphics ----------------------------------------------------------------------------------------
	if(energyHeight > -600){
		drawEnergy();
		mainCanvas.push();
		mainCanvas.translate(width / 2, height / 2);
		mainCanvas.translate(0, energyHeight);
		mainCanvas.rotate(-135);
		mainCanvas.image(energyGraphics, 0, 0); // the radiating squares
		mainCanvas.pop();
	}
	
	// signature ----------------------------------------------------------------------------------------
	if(signature){
		mainCanvas.push();
		mainCanvas.fill(colorList[6]);
		mainCanvas.textFont(currentFont);
		mainCanvas.textAlign(RIGHT, BOTTOM);
		mainCanvas.textSize(20);

		universeNumberDisplay = generated ? universeNumber : '';

		mainCanvas.text(universeNumberDisplay + ' ' + mySignature + ' @MGM', width - 10, height - 10);
		mainCanvas.pop();
	}

	// Message ----------------------------------------------------------------------------------------
	// displayMessageWithLineBreaks(myMessage);

	mainCanvas.push();
	// mainCanvas.rectMode(CORNERS);
	mainCanvas.fill(colorList[6]);
	mainCanvas.textFont(currentFont);
	mainCanvas.textAlign(RIGHT, TOP);
	mainCanvas.textSize(30);
	mainCanvas.text(myMessage, width * 0.6, 10,  (width - 10) - (width * 0.6), height * 0.25);
	mainCanvas.pop();
	
	// generate universe number ----------------------------------------------------------------------------------------
	
	// if(generated){
	// 	mainCanvas.push();
	// 	mainCanvas.fill(colorList[7]);
	// 	mainCanvas.textFont(currentFont);
	// 	mainCanvas.textAlign(CENTER, BOTTOM);
	// 	mainCanvas.textSize(20);
	// 	mainCanvas.text(universeNumber, width / 2, height - 5 - buttonMenuHeight);
	// 	mainCanvas.pop();
	// }

	// mainCanvas.image(bottomBannerGraphics, 0, height - buttonMenuHeight);
		
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
	//	  |- Universe Number
	//


	// mainCanvas.push();
	// mainCanvas.fill('#FF0000');
	// mainCanvas.textFont(fonts[0]);
	// mainCanvas.textAlign(LEFT, TOP);
	// mainCanvas.textSize(100);
	// mainCanvas.text('Test 46', 0, 0);
	// mainCanvas.pop();




	image(mainCanvas, 0, 0); // drawing the main canvas onto the base canvas
}


