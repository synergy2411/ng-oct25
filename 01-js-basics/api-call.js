const url = "https://jsonplaceholder.typicode.com/posts";

window.onload = function () {
  const btnFetch = document.querySelector("#btnFetch");
  const listContainer = document.querySelector("#listContainer");

  btnFetch.addEventListener("click", function (event) {
    event.preventDefault();
    fetch(url)
      .then((response) => {
        console.log("RESPONSE: ", response);
        return response.json();
      })
      .then((data) => {
        data.forEach((post) => {
          const liElement = document.createElement("li");
          liElement.innerHTML = post.title;
          listContainer.appendChild(liElement);
        });
      })
      .catch(console.error);
  });
};
