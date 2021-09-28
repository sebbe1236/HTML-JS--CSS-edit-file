const query = document.querySelector(".query-content");

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

const urls = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts/" + id;

console.log(id);

async function idFetch() {
  try {
    const response = await fetch(urls);
    const details = await response.json();
    return details;
  } catch (error) {
    console.log("jajajja");
  }
}

function productFetch(details) {
  //console.log(details);
  console.log(details);
  query.innerHTML += `<div>
  
    <div></diV>
    <p>${details.content.rendered}</p>  
    </div>
    `;
}

idFetch().then((content) => {
  productFetch(content);
});
