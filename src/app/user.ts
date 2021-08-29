export class User {
    public found: boolean;
    public showRepo:boolean;
    public showFollowers:boolean;
    public showFollowing:boolean;
    
    constructor(public userName:string){
        this.showRepo = true;
        this.showFollowing = false;
        this.showFollowers = false;
        this.found = true;
    }
}
