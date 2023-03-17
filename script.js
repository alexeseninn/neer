
let PvButton = document.getElementById('PvButton');

PvButton.onclick = () => {
    // let mydata = JSON.parse(questions);
    // alert(mydata[1]);
    var url = './questions.json';
    fetch(url)
    .then(response => response.json())
    .then(json => {
        let arr = json;
    });
}

