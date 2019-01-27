import { UserObject } from './interface';

export class User {
    public imageSrc: string
    public initials: string
    public username: string
   public status: boolean;

    constructor(userData: UserObject){

        this.imageSrc = userData.imageSrc
        this.initials = userData.initials
        this.username = userData.username
        this.status = userData.status
    }

    


}