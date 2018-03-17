import brackets from '../assets/brackets';
const pointsPerRound = [10, 20, 40, 80, 160, 320];

const calculateRound = (pointsEach, winners, selections, num) => {
  let total = 0;
  for (let i = 0; i < num; i++) {
    if (winners[i] && winners[i] === selections[i]) {
      total += pointsEach;
    }
  }
  return total;
};

export const calculatePoints = (bracket) => {
  const winners = brackets[0];
  const round1 = calculateRound(pointsPerRound[0], winners.round1, bracket.round1, 32);
  const round2 = calculateRound(pointsPerRound[1], winners.round2, bracket.round2, 16);
  const elite8 = calculateRound(pointsPerRound[2], winners.round2, bracket.round2, 8);
  const final4 = calculateRound(pointsPerRound[3], winners.round2, bracket.round2, 4);
  const championship = calculateRound(pointsPerRound[4], winners.round2, bracket.round2, 2);
  const winner = calculateRound(pointsPerRound[5], winners.round2, bracket.round2, 1);
  return round1 + round2 + elite8 + final4 + championship + winner;
};
