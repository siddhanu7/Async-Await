
////////////////////////
//Homework 2
async function city(cityName) {
  // create a variable that goes ahead and fetches the link  (sub value indicated through ${})
  const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
  // create a variable that awaits its conversion to a json file
  const info = await response.json();
  //print out a line that has text and coords
  console.log("\nThe latitude is: " + info.longt + ".\n\nThe longitude is: " + info.latt);
}
//input a city!
city("charlotte");

///////////////////
//Homework 1
//Homework 1
function getRandomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.random());
    }, 5000);
  });
}

async function asyncCall() {
  //console.log('calling');
  const result = await getRandomNumber();
  console.log("Random number is "+result);
  // expected output: "resolved"
}

asyncCall();
