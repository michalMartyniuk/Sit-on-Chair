document.addEventListener("DOMContentLoaded", function(e) {
  const select = element => document.querySelector(element);
  const selectAll = elements => document.querySelectorAll(elements);

  const activate = () =>
    listItems[active].classList.add("carousel__item--active");

  const deactivate = () =>
    listItems[active].classList.remove("carousel__item--active");

  const previous = select(".carousel__left-arrow");
  const next = select(".carousel__right-arrow");
  const listItems = selectAll(".carousel__item");

  let active = 0;
  activate();

  previous.addEventListener("click", function(e) {
    if (active > 0) {
      deactivate();
      active--;
      activate();
    }
  });

  next.addEventListener("click", function(e) {
    if (active < listItems.length - 1) {
      deactivate();
      active++;
      activate();
    }
  });
});
