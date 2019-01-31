import { User } from '@component/User.class';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
/**
   * Test Database holder
   * This is a class that stores all the test users information. From this data we are able to simulate 
   * authentication and login in user 
   * the object also store all the users that are logged in and their login state
   * 
   * The data reflects the how the data will be stored in the final database
   */
export class ActiveUserLog {
    
    private activeUser: User
    constructor() {}

    /**
     * return the list of users that are logged into the application 
     */
    getUserList(): Array<User> {
        return [
            new User({
                username: "Alexis Ohanian",
                imageSrc: '../../../assets/img/alexis.jpg',
                initials: "AO",
                status: true
            }),
            new User({
                username: "Jimmy Fallon",
                imageSrc: '../../../assets/img/jimmy.jpg',
                initials: "JF",
                status: false
            }),
            new User({
                username: "Kaley Cuoco",
                imageSrc: '../../../assets/img/kaley.jpg',
                initials: "KC",
                status: false
            })
        ]
    }

    /**
     * 
     */
    getActiveUser(): User{
        // console.log(this.getUserList().length)
        this.getUserList().forEach((user: User)=>{
            if(user.status == true){
                this.activeUser = user
            }
        })
       return this.activeUser; 
    }

    /**
     * Set the active user 
     */
    setActiveUser(user: User){
        this.activeUser = user;
    }
}