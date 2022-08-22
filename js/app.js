
const allPlayers = [];

function getElementByInputField(IdName) {
    const perPlayersPrice = document.getElementById(IdName);
    const perPlayersPriceString = perPlayersPrice.value;
    const perPlayersPriceInNum = parseFloat(perPlayersPriceString);
    if (IdName == "#per- PlayerPrice") {
        console.log('yes ');
    }
    return perPlayersPriceInNum;
  
}


document.getElementById('cal-btn').addEventListener('click', function () {

    let check = allPlayers.length;
   const perPlayersPriceInNum = getElementByInputField('per-PlayerPrice');

    let list = document.querySelector("#Selected-PlayersList");
    let listLi = list.getElementsByTagName("li");
const listLength = listLi.length;


    const perPlayer = document.getElementById('player-expenses');
    let total = perPlayersPriceInNum *listLength;
    perPlayer.innerText = total;


})



function getPlayerInfo(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    const playerInfo = { playerName: playerName }
  
 
    allPlayers.push(playerInfo);

    let selectedPlayers = allPlayers.length;

    const perPlayersPrice = document.getElementById('per-PlayerPrice');
   
    if (selectedPlayers <6 ) { 
        
        let ol = document.getElementById('Selected-PlayersList');
        let li = document.createElement('li');
        li.innerText = playerName;
        ol.appendChild(li);
    }
   
    else {
      
    }
  
}


   
   
  

