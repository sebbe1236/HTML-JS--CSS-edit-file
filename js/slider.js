const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/posts?_embed&per_page=12";

//const url = "https://exam1api.sebbeprojects.com/wp-json/wp/v2/media";

const slider = document.querySelector(".featured-section");
const clickRight = document.querySelector(".clickright");
const clickLeft = document.querySelector(".clickleft");

async function frontpageApi() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("gikk skeis", error);
  }
}

function frontpageHtml(objects) {
  let newContent = "";
  slider.innerHTML = "";
  for (let i = 0; i < numberOfImagesToShow; i++) {
    const index = (currentIndex + i) % numberOfobjects;

    newContent += `
    
    <a href="singleblog.html?id=${objects[index].id}">
    
    
    <div>
    <img src="${objects[index]._embedded["wp:featuredmedia"]["0"].source_url}" alt= "${objects[index].title.rendered}">
    <h5>
    ${objects[index].title.rendered}
    </h5>
    
    </div>
    
    
    `;
  }
  slider.innerHTML = newContent;
}

function previousSlide() {
  currentIndex = (currentIndex - 1) % numberOfobjects;
  frontpageApi().then((res) => {
    frontpageHtml(res);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numberOfobjects;

  frontpageApi().then((res) => {
    frontpageHtml(res);
  });
}

clickRight.addEventListener("click", nextSlide);
clickLeft.addEventListener("click", previousSlide);
let currentIndex = 0;
const numberOfImagesToShow = 4;
let numberOfobjects = 12;

frontpageApi().then((res) => frontpageHtml(res));
