
/**
 * Authentication General Interface  
 * Created by Ovel Heslop
 * February 25, 2019
 * The purpose of these interface is to allow for ease of use of data
 * and improve readability
 */


 /**
  * Sigup Data interface capture the information 
  * from the user form
  *  for further processing.
  * 
  */
export interface SignupData{
    userType: string,
    fullname:string,
    firstname?:string,
    lastname?:string,
    email:string,
    password: string
}

/**
 * This is the structure of the database 
 */
export interface User{
  uid?:string
  email: string,
  fullname: string,
  userType: string,
}