// importing TeamMember constructor 
const TeamMember = require('./team-member');

// manager constructor extends TeamMember constructor 
class Manager extends TeamMember {
    constructor (name, id, email, officeNumber) {
        // calling TeamMember constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}

// to be exported 
module.exports = Manager; 