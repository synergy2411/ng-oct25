const url = "https://jsonplaceholder.typicode.com/posts";

window.onload = function () {
  const btnFetch = document.querySelector("#btnFetch");
  const listContainer = document.querySelector("#listContainer");

  btnFetch.addEventListener("click", async function (event) {
    event.preventDefault();
    try {
      const response = await fetch(url);
      const posts = await response.json();
      posts.forEach((post) => {
        const liElement = document.createElement("li");
        liElement.innerHTML = post.title;
        listContainer.appendChild(liElement);
      });
    } catch (err) {
      console.error(err);
    }

    //     fetch(url)
    //       .then((response) => {
    //         console.log("RESPONSE: ", response);
    //         return response.json();
    //       })
    //       .then((data) => {
    //         data.forEach((post) => {
    //           const liElement = document.createElement("li");
    //           liElement.innerHTML = post.title;
    //           listContainer.appendChild(liElement);
    //         });
    //       })
    //       .catch(console.error);
  });
};
