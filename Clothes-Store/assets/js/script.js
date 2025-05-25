// ViewerJS
new Viewer(document.querySelector('.section-2'));
// End ViewerJS

// Data Count
const listDataCount = document.querySelectorAll("[data-count]");
if(listDataCount.length > 0) {
  listDataCount.forEach(dataCount => {
    let number = dataCount.getAttribute("data-count");
    number = parseInt(number);
    let count = 0;
    setInterval(() => {
      count++;
      if(count <= number) {
        dataCount.innerHTML = count;
      }
    }, 5000/number);
  })
}
// End Data Count