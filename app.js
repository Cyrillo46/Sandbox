fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    const postArr = data.slice(0, 5);
    let html = "";
    postArr.map((post) => {
      html += `
            <div class="list-item">
          <h2>${post.title}</h2>
          <p>${post.body}</p>
          </div>
          `;
      console.log(html);
    });
    document.getElementsByClassName("blog-list")[0].innerHTML = html;
    // Here's why I used bracket notation (https://stackoverflow.com/questions/10845109/innerhtml-not-working-with-classname-in-js) explanation in the endpoint
  });
