
const allPlayers = [];

//  common function for input fields
function getElementByInputField(IdName) {
    const perPlayersPrice = document.getElementById(IdName);
    const perPlayersPriceString = perPlayersPrice.value;
    const perPlayersPriceInNum = parseFloat(perPlayersPriceString);
    return perPlayersPriceInNum;
  
}
// common function 2 for innerText
function getElementByIdName(element) {
    const setValue= document.getElementById(element);
    const valueInString = setValue.innerText;
    const convertStringTonNum = parseFloat(valueInString);
    return convertStringTonNum;

}


// first calculate button
document.getElementById('cal-btn').addEventListener('click', function () {

    let check = allPlayers.length;
   const perPlayersPriceInNum = getElementByInputField('per-PlayerPrice');

    let list = document.querySelector("#Selected-PlayersList");
    let listLi = list.getElementsByTagName("li");
    const listLength = listLi.length;

    const totalPlayerCost = document.getElementById('player-expenses');
    let total = perPlayersPriceInNum *listLength;
    totalPlayerCost.innerText = total;
    return totalPlayerCost;

})
// second calculate button

document.getElementById('cal2-btn').addEventListener('click', function () {
    const totalPlayerCosts = document.getElementById('total');
    const totalPlayerCost=getElementByIdName('player-expenses');
    
    const managerTaka =getElementByInputField('Manager-tk');
    const CoachTaka =getElementByInputField('Coach-tk');
    
    let total = managerTaka + CoachTaka;

    const totalCostOfTeam = totalPlayerCost + total;
    totalPlayerCosts.innerText =totalCostOfTeam;

})


function getPlayerInfo(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
   
    const playerInfo = { playerName: playerName }

    allPlayers.push(playerInfo);
    let selectedPlayers = allPlayers.length;

    if (selectedPlayers <6 ) {    
        let ol = document.getElementById('Selected-PlayersList');
        let li = document.createElement('li');
        li.innerText = playerName;
        ol.appendChild(li);
    }
    else {
        alert('You can not select more than 5.')
        return;
    }
    // Button disabled code
    element.style.color = 'DimGray';
    element.style.backgroundColor = 'DarkGray';
    element.innerText = 'selected';
    element.setAttribute('disabled', true);
   
}


   
   
  

