/**
 * 1. Write a JavaScript function that changes the background color of the body (HTML tag) every 100ms.
2. Please make it so that it brings a random color each time.
 */
function nightclub(){
    let body = document.body;

    let color = `rgb(${Math.floor(Math.random() * (255 - 0) + 0)},${Math.floor(
      Math.random() * (255 - 0) + 0
    )},${Math.floor(Math.random() * (255 - 0) + 0)})`;
    return (body.style.backgroundColor = color);
}

setInterval(() => {
  nightclub();
}, 1000);
