// ? why doesnt require import work?

var main_Container = document.getElementById("main-container");
var demoData = [
  {
    name: "Alpha",
    id: 1,
    email: "xyz@gmail.com",
    role: "Manager",
    officeNumber: "333",
  },
  {
    name: "Bravo",
    id: 2,
    email: "xyz@gmail.com",
    role: "Engineer",
    github: "Tester",
  },
  {
    name: "Charlie",
    id: 3,
    email: "xyz@gmail.com",
    role: "Intern",
    school: "Dummy State",
  },
  {
    name: "Delta",
    id: 4,
    email: "xyz@gmail.com",
    role: "Engineer",
    github: "Refactor",
  },
];

function cardCreator(data) {
  // update counter with input later
  let count = 5;

  for (let i = 0; i < count; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "15rem";
    card.setAttribute("card", i);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // update name with input later
    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("text-center");
    cardTitle.setAttribute("card-name", i);
    cardTitle.textContent = `${data[i].name}`;

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.classList.add("text-center");
    cardText.setAttribute("card-text", i);
    cardText.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    var cardListUl = document.createElement("ul");
    cardListUl.classList.add("list-group");

    // update ID with input later
    var cardListID = document.createElement("li");
    cardListID.classList.add("list-group-item");
    cardListID.setAttribute("card-id", i);
    cardListID.textContent = `ID: ${data[i].id}`;

    // update Email with input later
    var cardListEmail = document.createElement("li");
    cardListEmail.classList.add("list-group-item");
    cardListEmail.setAttribute("card-email", i);
    cardListEmail.textContent = `Email: ${data[i].email}`;

    // var cardListLi = document.createElement('li')
    // cardListLi.classList.add('list-group-item')

    main_Container.append(card);

    card.append(cardBody);

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(cardListUl);

    cardListUl.append(cardListID);
    cardListUl.append(cardListEmail);

    // loop through for role
    switch (data[i].role) {
      case "Manager":
        var cardListOffice = document.createElement("li");
        cardListOffice.classList.add("list-group-item");
        cardListOffice.textContent = `Office Number: ${data[i].officeNumber}`;
        cardListUl.append(cardListOffice);
        break;

      case "Engineer":
        var cardListGithub = document.createElement("li");
        cardListGithub.classList.add("list-group-item");

        var cardListGithubA = document.createElement("a");
        cardListGithubA.classList.add("text-decoration-none");
        cardListGithubA.setAttribute("target", "_blank");
        cardListGithubA.href = `https://github.com/${data[i].github}`;

        cardListGithubA.textContent = `Github: ${data[i].github}`;

        cardListUl.append(cardListGithub);
        cardListGithub.append(cardListGithubA);
        break;

      case "Intern":
        var cardListSchool = document.createElement("li");
        cardListSchool.classList.add("list-group-item");
        cardListSchool.textContent = `School: ${data[i].school}`;

        cardListUl.append(cardListSchool);
        break;

      case "Employee":
        console.log("This shouldn't pop up");
        break;
    }
  }
}


function managerOffice(data) {
  return cardListOffice;
}
cardCreator(demoData);
function managerOffice(data) {
  var cardListOffice = document.createElement("li");
  cardListOffice.classList.add("list-group-item");
  cardListOffice.textContent = `Office Number: ${data.officeNumber}`;

  return cardListOffice;
}

function engineerGithub(data) {
  var cardListGithub = document.createElement("li");
  cardListGithub.classList.add("list-group-item");
  cardListGithub.textContent = `Github: ${data.github}`;

  cardListUl.append(cardListGithub);
}

function internCard(data) {
  var cardListSchool = document.createElement("li");
  cardListSchool.classList.add("list-group-item");
  cardListSchool.textContent = `Github: ${data.school}`;

  cardListUl.append(cardListSchool);
}

cardCreator(demoData);
