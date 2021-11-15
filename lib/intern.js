// importing TeamMember constructor 
const TeamMember = require('./team-member');

// intern constructor extends TeamMember constructor 
class Intern extends TeamMember  {
    constructor (name, id, email, school) {
        // calling TeamMember constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;