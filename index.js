function pluralizeDrinks(count)
{
    const singleDigitRemainder = count % 10;
    const twoDigitRemainder = count % 100;

    if ((singleDigitRemainder === 0 || singleDigitRemainder >= 5)
        || (twoDigitRemainder >= 11 && twoDigitRemainder < 20)) {
        return 'Напитков';
    }
    if (singleDigitRemainder === 1) {
        return 'Напиток';
    }
    return 'Напитка';
}

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
    const modal = document.querySelector('.modal');
    const modalContent = document.querySelector('.modal-content');
    const closeButton = document.querySelector('.close-button');
    const submitButton = document.querySelector('.submit-button');

    submitButton.addEventListener('click', function() {
        const countP = document.createElement('p');
        countP.textContent = `Вы заказали ${drinkCount} ${pluralizeDrinks(drinkCount)}`;
        modalContent.appendChild(countP);
        modal.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        modalContent.removeChild(modalContent.lastChild);
        modal.classList.remove('active');
    });
});



