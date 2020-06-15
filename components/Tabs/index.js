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
    const topicLabel = document.createElement("div");
    topicLabel.classList.add("tab");
    topicLabel.textContent = `${arrItem}`

    // topicLabel.appendChild(topics);

    return topicLabel

}

const entrypoint = document.querySelector(".topics")
console.log(entrypoint);
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")

    .then((response) => {
        console.log(response)
        response.data.topics.forEach((arrItem) => {
            const newTab = tabs(arrItem);
            entrypoint.appendChild(newTab);
        })
    })

    .catch((err) => {
        console.log("error...data not available");
    })

