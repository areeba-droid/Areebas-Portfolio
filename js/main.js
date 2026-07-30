// // this is the text scrolling animation
// const marquee = document.getElementById("marquee");
//
// // Duplicate text enough times to cover the screen
// const text = marquee.textContent;
// while (marquee.offsetWidth < window.innerWidth * 2) {
//   marquee.textContent += " " + text;
// }
//
// let position = 0;
// function animate() {
//   position -= 1; // speed: change this value for faster/slower
//   marquee.style.transform = `translateX(${position}px)`;
//
//   // reset position when half scrolled
//   if (Math.abs(position) >= marquee.offsetWidth / 2) {
//     position = 0;
//   }
//
//   requestAnimationFrame(animate);
// }
//
// animate();

const arrow = document.querySelector(".scroll-indicator");

let start = null;

function bounce(timestamp) {

  if (!start) start = timestamp;

  const progress = timestamp - start;

  /*
    Math.sin creates smooth wave motion:
    -1 → 1 → -1
  */

  const y = Math.sin(progress * 0.005) * 3;

  arrow.style.transform =
    `translateX(-50%) translateY(${y}px)`;

  requestAnimationFrame(bounce);
}

requestAnimationFrame(bounce);



// const arrow = document.querySelector(".scroll-indicator");
// const nextSection = document.querySelector("#projects");
//
// arrow.addEventListener("click", () => {
//   nextSection.scrollIntoView({
//     behavior: "smooth"
//   });
// });


// animate the words product designer to switch to other ones!
const words = ["Product Designer", "UI/UX Designer", "Visual Designer"];
const typingSpeed = 100; // ms per letter
const deletingSpeed = 50; // ms per letter
const pause = 1500; // pause before deleting

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textEl = document.querySelector(".typing-text");

function type() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    charIndex--;
    textEl.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    textEl.textContent = currentWord.substring(0, charIndex);
  }

  // Determine next step
  let timeout = typingSpeed;
  if (isDeleting) timeout = deletingSpeed;

  if (!isDeleting && charIndex === currentWord.length) {
    timeout = pause;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    timeout = 500; // small pause before next word
  }

  setTimeout(type, timeout);
}

// start typing
type();



// make the nav title appear after the typing text is gone off screen
const isVisible = (element) => {
  if (!element){
    return false;
  }
  const rect = element.getBoundingClientRect();
  const isVisible = (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const shouldDisplayTitle = () => {
  const diffBold = document.getElementById('diff-bold');
  const title = document.getElementsByClassName('title-txt')[0];
  if(!isVisible(diffBold)) {
    title.style.opacity = 1;
    title.style.transition = 'opacity 0.5s ease-in';
  } else {
    title.style.transition = undefined;
    title.style.opacity = 0;
  }
};

window.addEventListener('scroll', shouldDisplayTitle);
// window.addEventListener('load', shouldDisplayTitle);




// the code for autopausing videos when offscreen

// const prefersReducedMotion = window.matchMedia(
//   "(prefers-reduced-motion: reduce)"
// ).matches;
//
// const videoWrappers = document.querySelectorAll(".embed-vid");
//
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach(entry => {
//       const player = entry.target.player;
//       if (!player) return;
//
//       if (!prefersReducedMotion) {
//         entry.isIntersecting
//           ? player.play().catch(err => console.log("Play error:", err))
//           : player.pause().catch(err => console.log("Pause error:", err));
//       }
//     });
//   },
//   { threshold: 0.5 }
// );
//
// videoWrappers.forEach(wrapper => {
//   const iframe = wrapper.querySelector("iframe");
//   if (!iframe) return;
//
//   const player = new Vimeo.Player(iframe);
//
//   // Make sure the player is ready before observing
//   player.ready().then(() => {
//     wrapper.player = player;
//     observer.observe(wrapper);
//   }).catch(err => console.log("Vimeo ready error:", err));
// });
