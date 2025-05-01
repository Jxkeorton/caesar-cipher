const natural = require('natural');
const wordnet = new natural.WordNet();

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function bruteForce (text) {

    let possibilities = [];

    for (let i = 0; i < alphabet.length; i++){
        let finalword = [];

        for(x = 0; x < text.length; x++){
            const char = text[x].toUpperCase();
            if(alphabet.includes(char)){
                const index = alphabet.indexOf(char);

                const length = alphabet.length
                const new_index = (index + i) % length
            
                const newCHar = alphabet[new_index];
                finalword.push(newCHar);
            } else {
                finalword.push(char);
            };
        }

        const cipherText = finalword.join("")
        possibilities.push(cipherText);
    }

    return possibilities;
};

const options = bruteForce('OKUUKQP UVCTVU');

for(let i=0; i< options.length; i++){
    const index = options.length
    const key = index - i

    const words = options[i].split(" ")

    wordnet.lookup(words[0], function(results) {
        if (results.length > 0) {
            console.log("Ceasar cipher key: " + key + " Word: " + options[i])
        } else {
            return
        }
    });
    
};

