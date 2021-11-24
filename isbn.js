

const removeHyphens = (isbn) => isbn.split('').map((char) => char === '-' ? '' : char).join('');

const is10digits = (isbn) => isbn.length === 10 ? true : false;

const is13digits = (isbn) => isbn.length === 13 ? true : false;

const productsSumUp = (isbn) => isbn.split('').reduce((acc, char, i, arr) => acc + (Number(char) * (arr.length - i)), 0)

module.exports = { removeHyphens, is10digits, is13digits, productsSumUp };