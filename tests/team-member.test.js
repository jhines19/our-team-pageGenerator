const TeamMember = require('../lib/team-member');

describe ('TeamMember', () => {
    describe('Team Member object creation', () => {
        it('should create an employee object', () => {
            //Arrange
            const teamMember = new TeamMember('Jaraad', 24, 'jhines19@gmail.com');
            //Act

            //Assert
            expect(teamMember.name).toEqual(expect.any(String));
            expect(teamMember.id).toEqual(expect.any(Number));
            expect(teamMember.email).toEqual(expect.any(String));
        })
    })

    describe('Retrieve name from Team Member object', () => {
        it('should get name from getName() method', () => {
            const teamMember = new TeamMember('Jaraad', 24, 'jhines19@gmail.com');

            expect(teamMember.getName()).toEqual(expect.any(String));
        });
    });

    describe('Retrieve id from Team Member object', () => {
        it('should get id from getId() method', () => {
            const teamMember = new TeamMember('Jaraad', 24, 'jhines19@gmail.com');

            expect(teamMember.getId()).toEqual(expect.any(Number));
        });
    });

    describe('Retrieve email from Team Member object', () => {
        it('should get email from getEmail() method', () => {
            const teamMember = new TeamMember('Jaraad', 24, 'jhines19@gmail.com');

            expect(teamMember.getEmail()).toEqual(expect.stringContaining(teamMember.email.toString()));
        });
    });

    describe('Retrieve role from Team Member object', () => {
        it('should get emil from getRole() method', () => {
            const teamMember = new TeamMember('Jaraad', 24, 'jhines19@gmail.com');

            expect(teamMember.getRole()).toEqual("TeamMember");
        })
    })
})

//to-do: write tests for other objects