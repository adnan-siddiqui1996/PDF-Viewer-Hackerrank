function designerPdfViewer(word, ...h){
    let numberArr = []
    let current = 0;
    let large = 0;
    for(let i = 0; i < word.length; i++){
        current = word.charCodeAt(i);
        current = current - 97;
        numberArr[i] = h[current];
    }
    for(let i = 0; i < numberArr.length; i++){
        if(numberArr[i] > large){
            large = numberArr[i];
        }
    }
    let result = large * numberArr.length;
    return result;
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let word = "abc";
console.log(designerPdfViewer(word, ...h))