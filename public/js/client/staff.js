const staffHeader = document.querySelector('.staff-page__writeable-text');

let i = 0;
let text = 'Look at all of our dedicated members!';

const printTxt = () => {
  setTimeout(() => {
    staffHeader.textContent += text.charAt(i);
    i++;
    printTxt();
  }, 45);
};

printTxt();
