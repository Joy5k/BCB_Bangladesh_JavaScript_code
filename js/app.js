
const allPlayers= [];
// function playerList(names) {
//     for (let i = 1; i <names.length; i++){
//         const index = i;
//         const element = names[index];
//         let setInOl = document.getElementById('Selected-PlayersList');
//         let li = document.createElement('li');
//         setInOl.appendChild(li);

//         // console.log(element);
//     }
// }

function getPlayerInfo(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
     
    const playerInfo = { playerName:playerName  }
    allPlayers.push(playerInfo);

    const selectedPlayers = allPlayers.length;
    if (selectedPlayers >= 6) {
        return;
    }
    let ol = document.getElementById('Selected-PlayersList');

        let li = document.createElement('li');
        li.innerText = playerName;
     ol.appendChild(li);
    // playerList(allPlayers);
}

