export class NavigationPath {
   
    private fullPath: Array<string>
  
    constructor(private path: string) {
      this.fullPath = path.split("/")
    }
  
    set(path: string) {
      this.fullPath = path.split("/")
      return this
    }
  
    getDisplayName(locator: number): string {
      return this.formatName(this.fullPath[locator])
    }
  
    length(): number {
      return this.fullPath.length
    }
  
    private formatName(name: string): string {
      let nameArray: Array<string> = name.split("_")
      let format: string = "";
  
      if (nameArray.length > 1) {
        nameArray.forEach((name: string) => {
          format += " " + name
        })
      } else if (nameArray.length === 1) {
        return nameArray[0].trim().capitalize();
      }
      return format.trim().capitalize()
    }
  }
  
  
  declare global {
    interface String {
      capitalize(): string
      sentenceCase(): string
    }
  }
  
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