document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.querySelector('.add-button');
    const form = document.querySelector('form');
    let drinkCount = 1;

    addButton.addEventListener('click', function() {
        drinkCount++;
        const newFieldset = document.querySelector('.beverage').cloneNode(true);
        newFieldset.querySelector('.beverage-count').textContent = `Напиток №${drinkCount}`;
        form.insertBefore(newFieldset, addButton.parentNode);
    });
});