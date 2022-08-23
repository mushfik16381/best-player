const playerArray = [];
function diplayPlayer(player){

    if(player.length > 5){
        alert('You can select only 5 players');
        return ;   
    }

    const listBody = document.getElementById('list-body');
    listBody.innerHTML ="";
    const playerLength = player.length;

    for(let i = 0; i < playerLength ; i++){
        
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

function getAmountValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    if(isNaN(inputFieldValue)){
        alert('Enter a Valid Number');
        return inputFieldValue;
    }
    return inputFieldValue;
}

document.getElementById('player-calculate').addEventListener('click', function(){
    const playerAmount = getAmountValueById('player-amount');

    const listAll = document.querySelectorAll('#list-body li') ;

    const PlayerExpenses = document.getElementById('total-player-Cost');
    const totalPlayerExpensesString = PlayerExpenses.innerText;
    const totalPlayerExpenses = parseFloat(totalPlayerExpensesString);
    
    const playerCost = playerAmount * listAll.length;

    const totalPlayerCost = totalPlayerExpenses + playerCost;
    PlayerExpenses.innerText = totalPlayerCost;   
})

document.getElementById('calculate-total').addEventListener('click', function(){
    const managerAmount = getAmountValueById('manager-amount');
    const coachAmount = getAmountValueById('coach-amount');
    
    const totalCostValue = document.getElementById('total-cost');
    const newtotalCostValue = totalCostValue.innerText;

    totalCostValue.innerText =newtotalCostValue;

    const PlayerExpenses = document.getElementById('total-player-Cost');
    const totalPlayerExpensesString = PlayerExpenses.innerText;
    const totalPlayerExpenses = parseFloat(totalPlayerExpensesString);

    const totalCost = managerAmount + coachAmount + totalPlayerExpenses;
    totalCostValue.innerText =totalCost;
})