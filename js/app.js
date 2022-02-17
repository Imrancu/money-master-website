const calculationButton = document.getElementById('calculation-btn');
calculationButton.addEventListener('click', function() {
    const totalIncome = document.getElementById('total-income').value;
    const foodCost = document.getElementById('food-cost').value;
    const rentalCost = document.getElementById('rental-cost').value;
    const otherCost = document.getElementById('other-cost').value;
    const expenses = document.getElementById('expenses');
    const balance = document.getElementById('balance');
    const totalCost = parseFloat(foodCost) + parseFloat(rentalCost) + parseFloat(otherCost);
    expenses.innerText = totalCost;
    balance.innerText = parseFloat(totalIncome) - totalCost;
})