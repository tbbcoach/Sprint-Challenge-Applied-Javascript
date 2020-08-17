// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const header = document.createElement('div');
    const date = document.createElement('span');
    const headLine = document.createElement('h1');
    const temp = document.createElement('span');
    
    date.textContent = 'SMARCH 28, 2019';
    headLine.textContent = ' Lambda Times';
    temp.textContent = '98 degrees';

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    

    container.appendChild(header);
    header.appendChild(date);
    header.appendChild(headLine);
    header.appendChild(temp);

    console.log(container);

    return header;
}

const container = document.querySelector('.header-container');
container.appendChild(Header());
