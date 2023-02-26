 module.exports = function check(str, bracketsConfig) {
for (let j = 0; j < bracketsConfig.length; j++) {
    const openBracket = bracketsConfig[j][0];
    console.log('openbracket, j',openBracket,j);
    const closeBracket = bracketsConfig[j][1];
    console.log('closeBracket, j',closeBracket,j);
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        console.log('current, i', currentSymbol,i);

        switch (currentSymbol) {

            case openBracket: {
                if (openBracket===closeBracket && stack.length!==0){
                    stack.pop();
                    console.log('brackets are equal, pop happened')
                    console.log('stack',stack);
                    break;
                }
                else {
                    stack.push(currentSymbol);
                    console.log('push currentsymbol',currentSymbol)
                     break;
                }}
            case closeBracket: {
                if (stack.length !== 0) {
                    let top_element = stack[stack.length - 1];
                    stack.pop();
                    console.log('pop произошел');
                    console.log('stack',stack);
                     break;
                } else {
                    console.log('случилось это')
                    return false;
                }
            }
            default:
                console.log('или это')
                continue;
        }

    }
    if(stack.length===0) {
        console.log('или вот это')
        continue;
    }
    else {console.log('а может вот это');return false}
}
return true;
}











