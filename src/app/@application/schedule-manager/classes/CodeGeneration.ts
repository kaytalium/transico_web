import { Injectable } from '@angular/core';


@Injectable({ 
    providedIn: 'root'
  })

export class CodeGeneration{

    chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    
    constructor(){}

    generateCode(length: number){
        let code: string = ""
        for(let i=0; i<length; i++){
            code += this.chars.charAt(Math.random() * ( 62 - length ))
        }
        return code
    }


}