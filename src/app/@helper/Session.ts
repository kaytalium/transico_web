import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
/**
 * @Author Ovel Heslop
 * @Date February 17, 2019
 * @Description
 * This class will be use to make the app session therefore before any page is loaded it must check 
 * with this file before moving on. 
 * if a session is set then navigate user esle return false and allow user to define route path
 * 
 * This session class will not be full developed as this is just to demo/simulate access control.
 * the code will be in it crude form as the concept is taken from another project that I the developer is currenlty 
 * working on. 
 */
export class Session {

}