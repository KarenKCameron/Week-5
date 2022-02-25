// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

document.getElementsByTagName("table")[0].addEventListener("click", function(event){
  const coord = event.target;
  let x = event.pageX;
  let y = event.pageY;
  this.innerHTML = `${x}, ${y}`
});
