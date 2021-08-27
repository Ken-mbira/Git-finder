export class User {
    public showRepo:boolean;
    public showFollowers:boolean;
    public showFollowing:boolean;
    
    constructor(public userName:string, public bio:string, public repoNumber:number, public followers:number, public following:number, public avatar:string){
        this.showRepo = true;
        this.showFollowing = false;
        this.showFollowers = false;
    }
}
