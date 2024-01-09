// get the content div element
const content = document.getElementById("content");

// create a h1 element to display the activity
const h1 = document.createElement("h1");
h1.textContent = "Random Activity";
content.appendChild(h1);

// create a p element to display the activity details
const p = document.createElement("p");
p.textContent = "Loading...";
content.appendChild(p);

// create a button element to get a new activity
const button = document.createElement("button");
button.textContent = "Suggest another activity";
content.appendChild(button);

// define a function to fetch a random activity from the API
function fetchActivity() {
  // use the fetch method to get the data from the API
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json()) // convert the response to JSON
    .then((data) => {
      // update the p element with the activity data
      p.textContent = `${data.activity} (${data.type})`;
    })
    .catch((error) => {
      // handle any errors
      console.error(error);
      p.textContent = "Something went wrong. Please try again.";
    });
}

// call the fetchActivity function when the page loads
fetchActivity();

// add an event listener to the button to call the fetchActivity function when clicked
button.addEventListener("click", fetchActivity);



  