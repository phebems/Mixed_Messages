/* Every time a user runs a program, they should get a new, randomized output. 
Random lyrics. 

*/
let message;

let musicNote = ` ♪ `;

const openers = ['You can', 'A wise woman once said', 'Everybody knows']

const lyrics = {

    'You can': ["find me where the wild things are", "love me or hate me, I swear it won't make or break me", "be the king but watch the queen conquer", "believe in your flyness, conquer your shyness"],
    'A wise woman once said': ["I'm throwin' shade like it's sunny", "diamonds on me, what's the price? I'm not gettin' involved with the hype", "either you play the game or watch the game play you", "yeah, I'm in my bag, but I'm in his too.\nAnd that's why every time you see me, I got some new shoes", "they say good things come to those who wait, so imma be at least an hour late"],
    'Everybody knows': ["the night is still young and so are we", "it ain’t no fun if the homies can’t have none", "we ain’t picture perfect but we worth the picture still", "this is our house. this is our rules", "if you're a strong female, you don't need permission"]

}
// Takes in array of openers and outputs random opening quote from array
function getRandomOpener(arr) {
    
    return arr[getRandomNum(arr.length - 1)];

}

// Gets random num from 0 -> len - 1
function getRandomNum(len) {
    return Math.round(Math.random() * len) 
    
}

// Generates message using object properties

function getMessage() {

    let opener = getRandomOpener(openers)

    let randIndex = getRandomNum(lyrics[opener].length - 1);

    for (const property in lyrics) {
        
        if (opener === property) {

            message =  opener + musicNote + lyrics[opener][randIndex] + musicNote;

        }
        
    }
    return console.log(message);

/*Alternate method
    switch(opener) {
        case 'You can':
            message = opener + ' ' + lyrics[opener][randIndex];
            return message;
            
        case 'A wise woman once said':
            message = opener + ' ' + lyrics[opener][randIndex];
            return message;

        case 'Everybody knows':
            message = opener + ' ' + lyrics[opener][randIndex];
            return message;

        default:
            return console.log('Insufficient messages')
    } 
    */
}

getMessage()
