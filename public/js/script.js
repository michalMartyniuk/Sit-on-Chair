"use strict";

document.addEventListener("DOMContentLoaded", function (e) {
  var select = function select(element) {
    return document.querySelector(element);
  };

  var selectAll = function selectAll(elements) {
    return document.querySelectorAll(elements);
  };

  var activate = function activate() {
    return listItems[active].classList.add("carousel__item--active");
  };

  var deactivate = function deactivate() {
    return listItems[active].classList.remove("carousel__item--active");
  };

  var previous = select(".carousel__left-arrow");
  var next = select(".carousel__right-arrow");
  var listItems = selectAll(".carousel__item");
  var active = 0;
  activate();
  previous.addEventListener("click", function (e) {
    if (active > 0) {
      deactivate();
      active--;
      activate();
    }
  });
  next.addEventListener("click", function (e) {
    if (active < listItems.length - 1) {
      deactivate();
      active++;
      activate();
    }
  });
});