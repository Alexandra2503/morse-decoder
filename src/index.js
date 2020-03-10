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

function decode(expr) {

    let temp = expr.split(''), arr = [], arr1 = [];
    let str = '', counter = 0, str1 = '', str2 = '';
      for(let i = 0; i < temp.length; i+10){
         if(i%10==0){
              str = temp.splice(0,10);
              arr[counter] = str.join('').toString();
              counter++;
         }
      }
      for(let i = 0; i < arr.length; i++){
        str = arr[i];
        if(arr[i] == '**********') 
          arr[i] = ' ';
        else{
          for(let j = 0; j < str.length; j +=2){
            str1 = str[j];
            str1 += str[j+1];
            if(str1 == "10"){
                str2 += ".";
            }
            if(str1 == "11"){
                str2 += "-";
            }
          } 
          arr[i] = str2;
          str2 = '';
        }
      }
      for(let i = 0; i < arr.length; i++){
        for(let str in MORSE_TABLE){
          if(str==arr[i])
          {
            arr[i] = MORSE_TABLE[str];
            break;
          } 
        }
      }
      return arr.join('').toString();
}

module.exports = {
    decode
}