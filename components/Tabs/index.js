// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

function tabs(arrItem) {
    const topic = document.createElement('div');
    topic.classList.add('tab');
    topic.textContent - `${arrItem}`

    return topic;

}

const insert = document.querySelector('.topics');
console.log(insert);
 
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then((response) => {
        console.log(response)
        response.data.topics.forEach((arrItem) => {
            const newTab = tabs(arrItem);
            insert.appendChild(newTab);
        })
    })
    

    .catch((err) => {
        console.log('No data - error', err);
            
    });

const topicTab = document.querySelector('.tab');
topicTab.appendChild(tabs());
