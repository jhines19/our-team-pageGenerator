//importing TeamMember constructor
const TeamMember = require('./team-member');

//Engineer constructor extends TeamMember constructor
class Engineer extends TeamMember {
    constructor (name, id, email, github) {
        // calling TeamMember constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        return this.github;
    }

     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}


module.exports = Engineer; 