const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');


hamburger.addEventListener('click', ()=> {
  sidebar.classList.toggle('open-sidebar');
  wrapper.classList.toggle('backdrop');
})

// const createBackdrop = () => {
//   const div = document.createElement('div');
//   div.classList.add('backdrop'); 
//   wrapper.append(div);
// }

// const deleteBackdrop = () => {
//   const backdrop = document.querySelector('.backdrop');
//   backdrop.remove();  
// }

// let isOpen = false;
// hamburger.addEventListener('click', () => {
//   sidebar.classList.toggle('open-sidebar');
//   hamburger.classList.toggle('bi-list');
//   hamburger.classList.toggle('bi-x-lg');
//   !isOpen 
//     ? createBackdrop()
//     : deleteBackdrop()
//   isOpen = !isOpen;
// });