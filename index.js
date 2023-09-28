/* State */

// data of all freelancers
const max_candidates = 3
let cur_list = []
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

const addShapeIntervalId = setInterval(addFreelancer, 2000);
render(); 

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the names
  const names = document.querySelector("#name");
  const namesElements = cur_list.map((freelancer) => {
    const element = document.createElement("li");
    element.innerHTML = freelancer.name
    return element;
  });
  names.replaceChildren(...namesElements);

  // Render the occupations
  const occupations = document.querySelector("#occupation");
  const occupationsElements = cur_list.map((freelancer) => {
    const element = document.createElement("li");
    element.innerHTML = freelancer.occupation
    return element;
  })
  occupations.replaceChildren(...occupationsElements);

   // Render the price
   const prices = document.querySelector("#price");
   const pricesElements = cur_list.map((freelancer) => {
     const element = document.createElement("li");
     element.innerHTML = freelancer.price
     return element;
   })
   prices.replaceChildren(...pricesElements);

   // Render the average price
   const average_price = document.querySelector("#average_price");
   const average_price_data = cur_list.reduce((acc, cur) => {
    return acc += cur.price
   }, 0)
   average_price.innerHTML = Math.floor(average_price_data/cur_list.length)
}

function addFreelancer() {
  if (cur_list.length >= max_candidates - 1) {
    clearInterval(addShapeIntervalId)
  }
  const freelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  cur_list.push(freelancer);
  render();
}

addFreelancer()