
// const data = require('../../lib/Builder')

var main_Container = document.getElementById("main-container");

function cardCreator(data) {
  let count = 10;

  for (let i = 0; i < count; i++) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "15rem";

    var cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = "#";

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("text-center")
    cardTitle.innerHTML = "Test";

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.classList.add("text-center")
    cardText.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat dolore in, accusamus ut consequuntur nobis ex illum quasi neque laboriosam. Minus harum illo cupiditate laborum nostrum beatae illum aliquam.";





    main_Container.append(card);

    card.append(cardImage);
    card.append(cardBody);

    cardBody.append(cardTitle);
    cardBody.append(cardText);
  }
}

cardCreator();
