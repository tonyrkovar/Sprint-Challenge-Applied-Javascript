// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const titleParent = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        // console.log(res);
        res.data.topics.forEach( (title) => {
           const titleCard = document.createElement('tab');
            titleCard.classList.add('tab')
            titleParent.appendChild(titleCard);
            titleCard.textContent = `${title}`

            titleCard.addEventListener( 'click', e => {
                titleCard.classList.toggle('active-tab')
            })

            return titleCard;
        })
    })

    