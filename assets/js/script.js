// ? why doesnt require import work?


var main_Container = document.getElementById("main-container");
var demoData = [
  {name:'Alpha', id:1, email:'xyz@gmail.com', role:'Manager'},
  {name:'Bravo', id:2, email:'xyz@gmail.com', role:'Engineer'},
  {name:'Charlie', id:3, email:'xyz@gmail.com', role:'Intern'},
  {name:'Delta', id:4, email:'xyz@gmail.com', role:'Engineer'}]

function cardCreator(data) {
  // update counter with input later
  let count = 5;

  for (let i = 0; i < count; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "15rem";
    card.setAttribute('card', i)

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    
    // update name with input later
    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("text-center")
    cardTitle.setAttribute('card-name', i)
    cardTitle.innerHTML = `${data[i].name}`;

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.classList.add("text-center")
    cardText.setAttribute('card-text', i)
    cardText.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

    var cardListUl = document.createElement('ul')
    cardListUl.classList.add('list-group')


    // update ID with input later
    var cardListID = document.createElement('li')
    cardListID.classList.add('list-group-item')
    cardListID.setAttribute('card-id', i)
    cardListID.innerHTML = `ID: ${data[i].id}` 

    // update Email with input later
    var cardListEmail = document.createElement('li')
    cardListEmail.classList.add('list-group-item')
    cardListEmail.setAttribute('card-email', i)
    cardListEmail.innerHTML = `Email: ${data[i].email}`

    // var cardListLi = document.createElement('li')
    // cardListLi.classList.add('list-group-item')

    main_Container.append(card);

    card.append(cardBody);

    cardBody.append(cardTitle);
    cardBody.append(cardText);
    cardBody.append(cardListUl)

    cardListUl.append(cardListID)
    cardListUl.append(cardListEmail)
  }
}
cardCreator(demoData)
