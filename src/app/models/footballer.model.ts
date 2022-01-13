export class Footballer {

    id?: string;
    firstname: string;
    lastname: string;
    photo: string;
    post: string;
    nationality: string;
    club: string;
    goals: number;
    trophies: number;
    onBench: boolean;
  
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.photo = "";
        this.post = "";
        this.nationality = "";
        this.club = "";
        this.goals = 0;
        this.trophies = 0;
        this.onBench = false;
    }
}
