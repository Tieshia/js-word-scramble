let greeting = "Hello!";
console.log(greeting);


let phrase = 'Howdie';
let phrase_chars = phrase.split('');

phrase_chars.join('');


let wordList = ['cat', 'dog', 'cow', 'pig'];
let randomIndex = Math.floor(Math.random()*(wordList.length));

let randomItem = wordList[randomIndex];

console.log(randomItem);


function swapList(wordList){
	let i = 1;
	let randomIndexList = [];
	while(i<3){
        let randomIndex = Math.floor(Math.random()*(wordList.length));
        randomIndexList.push(randomIndex);
        i++;
	}
	console.log(randomIndexList.swap());

