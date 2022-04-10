// ? why doesnt require import work?

var main_Container = document.getElementById("main-container");

// demo data to be replaced with builder input
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
  {
    name: "Echo",
    id: 1,
    email: "xyz@gmail.com",
    role: "Manager",
    officeNumber: "333",
  },
  {
    name: "Foxtrot",
    id: 1,
    email: "xyz@gmail.com",
    role: "Intern",
    school: "Testing State",
  },
  {
    name: "Golf",
    id: 1,
    email: "xyz@gmail.com",
    role: "Intern",
    school: "Response State",
  },
];

function cardCreator(data) {
  let count = data.length;

  for (let i = 0; i < count; i++) {
    var card = document.createElement("div");
    card.classList.add("card", "shadow");
    card.style.width = "15rem";
    card.setAttribute("card", i);

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

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

    var cardListID = document.createElement("li");
    cardListID.classList.add("list-group-item");
    cardListID.setAttribute("card-id", i);
    cardListID.textContent = `ID: ${data[i].id}`;

    var cardListEmail = document.createElement("li");
    cardListEmail.classList.add("list-group-item");
    cardListEmail.setAttribute("card-email", i);
    cardListEmail.textContent = `Email: ${data[i].email}`;

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
cardCreator(demoData);
