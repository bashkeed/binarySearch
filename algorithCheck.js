

const algo_Check = check=>{

    //variable declaration for the 3 counters
     const sentence_length = check.length;
     console.log(`lengh of characters: ${sentence_length}`)

     const regex = /\s+/gi;
     const word_length = check.trim().replace(regex,' ').split(' ').length;
     console.log(`words in sentence: ${word_length}`)
     
     
     const vowelRegex = /[aeiou]/gi;
     const strMatch = check.match(vowelRegex)

    if(strMatch){
        return strMatch.length
    }else{
        return 0
    }

}

const str = 'hello world. nigeria';
const len = algo_Check(str)
console.log(`number of vowels in sentence: ${len}`)