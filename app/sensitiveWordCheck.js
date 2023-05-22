function filterSensitiveWords(inputText) {
    const sensitiveWordPattern = new RegExp(`\\w*(${sensitiveWords.join('|')})\\w*`, 'gi');
    const censoredText = inputText.replace(sensitiveWordPattern, (match) => '*');
    return censoredText;
}