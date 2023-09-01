const elsTabsItem = document.querySelectorAll('.feature__item');
const elsTabLink = document.querySelectorAll('.js-feature-link');
const elsTabBox = document.querySelectorAll('.feature__box');

function deactivateTabItems() {
  elsTabsItem.forEach(function (elTabItem) {
    elTabItem.classList.remove('feature__item--active')
  });
}

function deactivateTabBox() {
  elsTabBox.forEach(function (elTabBox) {
    elTabBox.classList.remove('feature__box-active')
  });
}

elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    //Links have been restored
    evt.preventDefault();

    //Activity has been removed from tab items
    deactivateTabItems();

    //Activity has been removed from tab box
    deactivateTabBox();

    // const activePanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const activePanel = document.querySelector(elTabLink.dataset.tabBox);
    activePanel.classList.add('feature__box-active')

    //Added active class when tab items are active
    elTabLink.parentElement.classList.add('feature__item--active');

    console.log(elTabLink.dataset.tabBox);
  })
})
