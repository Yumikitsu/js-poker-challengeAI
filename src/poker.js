function cardValue(card) {
  const values = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }
  return values[card]
}

function winningPair(pair1, pair2) {
  const pair1Value =
    cardValue(pair1[0]) === cardValue(pair1[1]) ? cardValue(pair1[0]) : 0
  const pair2Value =
    cardValue(pair2[0]) === cardValue(pair2[1]) ? cardValue(pair2[0]) : 0

  if (pair1Value > pair2Value) {
    return pair1
  } else if (pair2Value > pair1Value) {
    return pair2
  } else {
    return []
  }
}

function winningPairFromArray(pairs) {
  let currentWinningPair = []

  for (const pair of pairs) {
    currentWinningPair =
      currentWinningPair.length === 0
        ? pair
        : winningPair(currentWinningPair, pair)
  }

  return currentWinningPair
}

function winning3CardHand(hands) {
  let currentWinningHand = []

  for (const hand of hands) {
    if (hand.length === 2) {
      currentWinningHand =
        currentWinningHand.length === 0
          ? hand
          : winningPair(currentWinningHand, hand)
    } else if (hand.length === 3) {
      const handValue =
        cardValue(hand[0]) === cardValue(hand[1]) &&
        cardValue(hand[1]) === cardValue(hand[2])
          ? cardValue(hand[0])
          : 0
      const currentWinningHandValue =
        currentWinningHand.length === 3 ? cardValue(currentWinningHand[0]) : 0

      if (handValue > currentWinningHandValue) {
        currentWinningHand = hand
      }
    }
  }

  return currentWinningHand
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
