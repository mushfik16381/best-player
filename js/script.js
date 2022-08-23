const playerArray = [];
function diplayPlayer(player){

    if(player.length > 5){
        alert('You can select only 5 players');
        return ;   
    }

    const listBody = document.getElementById('list-body');
    listBody.innerHTML ="";

    for(let i = 0; i < player.length ; i++){
        
        const name = playerArray[i].Name;
        const li =document.createElement('li');
        
        li.innerHTML = `
        ${name}
        `
        listBody.appendChild(li)  
    }
}
function selected(element){

    const playerName = element.parentNode.children[0].innerText;

    const playerObj ={
        Name : playerName,
    }
        
    playerArray.push(playerObj);
    diplayPlayer(playerArray);   
}