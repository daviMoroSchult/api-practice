const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

async function getAllPosts() {

  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data)

  loadingElement.classList.add("hide");

  data.map(post => {
    const div = document.createElement("div");
    const tile = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    tile.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `post.html?id=${post.id}`);

    div.appendChild(tile);
    div.appendChild(body);
    div.appendChild(link);

    postsContainer.appendChild(div);
  });

}

getAllPosts();