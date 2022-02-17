// Income & Cost Calculation
const calculationButton = document.getElementById('calculation-btn');
calculationButton.addEventListener('click', function() {

        const totalIncome = document.getElementById('total-income').value;
        if (isNaN(totalIncome) == true) {
            alert('Please, input a number!')
        } else if (totalIncome < 0) {
            alert('Please, input a number greater than 0!')
        }
        const foodCost = document.getElementById('food-cost').value;
        if (isNaN(foodCost) == true) {
            alert('Please, input a number!')
        } else if (foodCost < 0) {
            alert('Please, input a number greater than 0!')
        }
        const rentalCost = document.getElementById('rental-cost').value;
        if (isNaN(rentalCost) == true) {
            alert('Please, input a number!')
        } else if (rentalCost < 0) {
            alert('Please, input a number greater than 0!')
        }
        const otherCost = document.getElementById('other-cost').value;
        if (isNaN(otherCost) == true) {
            alert('Please, input a number!')
        } else if (otherCost < 0) {
            alert('Please, input a number greater than 0!')
        }
        const expenses = document.getElementById('expenses');
        const balance = document.getElementById('balance');
        const totalCost = parseFloat(foodCost) + parseFloat(rentalCost) + parseFloat(otherCost);
        expenses.innerText = totalCost;
        if (totalCost > totalIncome) {
            alert('Oh! You have no sufficient balance right now..')
        }
        balance.innerText = parseFloat(totalIncome) - totalCost;
    })
    // Saving calculation
const savingBtn = document.getElementById('saving-btn');
savingBtn.addEventListener('click', function() {
    const balance = document.getElementById('balance');
    const balanceText = parseFloat(balance.innerText);
    const savingInput = document.getElementById('saving-input').value;
    if (isNaN(savingInput) == true) {
        alert('Please, write a number!')
    }
    if (savingInput >= 100) {
        alert('Write a number within 1 - 100')
    }
    const countPercentage = balanceText * savingInput / 100;
    const savingAmount = document.getElementById('saving-balance');
    const gotSavingAmount = savingAmount.innerText = parseFloat(countPercentage);
    const remainingBalalce = document.getElementById('remaining-banance');
    remainingBalalce.innerText = balanceText - gotSavingAmount;


})