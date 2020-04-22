let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let punctuationType = ""
let punctuationAmount = 0


function addExcitement(theWordArray, punctuationType, punctuationAmount) {
    let buildMeUp = ""
    for (let i = 0; i < theWordArray.length; i++) {
            if( (i+1) % 3 === 0){
                buildMeUp += theWordArray[i]
                for(let x = 0; x < punctuationAmount; x++) {
                    buildMeUp += punctuationType + ""
                }
                buildMeUp += " "
            }
            else{
                buildMeUp += theWordArray[i] + " "
            }
        console.log(buildMeUp)
    }
}

addExcitement(sentence, "!", 3)