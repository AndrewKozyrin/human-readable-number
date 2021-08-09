module.exports = function toReadable(number) {
    let simpleNumbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',

    }
    let simpleExept = {
        3: 'thirt',
        5: 'fift',
        8: 'eight'
    }
    let dozen = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    let myNumber = number;
    let hundredString = '';
    let numberString = '';
    if (number > 99 && number < 1000) {
        let getHundred = number.toString().slice(0, 1);
        let getDozen = number.toString().slice(1);
        hundredString = `${simpleNumbers[getHundred]} hundred `;
        myNumber = +getDozen;
    }
    if (myNumber > 19 && myNumber < 100) {
        let getNumber = myNumber.toString();
        getNumber.split('');
        numberString = (getNumber[1] !== '0') ? `${hundredString}${dozen[getNumber[0]]} ${simpleNumbers[getNumber[1]]}` : `${hundredString}${dozen[getNumber[0]]}`;
    }
    if (myNumber > 13 && myNumber < 20) {
        let getLastNumber = myNumber % 10;
        numberString = `${hundredString}${simpleNumbers[getLastNumber]}teen`;
    }
    if (myNumber === 13 || myNumber === 15 || myNumber === 18) {
        let getLastNumber = myNumber % 10;
        numberString = `${hundredString}${simpleExept[getLastNumber]}een`;
    }
    if (myNumber !== 0 && myNumber < 13) {
        numberString = `${hundredString}${simpleNumbers[myNumber]}`;
    }
    if (myNumber === 0){
        numberString = hundredString.trim();
    }
    if (number === 0){
        numberString = simpleNumbers[number];
    }
    return numberString;
}
