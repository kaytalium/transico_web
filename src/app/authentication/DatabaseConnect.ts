import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { SignupData, User } from './interface'
import { Observable } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';
import { UserData } from '../@application/schedule-manager/bus-schedule/bus-schedule.component';




@Injectable({
    providedIn:'root'
})

export class DatabaseConnect{

    /**
     * @type {Observable<User>} user
     * @type {AngularFirestoreCollection<User>} userCollection
     */
    user: Observable<User | null>
    userCollection: AngularFirestoreCollection<User>


    /**
     * @constructor DatabaseConnect
     * @param {AngularFirestore} afs
     * @param {}
     * 
     */
    constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth){
        this.userCollection = this.afs.collection('system_users')
        
    }

    // Sign up with email/password
  SignUp(userInput: SignupData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(userInput.email, userInput.password);
  }


  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
         this.router.navigate(['<!-- enter your route name here -->']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  /**
   * Prepare the data recieved from the user input form 
   * for storage 
   * @param data 
   * @param uid 
   */
  prepareDataForStorage(data: SignupData, uid: string): User{
    return {
        uid:uid,
        email: data.email,
        fullname: data.fullname,
        userType: data.userType
    }
  }

    /**
     * Create a Void Function
     * Add a new Member to the user collection.
     * @param {User} userData 
     */
    create(userData: User): void{
        this.userCollection.add(userData)
    }

    /**
     * Get user with matching email 
     * @param {any} email
     */
    getUserByEmail(emailRef: string){
        return this.userCollection = this.afs.collection('system_users', ref=> ref.where('email','==',emailRef))
    }


    registerUser(input: SignupData){
        //check the list of current users to ensure that email to register does not exist
        
        console.log(input)
        //Get the system user with email
        
        let user: Observable<User[]> = this.afs.collection<User>("system_users", ref=>
                ref.where("email","==",input.email)
        ).valueChanges();

         

      user.subscribe((a)=>{
          console.log(a)
      })
        //this check if result came back from server 
        //if false then email was not found as such we can create new record
        // if(!this.existingUserData.ref){
        //     this.db.collection("system_users").add(input)
        //     return true
        // }else{
        //     return false
        // }        
    }
}

export class EmailPasswordCredentials {
    email: string;
    password: string;
  }