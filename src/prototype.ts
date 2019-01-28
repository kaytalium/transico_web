String.prototype.capitalize = function () {
    let result: string = " "
    let words: Array<string> = this.split(" ")
  
    if (words.length > 0) {
      words.forEach((word) => {
        result += word.charAt(0).toUpperCase() + word.slice(1) + " "
      })
  
    }
    return result.trim()
  }
  
  String.prototype.sentenceCase = function () {
    let result: string = " "
    let sentence: Array<string> = this.split(".")
    if (sentence.length > 0) {
      sentence.forEach((line: string) => {
        result += line.charAt(0).toUpperCase() + line.slice(1) + " ";
      })
    }
    return result.trim();
  }