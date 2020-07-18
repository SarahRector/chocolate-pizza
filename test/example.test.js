// IMPORT MODULES under test here:
// import { example } from '../example.js'; 

const test = QUnit.test;

test('testing', (expect) => {
    const expected = true;
    const actual = expected;

    expect.equal(actual, expected);
});
