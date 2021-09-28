const Url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed&per_page=18";
const blogPost = document.querySelector(".blogpost-content");
let moreContentbutton = document.querySelector("#more-contentbtn");

moreContentbutton.onclick = loadMore;

function loadMore() {
  console.log("test");
  const iterations = lastIndexLoaded + numberOfImagesToLoadNext + 1;
  for (let i = lastIndexLoaded + 1; i < iterations; i++) {
    console.log("i: ", i);
    console.log("lastIndexLoaded: ", lastIndexLoaded);
    console.log("numberofiagesnextt: ", numberOfImagesToLoadNext);

    blogPost.innerHTML += `
    <a href="singleblog.html?id=${result[i].id}">
    <div> 
          <img src="${result[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "${result[i].title.rendered}">
          <h4>${result[i].title.rendered}</h4>
          </div>
          `;

    lastIndexLoaded++;
  }
  if (lastIndexLoaded >= numberOfImages - 1) {
    moreContentbutton.style.display = "none";
  }
}

async function blogsApifetch() {
  try {
    const response = await fetch(Url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Fail");
  }
}

function blogContent(res) {
  blogPost.innerHTML = "";
  for (let i = 0; i < numberOfImagesToLoadInitially; i++) {
    blogPost.innerHTML += `
    <a href="singleblog.html?id=${res[i].id}">
    <div> 
          <img src="${res[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "${res[i].title.rendered}">
          <h4>${res[i].title.rendered}</h4>
          </div>
          `;
  }
}

const numberOfImagesToLoadInitially = 9;
const numberOfImagesToLoadNext = 3;
let result;
let numberOfImages;

blogsApifetch().then((res) => {
  blogContent(res);
  result = res;
  numberOfImages = res.length;
});

let lastIndexLoaded = 8;
