function setupBottomBanner(){
	bottomBannerGraphics = createGraphics(width, buttonMenuHeight);
    bottomBannerGraphics.background(255);

    const logoHeight = bottomBannerGraphics.height;
    const logoWidth = (logo.width / logo.height) * logoHeight;

    bottomBannerGraphics.image(logo, 10, 0, logoWidth, logoHeight); // Adjust the X position and size accordingly

    bottomBannerGraphics.push();
    bottomBannerGraphics.fill('#000000');
    bottomBannerGraphics.textFont('Times New Roman');
    bottomBannerGraphics.textStyle(ITALIC);
    bottomBannerGraphics.textAlign(RIGHT, BOTTOM);
    bottomBannerGraphics.textSize(20);
    bottomBannerGraphics.text('Hsiao Chin Exhibition 2023 @ MGM', bottomBannerGraphics.width - 10, bottomBannerGraphics.height / 2);
    bottomBannerGraphics.pop();

}

