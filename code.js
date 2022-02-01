const makeArr = () => new Array(false, false, false);

const getPosition = () => {
  const random = Math.random();
  if (random < 0.3) {
    return 0;
  } else if (random > 0.7) {
    return 2;
  } else {
    return 1;
  }
}

const newPickIndex = (correctPickIndex, currentChoiceIndex, shouldRepick) => {
  if (shouldRepick) {
    const possiblePicks = [0, 1, 2];
    const exposedWrongChoiceIndex = possiblePicks.filter(x => x !== correctPickIndex && x !== currentChoiceIndex)[0];
    return possiblePicks.filter(x => x !== currentChoiceIndex && x !== exposedWrongChoiceIndex)[0]
  }

  return currentChoiceIndex;
}

const round = (repick) => {
  const choices = makeArr();
  const correctAnswer = getPosition();
  choices[correctAnswer] = true;

  const initialAudiencePick = getPosition();
  const newAudiencePick = newPickIndex(correctAnswer, initialAudiencePick, repick);

  return choices[newAudiencePick]
}

const play = (numberOfRounds, repick) => {
  const results = new Array(numberOfRounds);
  for (let i = 0; i < results.length; i++) {
    results[i] = round(repick);
  }

  const numberOfWins = results.filter(x => x).length / results.length;

  console.log(`number of wins ${numberOfWins}`);
}

const shouldPickNew = true;
play(1000000, shouldPickNew);
