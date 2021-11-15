const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./js/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const teamMembers = [] //an array to store team members for now.


function managerPrompt (){
    return inquirer.prompt([
        {
          type: 'input',
          message: 'Who is the manager of this team?',
          name: 'managerName',
          validate: filledName => {
            if(filledName){

                return true
            }
            else{
                console.log("Please enter a name!")
                return false

            }
          }},
        {
          type: 'input',
          message: 'Please enter the managers ID number',
          name: 'managerID',
          validate: numInput =>{
            if(isNaN(numInput)){
                console.log("Please enter a valid ID number!")
                return false
            }
            else{
                return true

            }

          }
        },
        {
          type: 'input',
          message: 'Please input the managers email',
          name: 'managerEmail',
          validate: validEmail => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validEmail)    //taken from a Stackoverflow post
            
            if(valid){
                console.log("Email accepted")
                return true

            }
            else{
                console.log("Please enter a valid email!")
                return false

            }

          }

        },
        {
            type: 'input',
            message: 'Please input the managers office number',
            name: 'managerOffice',
            validate: officeNumber => {
                if(isNaN(officeNumber)){
                    console.log("Please enter a valid office number")
                    return false

                }
                else{
                    return true

                }

            }
          },
        ])
        .then(managerInput => {
            const  { managerName, managerID, managerEmail, managerOffice } = managerInput; 
            const manager = new Manager (managerName, managerID, managerEmail, managerOffice);
    
            teamMembers.push(manager); 
            console.log(manager); 
        })
    };    
    
    
    


        function teamMemberPrompt (){
            return inquirer.prompt([

                {
                    type: 'list',
                    message: 'Is this an engineer or an intern?',
                    name: 'jobRank',
                    choices: ["Engineer", "Intern"]
                    },
                {
                  type: 'input',
                  message: 'What is this teamMembers name?',
                  name: 'teamMemberName',
                  validate: filledName => {
                    if(filledName){
        
                        return true
                    }
                    else{
                        console.log("Please enter a name!")
                        return false
        
                    }
                  }},
                {
                  type: 'input',
                  message: 'Please input the teamMembers email',
                  name: 'teamMemberEmail',
                  validate: validEmail => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validEmail)   
                    
                    if(valid){
                        console.log("Email accepted")
                        return true
        
                    }
                    else{
                        console.log("Please enter a valid email!")
                        return false
        
                    }
        
                  }
        
                },

                {
                    type: 'input',
                    name: 'teamMemberID',
                    message: "Please enter the teamMember's ID.",
                    validate: nameInput => {
                        if  (isNaN(nameInput)) {
                            console.log ("Please enter the teamMember's ID!")
                            return false; 
                        } else {
                            return true;
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'github',
                    message: "Please enter the engineer's github username.",
                    when: (input) => input.jobRank === "Engineer",
                    validate: nameInput => {
                        if (nameInput ) {
                            return true;
                        } else {
                            console.log ("Please enter the engineer's github username!")
                        }
                    }
                },

                {
                    type: 'input',
                    name: 'school',
                    message: "Please enter the intern's school",
                    when: (input) => input.jobRank === "Intern",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log ("Please enter the intern's school!")
                        }
                    }
                },

                {
                    type: 'confirm',
                    name: 'addAnother',
                    message: 'Add another team member?',
                    default: false
                }

                ])
            
            
                .then(teamMemberData => {
                    // data for teamMember types 
            
                    let { teamMemberName, teamMemberID, teamMemberEmail, jobRank, github, school, addAnother } = teamMemberData; 
                    let teamMember; 
            
                    if (jobRank === "Engineer") {
                        teamMember = new Engineer (teamMemberName, teamMemberID, teamMemberEmail, github);
            
                        console.log(teamMember);
            
                    } else if (jobRank === "Intern") {
                        teamMember = new Intern (teamMemberName, teamMemberID, teamMemberEmail, school);
            
                        console.log(teamMember);
                    }
            
                    teamMembers.push(teamMember); 
            
                    if (addAnother) {
                        return teamMemberPrompt(teamMembers); 
                    } else {
                        return teamMembers;
                    }
                })            
            
            
            
            }
            
            const writeFile = data => {
                fs.writeFile('./sample/index.html', data, err => {
                    // if there is an error 
                    if (err) {
                        console.log(err);
                        return;
                    // when the profile has been created 
                    } else {
                        console.log("Your team profile has been successfully created! Please check out the index.html")
                    }
                })
            }; 

            managerPrompt()
            .then(teamMemberPrompt)
            .then(teamMembers => {
              return generateHTML(teamMembers);
            })
            .then(pageHTML => {
              return writeFile(pageHTML);
            })
            .catch(err => {
           console.log(err);
            }); 