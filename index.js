const cells = document.querySelectorAll('.cell');
const handleClick = (e) => {
  console.log(e.target.dataset.index);
}
cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});



