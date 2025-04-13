// const enterButton = document.getElementById('enterButton');
// const screen1 = document.getElementById('screen1');
// const screen2 = document.getElementById('screen2');

// enterButton.addEventListener('click', () => {
//   anime({
//     targets: '#screen1',
//     opacity: [1, 0],
//     duration: 800,
//     easing: 'easeInOutQuad',
//     complete: () => {
//       screen1.classList.add('hidden');
//       screen2.classList.remove('hidden');

//       anime({
//         targets: '#screen2',
//         opacity: [0, 1],
//         duration: 800,
//         easing: 'easeInOutQuad'
//       });
//     }
//   });
// });

window.onload = () => {
  const audio = document.getElementById('elevatorSound');
  // audio.play().catch((e) => {
  //   console.log('Autoplay blocked:', e);
  // });
};
