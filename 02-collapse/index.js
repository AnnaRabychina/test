const button = document.querySelector('.collapsible__button');
const content = document.querySelector('.collapsible__content');
const visibleActionLabel = document.querySelector('.collapsible__action--visible');
const hiddenActionLabel = document.querySelector('.collapsible__action--hidden');

const changeVisibility = (e) => {
  if (e.target.classList.contains('collapsible__action--visible')) {
    hiddenActionLabel.setAttribute('style', 'display: block');
    visibleActionLabel.setAttribute('style', 'display: none');
    content.animate(
      [
        { transform: 'translateY(0)', opacity: 1 },
        { transform: 'translateY(-100%)', opacity: 0 },
      ], 1000).onfinish = () => {
      content.setAttribute('style', 'display: none');
    };
  }

  if (e.target.classList.contains('collapsible__action--hidden')) {
    hiddenActionLabel.setAttribute('style', 'display: none');
    visibleActionLabel.setAttribute('style', 'display: block');
    content.setAttribute('style', 'display: block');
    content.animate(
      [
        { transform: 'translateY(-100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
      ], 1000);
  }
};

visibleActionLabel.setAttribute('style', 'display: none');
content.setAttribute('style', 'display: none');
button.addEventListener('click', (e) => changeVisibility(e));