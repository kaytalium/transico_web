import { Injectable, ElementRef } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class PasswordValidator {

    validate(password: string): Validate {
        let validate: Validate = {}
        
        if (password.length >= 8 ) {
            validate.isError = false
        } else if (password.length > 0 && password.length <=7) {
            validate.message = "Password must be at least 8 characters"
            validate.isError = true
        } else if (password.length == 0) {
            validate.message = "Please provide a password"
            validate.isError = true
        }
        return validate
    }
}



export interface Validate {
    isError?: boolean,
    message?: string
}