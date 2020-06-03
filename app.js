document.addEventListener("DOMContentLoaded", function () {

    var friendsArray = ["Finn", "Jake", "P-Bubs", "BMO", "Marceline"];
    var locationArray = [
      "bedroom",
      "office",
      "supply closet",
      "hallway",
      "foyer",
      "den",
      "living room",
      "dining room",
      "garage",
      "kitchen",
    ];
    var weaponsArray = [
      "monkey wrench",
      "bowling ball",
      "acid",
      "pencil",
      "garrote",
      "butter knife",
      "plastic bag",
      "vase",
      "stiletto heel",
      "gas leak",
      "fork",
      "baterang",
      "spiked club",
      "baseball bat",
      "shank",
      "horseshoe",
      "brass knucles",
      "paper cut",
      "cast iron skillet",
      "hot grits",
    ];

  function addInfo(i) {
      function makeAlert(){
// passes the i variable from the loop to the addInfo function
// ${} same as concatenation for string + array/variables 
          alert(`Accusation ${i}: I accuse ${friendsArray[i % friendsArray.length]} with the ${weaponsArray[i % weaponsArray.length]} in the ${locationArray[i % locationArray.length]}`)
        }
        return makeAlert
    }
    var container = document.createElement("div");
    container.id = "container";
    document.body.appendChild(container);
    //loop through friendsArray 20 times with the weapons and 
    for (i = 1; i < 100; i++) {
        var h3 = document.createElement("h3");
        var text = document.createTextNode(`Accusation ${i}`);
        h3.append(text);
        container.appendChild(h3);
        h3.addEventListener("click", addInfo(i));
        console.log(friendsArray[i % friendsArray.length])
  }
});

//back tics is temperal literal and combines strings and variable. to be used a lot
