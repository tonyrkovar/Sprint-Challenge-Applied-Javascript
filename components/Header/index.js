// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerParent = document.querySelector('.header-container');

headerParent.appendChild(Header())

function Header() {

    // creating elements
    const
    headContainer = document.createElement('div'),
    dateSpot = document.createElement('span'),
    title = document.createElement('h1'),
    temp = document.createElement('span');

    // setting classes
    headContainer.classList.add('header');
    dateSpot.classList.add('date');
    temp.classList.add('temp');

    // appending
    headContainer.appendChild(dateSpot);
    headContainer.appendChild(title);
    headContainer.appendChild(temp);

    // setting content
    dateSpot.textContent = `SMARCH 28, 2019`;
    title.textContent = `Lambda Times`;
    temp.textContent = `98°`;

    return headContainer;
}





