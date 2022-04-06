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
    cardCreator()
  </script>
</body>
</html>
`
}