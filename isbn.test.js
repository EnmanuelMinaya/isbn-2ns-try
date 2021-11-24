
const { removeHyphens, is10digits, is13digits, productsSumUp } = require('./isbn.js');

test('takes 0-7167-0344-0 and returns 0716703440', () => {
    expect(removeHyphens('0-7167-0344-0')).toBe('0716703440');
});

test('takes 0716703440 and returns true', () => {
    expect(is10digits('0716703440')).toBe(true);
});

test('takes 00716703440 and returns true', () => {
    expect(is10digits('00716703440')).toBe(false);
});

test('takes 9780716703440 and returns true', () => {
    expect(is13digits('9780716703440')).toBe(true);
});

test('takes 0716703440 and returns 187', () => {
    expect(productsSumUp('0716703440')).toBe(187);
});