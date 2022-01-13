let images = document.querySelectorAll(".container img");
let windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var counter = 0;
var resetter = 0;

if(images) {
  images.forEach(function(image) {
    let imgName = image.alt;
    image.setAttribute("id", counter);

    if (imgHigh < imgWide) {
      image.setAttribute("style", "height: 17.5vw");
    } else {
      image.setAttribute("style", "width: 23.5vw");
    }

    image.onclick = function() {
      let imgUrl = image.src;
      let imgId = image.id;

      let container = document.body;
      let imageWindow = document.createElement("div");
      container.appendChild(imageWindow);

      imageWindow.setAttribute("class", "img-popup");
      imageWindow.setAttribute("onclick", "closePopup()");


      let imagePopup = document.createElement("img");
      imageWindow.appendChild(imagePopup);

      imagePopup.setAttribute("src", imgUrl);

      imagePopup.onload = function() {
        let imageLabel = document.createElement("p");
        imageLabel.setAttribute("class", "label");
        imageLabel.innerHTML = imgName;
        imageWindow.appendChild(imageLabel);
        imageLabel.setAttribute("style", "top: " + (((windowHeight - imagePopup.height) / 4) - 10) + "px; margin-top: 1vh;" );

        let nextBut = document.createElement("a");
        imageWindow.appendChild(nextBut);
        nextBut.setAttribute("class", "next-btn");
        nextBut.setAttribute("onclick", "changeImg(this)");
      }
    }
    image.onload = function() {
      imgHigh = image.height;
      imgWide = image.width;
      if (imgHigh < imgWide) {
        image.setAttribute("style", "height: 17.5vw");
      } else {
        image.setAttribute("style", "width: 23.5vw");
      }
    }
    counter += 1;
  });
}

function closePopup() {
  document.querySelector(".img-popup").remove();
}

function changeImg(cmmd) {
  alert(cmmd);
}
