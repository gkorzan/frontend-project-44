import { incorrectRoundNumber } from '../cli.js';

const FALLBACK_ROUND_NUMBER = 5;

export default function validateRoundNumber(requestedNumberOfRounds) {
  if (Number.isInteger(parseInt(requestedNumberOfRounds, 10))
      && requestedNumberOfRounds > 0
      && requestedNumberOfRounds <= 20
  ) return requestedNumberOfRounds;

  incorrectRoundNumber(FALLBACK_ROUND_NUMBER);
  return FALLBACK_ROUND_NUMBER;
}
