function sanitizeText(text) {
    const abuseWords = ["badword1", "badword2", "badword3"];
  
    abuseWords.forEach(word => {
      text = text.replace(new RegExp(word, "gi"), "*".repeat(word.length));
    });
  
    return text;
  }
