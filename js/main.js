const modifiers = {
  featureItemActive: 'feature__item--active',
  accordionItemOpen: 'accordion__item--open'
}


const elsTabsItem = document.querySelectorAll('.feature__item');
const elsTabLink = document.querySelectorAll('.js-feature-link');
const elsTabBox = document.querySelectorAll('.feature__box');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionTogler = document.querySelectorAll('.js-accordion-button');

function deactivateTabItems() {
  elsTabsItem.forEach(function (elTabItem) {
    elTabItem.classList.remove(modifiers.featureItemActive);
  });
};

function deactivateTabBox() {
  elsTabBox.forEach(function (elTabBox) {
    elTabBox.classList.remove('feature__box-active');
  });
};

function closeAccordionItem() {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
};

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
    elTabLink.parentElement.classList.add(modifiers.featureItemActive);
  })
});

elsAccordionTogler.forEach(function (elAccordionTogler) {
  elAccordionTogler.addEventListener('click', function () {
    // console.log('test');

    closeAccordionItem();

    elAccordionTogler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
  })
});
