window.addEventListener('load', e => {
    console.log('Сайт прогрузился');
});
const headerList = document.querySelector(".header-list");
headerList.addEventListener("click", event => {
    if (!event.target.classList.contains('header-list-mini')) {
        return
    }
    setChooseText();
});
function setChooseText() {
    if(event.target.classList.contains('header-choosed')) {
        return
    }
    let choosedText = document.querySelector('.header-choosed');
    choosedText.classList.remove('header-choosed');
    event.target.classList.add('header-choosed');
    renderHeaderChoosed();
}
function renderHeaderChoosed() {
    let choocedImage = document.querySelector('.header-choosed-image');
    choocedImage.remove();
    const a = `<svg class='header-choosed-image'xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9746 0.61282C9.57883 1.62074 7.64148 2.24521 5.49993 2.24521C3.35844 2.24521 1.42114 1.62078 0.025428 0.61291C0.00860599 0.788074 0 0.965638 0 1.14521C0 4.18278 2.46243 6.64521 5.5 6.64521C8.53756 6.64521 11 4.18278 11 1.14521C11 0.965607 10.9914 0.788014 10.9746 0.61282Z" fill="#FCFCFC"/>
</svg>`
    event.target.insertAdjacentHTML("beforeend", a);
}
const headerButton = document.querySelector('.header-button');
const headerButtonText = document.querySelector('.header-button-text');
headerButton.addEventListener('click', event => {
    headerButtonText.textContent = "Заявка оставлена";
});
function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('show');
      }
    });
  }
  let options = { threshold: [0.25] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.block-img');
  for (let elm of elements) {
    observer.observe(elm);
  }