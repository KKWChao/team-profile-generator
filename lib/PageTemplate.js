module.exports = templateData => {
  return `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
  <link rel="stylesheet" href="./assets/css/style.css">
  <!-- <link rel="icon" href="#"> -->
</head>
<body>
  <header class="d-flex justify-content-between p-3 align-items-center">
    <a href="#" class="text-decoration-none text-reset fw-bold fs-2">Title</a>

    <nav class="navBar">
      <ul class="nav nav-pill nav-fill">
        <li class="nav-item">
          <a href="https://github.com/KKWChao/team-profile-generator" target="_blank" class="nav-link active text-decoration-none text-reset" id="nav-a">Github</a>
        </li>
      </ul>
    </nav>
  </header>

  <h1 class="row align-center justify-content-center pt-3 fw-bold">TEAM MEMBERS</h1>

  <main class="container d-flex flex-wrap gap-3 justify-content-around p-3" id="main-container">

  </main>

  <footer>
  </footer>
  <script>
    var main_Container = document.getElementById("main-container");

    // demo data to be replaced with builder input
    var demoData = [
          {name:'Alpha', id:1, email:'xyz@gmail.com', role:'Manager', officeNumber:'333'},
          {name:'Bravo', id:2, email:'xyz@gmail.com', role:'Engineer', github:'Tester'},
          {name:'Charlie', id:3, email:'xyz@gmail.com', role:'Intern', school:'Dummy State'},
          {name:'Delta', id:4, email:'xyz@gmail.com', role:'Engineer', github:'Refactor'}]

    function cardCreator(data) {
      let count = data.length;
    
      for (let i = 0; i < count; i++) {
        var card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "15rem";
        card.setAttribute('card', i)
    
        var cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        
        var cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.classList.add("text-center")
        cardTitle.setAttribute('card-name', i)
        cardTitle.textContent = data[i].name;
    
        var cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.classList.add("text-center")
        cardText.setAttribute('card-text', i)
        cardText.textContent =
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    
        var cardListUl = document.createElement('ul')
        cardListUl.classList.add('list-group')

        var cardListID = document.createElement('li')
        cardListID.classList.add('list-group-item')
        cardListID.setAttribute('card-id', i)
        cardListID.textContent = 'ID: ' + data[i].id 

        var cardListEmail = document.createElement('li')
        cardListEmail.classList.add('list-group-item')
        cardListEmail.setAttribute('card-email', i)
        cardListEmail.textContent = 'Email: ' + data[i].email

        main_Container.append(card);

        card.append(cardBody);
    
        cardBody.append(cardTitle);
        cardBody.append(cardText);
        cardBody.append(cardListUl)

        cardListUl.append(cardListID)
        cardListUl.append(cardListEmail)

        // loop through for role 
        switch(data[i].role) {
          case 'Manager':
            var cardListOffice = document.createElement("li");
            cardListOffice.classList.add("list-group-item");
            cardListOffice.textContent = 'Office Number: ' + data[i].officeNumber;
            cardListUl.append(cardListOffice);
            break;

          case 'Engineer':
            var cardListGithub = document.createElement("li");
            cardListGithub.classList.add("list-group-item");

            var cardListGithubA = document.createElement('a');
            cardListGithubA.classList.add('text-decoration-none')
            cardListGithubA.setAttribute('target', '_blank');
            cardListGithubA.href = 'https://github.com/' + data[i].github;

            cardListGithubA.textContent = 'Github: ' + data[i].github;

            cardListUl.append(cardListGithub);
            cardListGithub.append(cardListGithubA);
            break;

          case 'Intern':
            var cardListSchool = document.createElement("li");
            cardListSchool.classList.add("list-group-item");
            cardListSchool.textContent = 'School: '+ data[i].school;

            cardListUl.append(cardListSchool);
            break;

          case 'Employee':
            console.log("This shouldn't pop up")
            break;
        }
      }
    }
    cardCreator(demoData)
    </script>
</body>
</html>

`
}