
const allPlayers = [];

document.getElementById('cal-btn').addEventListener('click', function () {
    // const inputTaka = getElementByInputField('per-PlayerPrice');
    let check = allPlayers.length;
    console.log(check);
    
    // const perPlayersPriceTaka = parseInt(perPlayerString);

    const perPlayer = document.getElementById('player-expenses');
    const perPlayersPrice = document.getElementById('per-PlayerPrice');
    const perPlayersPriceString = perPlayersPrice.value;
    const perPlayersPriceInNum = parseFloat(perPlayersPriceString);
    let total = perPlayersPriceInNum *10;
    perPlayer.innerText = total;
//     const perPlayerString = perPlayer.innerText;
// perPlayer.innerText = total;
    console.log('its total=',total);


})


function getElementByInputField(IdName) {
    const inputValue = document.getElementById(IdName);
    const inputValueInString = inputValue.value;
    const inputNumber = parseFloat(inputValueInString);
    
    
    return inputNumber;
  
}

function getPlayerInfo(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    // const playerNameString = playerName.innerText;
    // const playerNameconvert = parseInt(playerNameString);

    // const perPlayer = document.getElementById('player-expenses');
    const playerInfo = { playerName: playerName }
  
 
    allPlayers.push(playerInfo);

    let selectedPlayers = allPlayers.length;
   
   
       
    const perPlayersPrice = document.getElementById('per-PlayerPrice');

    if (selectedPlayers <6 ) { 
        
        let ol = document.getElementById('Selected-PlayersList');
        let li = document.createElement('li');
        li.innerText = playerName;
        ol.appendChild(li);
        let numb = document.getElementById("per-PlayerPrice").childElementCount;
        
        console.log(numb + 1);
    }
   
    else {
      
    }
  
}








 // const selectedPlayers = document.getElementById('Selected-PlayersList').childElementCount;

   
   
  

