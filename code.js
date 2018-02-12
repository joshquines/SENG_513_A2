/*
SENG 513
A2
Marco Quines
10138118
*/

function getStats(text) {
    let txt = text.toLowerCase();
    // NCHARS
    function getChars(txt){
        let nChars = txt.length;
        console.log(nChars);
        return nChars;
    }

    // NWORDS 
    // Split by non alphanumeric
    function numWords(txt){
        let splitWords = txt.split(/[^A-Za-z0-9]/);
        let nWords = 0;
        for(let i = 0; i < splitWords.length; i++){
            if (splitWords[i] != ""){
                nWords++;
            }
        }
        return nWords;
    }

    // NLINES
    // Split by newline
    function numLines(txt){
        let splitLines = txt.split("\n");
        let nLines = splitLines.length;
        return nLines;
    }

    // NONEMPTYLINES
    // iterate split lines
    function nonEmptyLines(txt){
        let nNonEmptyLines = 0;
        let splitLines = txt.split("\n");
        let x = "";
        for (let i = 0; i < splitLines.length; i++){
            x = splitLines[i];
            if ((x != " " || x != "\n" || x != "\t" || x != "")){
                nNonEmptyLines++;
            }
        }
        return nNonEmptyLines;
    }

    // AVERAGE WORD LENGTH 
    function aveWordLength(txt){
        let averageWordLength = 0;
        let totalCount = 0;
        let wordCounter = 0;
        let splitWords = txt.split(/[^A-Za-z0-9]/);
        for(let i = 0; i < splitWords.length; i++){
            if (splitWords[i] != ""){
                totalCount = totalCount + splitWords[i].length;
                wordCounter++;             
            }
        }
        averageWordLength = totalCount/parseFloat(wordCounter);
        return averageWordLength;
    }

    // LONGEST WORD LENGTH
    // Store words array of objects
    function longestWord(txt){
        let wordObj = [];
        let splitWords = txt.split(/[^A-Za-z0-9]/);
        for(let i = 0; i < splitWords.length; i++){
            if (splitWords[i] != ""){
                wordObj.push({
                    word: splitWords[i],
                    wordLength: splitWords[i].length
                })
            }
        }

        // Sort from largest to smallest
        wordObj.sort(function(a,b){
            return b.wordLength - a.wordLength;
        })

        // Get 10 words
        // Get key 'word' and push it into array
        // Slice the array so it returns max 10
        let wordsArray = [];
            wordObj.map(function(i){
            wordsArray.push(i.word);
            return i.word;
            });
        wordsArray = wordsArray.splice(0,10);
        return wordsArray;
    }

    // PALINDROME
    function isPalindrome(txt){
        let splitWords = txt.split(/[^A-Za-z0-9]/);
        let reverseCheck = '';
        let palindromeWords = [];
        let palindromCheck = "";
        for (let i = 0; i < splitWords.length; i++){
            if (splitWords[i].length > 2){
                palindromeCheck = splitWords[i];
                reverseCheck = palindromeCheck.split("");
                reverseCheck = reverseCheck.reverse();
                reverseCheck = reverseCheck.join("");
                if (palindromeCheck === reverseCheck){
                    palindromeWords.push(palindromeCheck);
                }
            }
        }
        return palindromeWords;
    }

    // MOST FREQUENT WORD
    function frequentWords(txt){
        let splitWords = txt.split(/[^A-Za-z0-9]/);
        let wordList = [];
        for (let i = 0; i < splitWords.length; i++){
            wordList.push(splitWords[i]);
        }
        // Count word frequency in wordList array
    }

    // MAX LINE LENGTH
    function maxLine(txt){
        let splitLines = txt.split("\n");
        let lineObj = [];
        for (let i = 0; i < splitLines.length; i++){
            lineObj.push({
                line: splitLines[i],
                lineLength: splitLines[i].length
            })
        }

        // Sort from largest to smallest
        lineObj.sort(function(a,b){
            return b.lineLength - a.lineLength;
        })
        // Get 10 lines
        // Get key 'line' and push it into array
        // Slice the array so it returns max 10
        let linesArray = [];
            lineObj.map(function(i){
            linesArray.push(i.lineLength);
            return i.lineLength;
            });
        linesArray = linesArray.splice(0,1);
        maxLineLength = linesArray.join();
        maxLineLength = parseInt(maxLineLength);
        return maxLineLength;
    }
    
    let nChars = getChars(txt);
    let nWords = numWords(txt);
    let nLines = numLines(txt);
    let nNonEmptyLines = nonEmptyLines(txt);
    let averageWordLength = aveWordLength(txt);
    let maxLineLengthz = maxLine(txt);
    let palindromes = isPalindrome(txt);
    let longestWordz = longestWord(txt);
    //let mostFrequenWords = mostFreq

    return {
        nChars: nChars, 
        nWords: nWords,
        nLines: nLines, 
        nNonEmptyLines: nNonEmptyLines, //Check PARSING
        maxLineLength: maxLineLengthz, 
        averageWordLength: averageWordLength, 
        palindromes: palindromes,
        longestWords: longestWordz, 
        mostFrequentWords: "Not implemented"//mostFrequentWords
    };
}
