import { findGdc } from '../expression.js';

test('NOD(20, 50) = 10', () => {
  const gdcObject = { firstArgument: 20, secondArgument: 50, result: 10 };
  const calculatedGdc = findGdc(gdcObject.firstArgument, gdcObject.secondArgument);
  expect(calculatedGdc).toBe(gdcObject.result);
});

test('NOD(25, 50) = 25', () => {
  const gdcObject = { firstArgument: 25, secondArgument: 50, result: 25 };
  const calculatedGdc = findGdc(gdcObject.firstArgument, gdcObject.secondArgument);
  expect(calculatedGdc).toBe(gdcObject.result);
});

test('NOD(3, 9) = 3', () => {
  const gdcObject = { firstArgument: 3, secondArgument: 9, result: 3 };
  const calculatedGdc = findGdc(gdcObject.firstArgument, gdcObject.secondArgument);
  expect(calculatedGdc).toBe(gdcObject.result);
});

test('NOD(100, 52) = 4', () => {
  const gdcObject = { firstArgument: 100, secondArgument: 52, result: 4 };
  const calculatedGdc = findGdc(gdcObject.firstArgument, gdcObject.secondArgument);
  expect(calculatedGdc).toBe(gdcObject.result);
});
