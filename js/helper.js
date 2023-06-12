export const tableAndOptionFilling = (obj) => {
  for (const i in obj.Valute) {
    const valute = obj.Valute[i];

    const haveSelect = document.getElementById('have-currency');
    const getSelect = document.getElementById('get-currency');

    const haveOption = document.createElement('option');
    const getOption = document.createElement('option');

    const optionRub = document.getElementById('rub');

    const mediaQuery = window.matchMedia('(max-width: 500px)');

    if (mediaQuery.matches) {
      haveOption.textContent += valute.CharCode;
      getOption.textContent += valute.CharCode;
      optionRub.textContent = 'RUB';
    } else {
      haveOption.textContent += valute.Name + ' ' + valute.CharCode;
      getOption.textContent += valute.Name + ' ' + valute.CharCode;
    }


    haveOption.value = valute.CharCode;
    getOption.value = valute.CharCode;

    haveSelect.append(haveOption);
    getSelect.append(getOption);

    // ------------------------------------------------ Table
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    listItem.classList.add('table__item-wrapp');
    listItem.dataset.code = valute.CharCode;

    const tableDubleList = document.createElement('ul');
    tableDubleList.classList.add('now__table-body', 'table-min', 'min');

    const tableDubleListItemOne = document.createElement('li');
    tableDubleListItemOne.classList.add('table__body-item', 'min');

    const tableDubleListItemCode = document.createElement('span');
    tableDubleListItemCode.classList.add('table__title');
    tableDubleListItemCode.textContent = 'Код';

    const tableDubleListItemTwo = document.createElement('li');
    tableDubleListItemTwo.classList.add('table__body-item', 'min');

    const tableDubleListItemNominal = document.createElement('span');
    tableDubleListItemNominal.classList.add('table__title');
    tableDubleListItemNominal.textContent = 'Единица';

    const tableDubleListItemThree = document.createElement('li');
    tableDubleListItemThree.classList.add('table__body-item', 'min');

    const tableDubleListItemValute = document.createElement('span');
    tableDubleListItemValute.classList.add('table__title');
    tableDubleListItemValute.textContent = 'Валюта';

    const tableDubleListItemFour = document.createElement('li');
    tableDubleListItemFour.classList.add('table__body-item', 'min');

    const tableDubleListItemValue = document.createElement('span');
    tableDubleListItemValue.classList.add('table__title');
    tableDubleListItemValue.textContent = 'Курс базовой валюты';

    tableDubleListItemFour.append(tableDubleListItemValue)
    tableDubleListItemThree.append(tableDubleListItemValute)
    tableDubleListItemTwo.append(tableDubleListItemNominal)
    tableDubleListItemOne.append(tableDubleListItemCode)
    tableDubleList.append(tableDubleListItemFour, tableDubleListItemThree, tableDubleListItemTwo, tableDubleListItemOne);

    const tableList = document.createElement('ul');
    tableList.classList.add('now__table-body-info');
    // ------------------------------------------------ Table
    // ------------------------------------------------ CharCode
    const tableListItemOne = document.createElement('li');
    tableListItemOne.classList.add('now__body-item-info');

    const tableListItemImages = document.createElement('img');
    tableListItemImages.classList.add('table__img');
    tableListItemImages.srcset = `img/flag/${valute.CharCode}.jpg`;

    const tableListItemCharCode = document.createElement('span');
    tableListItemCharCode.classList.add('table__info', 'table__title-char-code');
    tableListItemCharCode.textContent = valute.CharCode;
    // ------------------------------------------------ CharCode
    // ------------------------------------------------ Nominal
    const tableListItemTwo = document.createElement('li');
    tableListItemTwo.classList.add('now__body-item-info');

    const tableListItemNominal = document.createElement('span');
    tableListItemNominal.classList.add('table__info');
    tableListItemNominal.textContent = valute.Nominal;
    // ------------------------------------------------ Nominal
    // ------------------------------------------------ Name
    const tableListItemThree = document.createElement('li');
    tableListItemThree.classList.add('now__body-item-info', 'big-item');

    const tableListItemName = document.createElement('span');
    tableListItemName.classList.add('table__info', 'table__info-big');
    tableListItemName.textContent = valute.Name;
    // ------------------------------------------------ Name
    // ------------------------------------------------ Value
    const tableListItemFour = document.createElement('li');
    tableListItemFour.classList.add('now__body-item-info', 'big-item');

    const tableListItemCourse = document.createElement('span');
    tableListItemCourse.classList.add('table__info', 'table__info-value');
    tableListItemCourse.textContent = valute.Value;
    // ------------------------------------------------ Value

    tableListItemFour.append(tableListItemCourse);
    tableListItemThree.append(tableListItemName);
    tableListItemTwo.append(tableListItemNominal);
    tableListItemOne.append(tableListItemImages, tableListItemCharCode);
    tableList.append(tableListItemOne, tableListItemTwo, tableListItemThree, tableListItemFour);
    listItem.append(tableDubleList, tableList);
    list.append(listItem);

  }
};

export const convertorValue = (resultInput, haveSelect, haveInput, obj, getSelect) => {
  if (haveSelect.value === 'RUB') {
    resultInput.value = (haveInput.value * 1 / obj.Valute[getSelect.value].Value).toFixed(2);
  } else {
    const haveCourse = obj.Valute[haveSelect.value].Value
    resultInput.value = (haveInput.value * haveCourse / obj.Valute[getSelect.value].Value).toFixed(2);
  }
};