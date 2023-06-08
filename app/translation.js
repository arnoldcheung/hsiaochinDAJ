// Dictionary of translations
const translations = {
    en: {
        language: "中",
        dajTitle: "Digital Art Jamming",
        nameInputDefaultInstruction: "Your name",
        messageInputDefaultInstruction: "Your Message (Optional) ",
        fontInstruction: "Font",
        generateInstruction: "Generate your unique universe",
        goInstruction: "Go",
        eightDigitInstruction: "Enter your 8 digit code",
        manualInstruction: "Create your universe manually",
        nextElementInstruction: "Next",
        colorInstruction: "Choose the color of elements",
        hideControlInstruction: "Hide Control",
        showControlInstruction: "Show Control",
        captureInstruction: "Capture",
        resetInstruction: "Reset",
        adjustSliderInstruction: '⬅ Adjust the composition ⮕',
        exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’ ",

        retrieveSketchTitle: "Thank you for joining the Digital Art Jamming {{Name}}",
        retrievingMessage: "Retrieving your Cosmo Image...", 

        colorNameList: [
            'Space',
            'Chi',
            'Punto',
            'Energy 1',
            'Energy 2',
            'Vitality',
            'Radiation', 
            'Signature'],

        elementList: [
            'Punto',
            'Energy',
            'Movement',
            'Vitality',
            'Radiation'],
    },



    zh: {
        language: "en",
        dajTitle: "數字藝術創作體驗",
        nameInputDefaultInstruction: "您的名字",
        messageInputDefaultInstruction: "您的留言（可選）",
        fontInstruction: "字體",
        generateInstruction: "自動生成您專屬的超元宇宙",
        goInstruction: "生成",
        eightDigitInstruction: "輸入8位數字代碼﹐如出生日期",
        manualInstruction: "手動創建您的超元宇宙",
        nextElementInstruction: "換元素",
        colorInstruction: "設定元素的屬性顏色",
        hideControlInstruction: "隱藏控制",
        showControlInstruction: "顯示控制",
        captureInstruction: "截圖",
        resetInstruction: "重置",
        adjustSliderInstruction: '⬅調整您的宇宙構圖⮕',
        exhibitionTitle: "《超元‧萬象: 蕭勤的藝術》‘To Infinity and Beyond: The Art of Hsiao Chin’",

        retrieveSketchTitle: "{{Name}}, 感謝您參與數字藝術創作",
        retrievingMessage: "您的超元宇宙圖像正在生成中...",

        colorNameList: [
            '宇宙',
            '炁',
            '龐圖',
            '能量 1',
            '能量 2',
            '生命力',
            '放射', 
            '字體'],

        elementList: [
            '龐圖',
            '能量',
            '動態',
            '生命力',
            '放射'],
    },
  };
  
let currentLanguage = "zh";

  // Function to get the translated text based on the current language
function getTranslation(key) {
    return translations[currentLanguage][key];
  }
  
  // Function to toggle the language and re-render the text
  function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "zh" : "en";
    // console.log(currentLanguage)
    resetUniverse(); // Re-render the sketch with the updated language
    resetUniverse(); // Re-render the sketch with the updated language

  }