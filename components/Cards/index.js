// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardParent = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then( res => {
        res.data.articles.javascript.forEach( e => {
            console.log(res)
            cardParent.appendChild(cardPlaceHolder(e))
        })
        res.data.articles.bootstrap.forEach( e => {
            console.log(res)
            cardParent.appendChild(cardPlaceHolder(e))
        })
        res.data.articles.node.forEach( e => {
            console.log(res)
            cardParent.appendChild(cardPlaceHolder(e))
        })
        res.data.articles.technology.forEach( e => {
            console.log(res)
            cardParent.appendChild(cardPlaceHolder(e))
        })
        res.data.articles.jquery.forEach( e => {
            console.log(res)
            cardParent.appendChild(cardPlaceHolder(e))
        })
    })

    function cardPlaceHolder(arr){
        const
        cardDiv = document.createElement('div'),
        headlineDiv = document.createElement('div'),
        authorDiv = document.createElement('div'),
        imgDiv = document.createElement('div'),
        img = document.createElement('img'),
        authorSpan = document.createElement('span');

        cardDiv.classList.add('card');
        headlineDiv.classList.add('headline');
        authorDiv.classList.add('author');
        imgDiv.classList.add('img-container');
        
        cardDiv.appendChild(headlineDiv);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgDiv);
        authorDiv.appendChild(authorSpan);
        imgDiv.appendChild(img);

        headlineDiv.textContent = `${arr.headline}`
        authorSpan.textContent = `${arr.authorName}`
        img.src = arr.authorPhoto;

        return cardDiv;
    }


    // holderArray.forEach( e => {
    //     cardParent.appendChild(cardPlaceHolder(e))
    // })