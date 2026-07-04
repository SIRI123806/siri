const users = [
  {
    name: "Jane Doe",
    gender: "Female",
    image: "./images/jane.png"
  },
  {
    name: "John Doe",
    gender: "Male",
    image: "./images/john.png"
  }
];

let curUserId = 0;

function toggle() {
  curUserId = curUserId === 0 ? 1 : 0;

  document.getElementById("img").src = users[curUserId].image;
  document.getElementById("card-name").innerText = users[curUserId].name;
  document.getElementById("card-gender").innerText = users[curUserId].gender;
}

function getRandomUser() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      document.getElementById("img").src = user.picture.large;
      document.getElementById("card-name").innerText =
        `${user.name.first} ${user.name.last}`;
      document.getElementById("card-gender").innerText = user.gender;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}