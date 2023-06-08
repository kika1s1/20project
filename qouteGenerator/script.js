// get document and it is file
const qouteText = document.getElementById("qoute");
const Author = document.getElementById("author")
// api qoute fetching
let Qoute = []
let oneQoute = []
let qouteAuthor = []

// get one qoute per click
function getQoute() { 
    let qouteNumber = Math.floor(Math.random() * Qoute.length);
    oneQoute = Qoute[qouteNumber].text;
    qouteAuthor = Qoute[qouteNumber].author;

    qouteText.innerHTML = oneQoute;
    Author.innerHTML = qouteAuthor;
    console.log(oneQoute, qouteAuthor)




    console.log(oneQoute);


}
// fetch api qoute
async function getApi(){
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        Qoute = await response.json();
        getQoute();
        // console.log(Qoute)
        
    } catch (error) {
        console.log(error);
    }

}
getApi();