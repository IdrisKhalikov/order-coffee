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
    let drinkCount = 1;
    let formsCount = 1;

    addButton.addEventListener('click', function() {
        drinkCount++;
        const newForm = document.querySelector('form').cloneNode(true);
        newForm.querySelector('.beverage-count').textContent = `Напиток №${drinkCount}`;
        newForm.querySelector('.deleteForm').addEventListener('click', () => {
            formsCount--;
            newForm.remove()
        })
        const forms = document.querySelectorAll('form');
        forms[formsCount-1].after(newForm);
        formsCount++;
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



