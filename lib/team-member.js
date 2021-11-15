class TeamMember {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name from input
    getName () {
        return this.name;
    }

    // returning ID from input
    getId () {
        return this.id;
    }   

    // returning email from input
    getEmail () {
        return this.email;
    }

    // returning TeamMember type 
    getRole () {
        return 'TeamMember'; 
    }
};

module.exports = TeamMember; 