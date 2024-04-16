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
        });

        const wishesTextArea = newForm.querySelector('.wishes');

        wishesTextArea.addEventListener('input', function() {
            const textWishes = newForm.querySelector('.text-wishes');
            textWishes.innerText = wishesTextArea.value;
        });

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
        countP.textContent = `Вы заказали ${formsCount} ${pluralizeDrinks(formsCount)}`;
        modalContent.appendChild(countP);
        const fieldsets = document.querySelectorAll('.beverage');
        const table = document.createElement('table');
        const head = document.createElement('tr');
        const drink = document.createElement('th');
        drink.textContent = 'Напиток';
        head.appendChild(drink);
        const milk = document.createElement('th');
        milk.textContent = 'Молоко';
        head.appendChild(milk);
        const misc = document.createElement('th');
        misc.textContent = 'Дополнительно';
        head.appendChild(misc);
        table.appendChild(head);
        fieldsets.forEach(fieldset => {
            const selectedBeverage = fieldset.querySelector('select').value;
            const selectedMilk = fieldset.querySelector('input[name="milk"]:checked').value;
            const selectedOptions = Array.from(fieldset.querySelectorAll('input[name="options"]:checked'))
                .map(option => option.nextElementSibling.innerText)
                .join(', ');
            const body = document.createElement('tr');
            const drink1 = document.createElement('td');
            drink1.textContent = selectedBeverage;
            body.appendChild(drink1);
            const milk1 = document.createElement('td');
            milk1.textContent = selectedMilk;
            body.appendChild(milk1);
            const misc1 = document.createElement('td');
            misc1.textContent = selectedOptions;
            body.appendChild(misc1);
            table.appendChild(body);
        })
        modalContent.appendChild(table);
        modal.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        modalContent.removeChild(modalContent.lastChild);
        modalContent.removeChild(modalContent.lastChild);
        modal.classList.remove('active');
    });



});



