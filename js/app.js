
const allPlayers = [];
//  common function
function getElementByInputField(IdName) {
    const perPlayersPrice = document.getElementById(IdName);
    const perPlayersPriceString = perPlayersPrice.value;
    const perPlayersPriceInNum = parseFloat(perPlayersPriceString);
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
document.getElementById('cal2-btn').addEventListener('click', function () {
    const totalConsumption = document.getElementById('total');
    const managerTaka =getElementByInputField('Manager-tk');
    // console.log(managerTaka);
    const CoachTaka =getElementByInputField('Coach-tk');
    // console.log(CoachTaka);
    const CoachAndManegerTaka = managerTaka + CoachTaka;
    totalConsumption.innerText = CoachAndManegerTaka;
  

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
   
}


   
   
  

