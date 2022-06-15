var playerName = document.getElementById("name")
var country = document.getElementById("country")
var score = document.getElementById("score")
var submitBtn = document.getElementById("submitBtn")

var scoreList = document.getElementById("scoreContainer");


submitBtn.addEventListener("click" , eventHandler);

function eventHandler(){

    // Creating object with player details
    var details = {
        name : playerName.value,
        country : country.value,
        score : score.value
    }

        event.preventDefault();

        createEntry(details);

        // Clearing Values
        playerName.value = "";
        country.value = "";
        score.value = "";

}


function createEntry(details){

  var entryContainer = document.createElement("div");
  entryContainer.setAttribute("class" , "entry");

  var taskName = document.createElement("p");
  taskName.innerHTML = `${details.name} ${details.country} ${details.score}`;

  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  deleteButton.addEventListener("click" , function(){
    var subParent = deleteButton.parentElement;
    var parent = subParent.parentElement;

    parent.removeChild(subParent);

  })


  entryContainer.appendChild(taskName);
  entryContainer.appendChild(deleteButton);

  scoreList.appendChild(entryContainer);

}

