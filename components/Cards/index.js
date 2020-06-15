// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


function card(Object) {

    const card =document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const name = document.createElement('span');

    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');

    //add text content here...

    headLine.textContent = `${Object.headline}`;
    author.textContent = `${Object.authorName}`;
    img.src = `${Object.authorPhoto}`;

    card.appendChild(headLine);
    card.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(name);
    imgCont.appendChild(img);

    return card;


}

const entryPoint = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        console.log(response);
        response.data.articles.bootstrap.forEach((Object) => {
            const newCard = card(Object);
            entryPoint.appendChild(newCard);
        });
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        response.data.articles.javascript.forEach((Object) => {
            newCard = card(Object);
            entryPoint.appendChild(newCard);
        });
    })

axios.get('https://lambda-times-backend.herokuapp.com.articles')
    .then((response) => {
        response.data.articles.jquery.forEach((Object) => {
            newCard = card(Object);
            entryPoint.appendChild(newCard);
        });
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        response.data.articles.node.forEach((Object) => {
            newCard = card(Object);
            entryPoint.appendChild(newCard);
        });
    })

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        response.data.articles.technology.forEach((Object) => {
            newCard = card(Object);
            entryPoint.appendChild(newCard);
        });
    })

    .catch((err) => {
        console.log('error...no data available')
    })