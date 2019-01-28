import '@src/prototype'
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
  
  