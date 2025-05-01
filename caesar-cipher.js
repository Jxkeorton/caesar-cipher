
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function cipher (text, key) {

    let cipheredLettersArray = [];

    for(let i = 0; i < text.length; i++){
        const character = text[i].toUpperCase();
        
        if(character === " "){
            cipheredLettersArray.push(" ")
        }

        for(let x=0; x < alphabet.length; x++ ){
            if(alphabet[x] === character){
                const length = alphabet.length
                const new_index = (key + x) % length

                const cipheredletter = alphabet[new_index]

                cipheredLettersArray.push(cipheredletter);
            }
        }
    }

    const cipherText = cipheredLettersArray.join("")

    return cipherText;
}

const text = cipher('hello world', 4);
console.log(text);

