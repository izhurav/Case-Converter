document.getElementById("upper-case").addEventListener("click", function(){
    const text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toUpperCase()});

document.getElementById("lower-case").addEventListener("click", function(){
    const text = document.querySelector("textarea").value;
    document.querySelector("textarea").value = text.toLowerCase()});

document.getElementById("proper-case").addEventListener("click", function(){
    const text = document.querySelector("textarea").value;
    const words = text.toLowerCase().split(' ');
    const newWords = [];
    for (let i = 0; i < words.length; i++) {
        /*newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length))}*/ //my first code
        newWords.push(words[i][0].toUpperCase() + words[i].substring(1))} //code from comments
    const result = newWords.join(' ');
    /*console.log(words);
    console.log(newWords);
    console.log(result);*/
    document.querySelector("textarea").value = result;});

document.getElementById("sentence-case").addEventListener("click", function(){
    let text = document.querySelector("textarea").value;
    const words = text.toLowerCase().split('. ');
    for (let i = 0; i < words.length; i++)
        {words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1)}
    text = words.join('. ');
    //console.log(words);
    //console.log(text);
    document.querySelector("textarea").value = text;});
//****************************************************************************
function saveFile(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function() {
     let text = document.querySelector("textarea").value;
     let filename = "text.txt";
     saveFile(filename, text);
}, false);                                                                  
