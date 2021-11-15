// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
    <div style="border-radius: 25px;" class="card h-100 shadow-lg">
        <div class="card-header bg-primary text-white">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="id">ID: ${manager.id}</p>
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
    <div style="border-radius: 25px;" class="card h-100 shadow-lg">
        <div class="card-header bg-primary text-white">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="id">ID: ${engineer.id}</p>
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
    <div style="border-radius: 25px;" class="card h-100 shadow-lg">
        <div class="card-header bg-primary text-white">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="id">ID: ${intern.id}</p>
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p style="border: 1px solid black; border-radius: 5px; padding: 5px;" class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// push array to page 
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const teamMember = data[i];
        const role = teamMember.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(teamMember);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(teamMember);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(teamMember);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const teamMemberCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(teamMemberCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (teamMemberCards) {   
  return`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
          <span class="navbar-brand mb-2 py-5 h1 w-100 text-center text-white bg-danger" id="navbar-text"><span style="font-size: 40px; font-family: monospace;">My Team</span></span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${teamMemberCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML; 