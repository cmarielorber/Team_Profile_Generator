//Manager card
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class="card-header">
                <h1> ${manager.name}</h1>
                <h2>Manager</h2><i class="material-icons">content_paste</i>
             </div>
    
            <div class="card-body">
                <p class ="id">ID: ${manager.id}</p>
                <p class ="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class ="officeNumber">Office Number: ${manager.officeNum}</p>
            </div>
        </div>
    </div>
    `;
}

//Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class="card-header">
                <h1> ${engineer.name}</h1>
                <h2>Engineer</h2><i class="material-icons">content_paste</i>
             </div>
    
            <div class="card-body">
                <p class ="id">ID: ${engineer.id}</p>
                <p class ="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class ="gitHub">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
    </div>
    `;
}

//Inter Card
const generateIntern = function (Intern) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class="card-header">
                <h1> ${intern.name}</h1>
                <h2>Intern</h2><i class="material-icons">assignment_ind</i>
             </div>
    
            <div class="card-body">
                <p class ="id">ID: ${intern.id}</p>
                <p class ="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class ="school">Education: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
}

//push array to generatedHTML page

generateHTML = (data) => {

//card array
pageArray = [];

for (let i = 0; i <data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    //call manager function
    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        pageArray.push(managerCard);
    }

    //call engineer function
    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        pageArray.push(engineerCard);
    }

    //call intern function
    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        pageArray.push(internCard);
    }
}

//join strings
const employeeCards = pageArray.join('')

//return to generated page
const generateTeam = generateTeamHTML(employeeCards)
return generateTeam;
}

//generate html
const generateTeamPage = function (employeeCards) {
    return`
    <DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your A-Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous" />
    <link rel="stylesheet" href="./dist/style.css" />
    <script src="https://kit.fontawesome.com/93df6eac37.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet" />
    </head>  
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">A-Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
      crossorigin="anonymous"></script>
    `;
}

//export
module.exports = generateHTML;