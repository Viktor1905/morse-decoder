const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(str) {
    let arr = str.split("**********");
    let  words = arr.map(function (item,){
        return (item.match(/\d{10}/gi))
        let code = item[item.indexOf(1)]+item[item.indexOf(1)]
        return code
    })

    let morse = words.map(function (word,){
        let letters = word.map(function (letter,){
            let morseLetter = letter.match(/1[0,1]/gi);
            morseLetter = morseLetter.join("")
            switch (+morseLetter){
                case (1011):
                    morseLetter = "a"
                    break;
                case (11101010):
                    morseLetter = "b";
                    break;
                case (11101110):
                    morseLetter = "c"
                    break;
                case (111010):
                    morseLetter = "d";
                    break;
                case (10):
                    morseLetter = "e"
                    break;
                case (10101110):
                    morseLetter = "f";
                    break;
                case (111110):
                    morseLetter = "g"
                    break;
                case (10101010):
                    morseLetter = "h";
                    break;
                case (1010):
                    morseLetter = "i"
                    break;
                case (10111111):
                    morseLetter = "j";
                    break;
                case (111011):
                    morseLetter = "k"
                    break;
                case (10111010):
                    morseLetter = "l";
                    break;
                case (1111):
                    morseLetter = "m"
                    break;
                case (1110):
                    morseLetter = "n";
                    break;
                case (111111):
                    morseLetter = "o"
                    break;
                case (10111110):
                    morseLetter = "p";
                    break;
                case (11111011):
                    morseLetter = "q"
                    break;
                case (101110):
                    morseLetter = "r";
                    break;
                case (101010):
                    morseLetter = "s"
                    break;
                case (11):
                    morseLetter = "t";
                    break;
                case (101011):
                    morseLetter = "u"
                    break;
                case (10101011):
                    morseLetter = "v";
                    break;
                case (101111):
                    morseLetter = "w"
                    break;
                case (11101011):
                    morseLetter =  "x";
                    break;
                case (11101111):
                    morseLetter = "y"
                    break;
                case (11111010):
                    morseLetter = "z";
                    break;
                case (1011111111):
                    morseLetter = "1";
                    break;
                case (1010111111):
                    morseLetter = "2";
                    break;
                case (1010101111):
                    morseLetter = "3";
                    break;
                case (1010101011):
                    morseLetter = "4";
                    break;
                case (1010101010):
                    morseLetter = "5";
                    break;
                case (1110101010):
                    morseLetter = "6";
                    break;
                case (1111101010):
                    morseLetter = "7";
                    break;
                case (1111111010):
                    morseLetter = "8";
                    break;
                case (1111111110):
                    morseLetter = "9";
                    break;
                case (1111111111):
                    morseLetter = "0";
                    break;

            }
            return morseLetter
        })
        return(letters.join(""))
    })

    return(morse.join(" "))
}

module.exports = {
    decode
}