import { convertorValue, tableAndOptionFilling } from "./helper.js";

const calculateValute = async () => {
  
  const now = document.getElementById('now');
  const tableTitle = document.createElement('h2');
  tableTitle.classList.add('now__title');
  
  const haveInput = document.getElementById('have__input');
  const resultInput = document.getElementById('get__input');

  if (resultInput.value === '') {
    resultInput.setAttribute("disabled", 'disabled');
  }
  
  const haveSelect = document.getElementById('have-currency');
  const getSelect = document.getElementById('get-currency');
  
  const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
  const data = await response.json();
  const results = await data;

  
  const nowDate = results.Date.slice(0, 10).split('-').reverse().join('.');
  tableTitle.textContent = `Курсы валют на ${nowDate}`;
  now.prepend(tableTitle);
  
  haveInput.oninput = () => {
    convertorValue(resultInput, haveSelect, haveInput, results, getSelect);
  }

  haveSelect.oninput = () => {
    convertorValue(resultInput, haveSelect, haveInput, results, getSelect);
  }

  getSelect.oninput = () => {
    convertorValue(resultInput, haveSelect, haveInput, results, getSelect);
  }

  tableAndOptionFilling(results);

};
calculateValute();