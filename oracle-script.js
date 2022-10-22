// @@@ WEB ORACLE @@@

const randomPrediction = () => {

// 1. Creating the arrays where the messages are stored

const personalPronoun = ['You', 'Your mother', 'Your father', 'Your sister', 'Your brother', 'Your grandma', 'Your grandpa', 
'Your son', 'Your daughter', 'Your aunt', 'Your uncle', 'Your neighbour', 'Your dearest teacher'];

const tense = ['will'];

const verb = ['buy a house', 'bury a zombie', 'meet an alien', 'go crazy', 'die', 'drown in a lake', 'grow plants', 'retire to meditate', 'win a huge amount of money',
'be a teacher', 'live', 'fight in a war', 'kill a politician', 'host parties', 'haunt as a ghost', 'levitate', 'lose everything', 'play poker', 'chill', 'be killed by a drone'];

const locator = ['in Argentina', 'in London', 'on a desert island', 'on the Moon', 'in outer space', 'in Hungary', 'in the neighbourhood', 'in the ghetto', 
'in the mountains', 'in a parallel universe', 'in Mongolia', 'in a desert', 'near the River Danube', 'in a forest', 'in Lesotho', 'near a volcano'];

const timer = ['next week', 'next February', 'next year', 'next month', 'tomorrow', 'in 2035', 'in 2028', 'forever', 'in the next decade', 'two minutes later', 'in 2198', 'in a few seconds'];

// 2. Writing the code in JavaScript that displays the random predictions.

// Personal Pronoun:

let personalPronounRandIndex = Math.floor(Math.random() * personalPronoun.length);
let randomPersonalPronoun = personalPronoun[personalPronounRandIndex];

// Tense:

let tenseRandIndex = Math.floor(Math.random() * tense.length);
let randomTense = tense[tenseRandIndex];

// Verb:

let verbRandIndex = Math.floor(Math.random() * verb.length);
let randomVerb = verb[verbRandIndex];

// Locator: 

let locatorRandIndex = Math.floor(Math.random() * locator.length);
let randomLocator = locator[locatorRandIndex];

// Timer:

let timerRandIndex = Math.floor(Math.random() * timer.length);
let randomTimer = timer[timerRandIndex];

const prediction = '"' + randomPersonalPronoun + ' ' + randomTense + ' ' + randomVerb + ' ' + randomLocator + ' ' + randomTimer + '."';
document.getElementById('predictionText').innerHTML = prediction;
return prediction;
};






