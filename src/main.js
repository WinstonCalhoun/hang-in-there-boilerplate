// query selector variables go here 👇
// Declaring variables

// Img/Title/Quote showcase
var randomImages = document.querySelector('.poster-img');
var randomTitles = document.querySelector('.poster-title');
var randomQuotes = document.querySelector('.poster-quote');

// Our Sections
var mainPoster = document.querySelector('.main-poster');
var makeOwnForm = document.querySelector('.poster-form');
var savedPosterSection = document.querySelector('.saved-posters');

// Our Buttons
var randomPosterBtn = document.querySelector('.show-random');
var toggleOffPosterBtn = document.querySelector('.show-form');
var showSavedPosterBtn = document.querySelector('.show-saved');
var createMyPosterBtn = document.querySelector('.make-poster');
var takeMeBackBtn = document.querySelector('.show-main');
var backToMainBtn = document.querySelector('.back-to-main');
var savePosterBtn = document.querySelector('.save-poster');
var savedPosterGrid = document.querySelector('.saved-posters-grid');

// Our Form Inputs
var imageURLInput = document.getElementById('poster-image-url');
var posterTitleInput = document.getElementById('poster-title');
var posterQuoteInput = document.getElementById('poster-quote');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster = new Poster(randomImages, randomTitles, randomQuotes);

// Generates a random title
var random1 = images[Math.floor(Math.random() * images.length)];
// console.log(random1)
randomImages.src = random1;

////////////////////////
var random2 = titles[Math.floor(Math.random() * titles.length)];
// console.log(random2)
randomTitles.innerText = random2;

////////////////////////
var random3 = quotes[Math.floor(Math.random() * quotes.length)];
// console.log(random3)
randomQuotes.innerText = random3;


// event listeners go here 👇
// Our Buttons
randomPosterBtn.addEventListener('click', changePoster);
toggleOffPosterBtn.addEventListener('click', removePoster);
showSavedPosterBtn.addEventListener('click', showSavedPoster);
takeMeBackBtn.addEventListener('click', toMain1);
backToMainBtn.addEventListener('click', toMain2);
createMyPosterBtn.addEventListener('click', createPoster);
savePosterBtn.addEventListener('click', savePoster);


// functions and event handlers go here 👇
function changePoster() {
  var random1 = images[Math.floor(Math.random() * images.length)];
  console.log(random1)
    randomImages.src = random1;
  var random2 = titles[Math.floor(Math.random() * titles.length)];
    randomTitles.innerText = random2;
  var random3 = quotes[Math.floor(Math.random() * quotes.length)];
    randomQuotes.innerText = random3;
  var posterInstance = new Poster(random1, random2, random3);
    currentPoster = posterInstance
    return random1, random2, random3;
}

function removePoster() {
  mainPoster.classList.add('hidden');
  makeOwnForm.classList.remove('hidden');
}

function showSavedPoster() {
  savedPosterGrid.innerHTML = "";
  mainPoster.classList.add('hidden');
  savedPosterSection.classList.remove('hidden');
  for (var i = 0; i < savedPosters.length; i++){
    console.log(savedPosterGrid.innerHTML)
    console.log(savedPosters[i])
  savedPosterGrid.innerHTML += `
  <article class="mini-poster">
    <img class="poster-img" src="${savedPosters[i].imageURL}"alt="nothin' to see here">
    <h2> ${savedPosters[i].title}</h2>
    <h4> ${savedPosters[i].quote}</h4>
  </article>`
  }
}

function toMain1() {
  mainPoster.classList.remove('hidden');
}

function toMain2() {
  mainPoster.classList.remove('hidden');
}

// function createPoster(event) {
//   event.preventDefault();
//   randomImages.src = imageURLInput.value;
//   randomTitles.innerText = "Hello";
//   randomQuotes.innerText = posterQuoteInput.value;
//   console.log(randomTitles);
// }

// function goHome() {
//   mainPoster.classList.remove('hidden');
//   randomPosterBtn.classList.remove('hidden');
//   toggleOffPosterBtn.classList.remove('hidden');
//   createMyPosterBtn.classList.remove('hidden');
//   backToMainBtn.classList.remove('hidden');
//   takeMeBackBtn.classList.add('hidden');
//   showSavedPosterBtn.classList.add('hidden');
//   makeOwnForm.classList.add('hidden');
//   savedPosterSection.classList.add('hidden');
// }

function createPoster(event) {
  event.preventDefault();
  mainPoster.classList.remove('hidden');
  makeOwnForm.classList.add('hidden');
  currentPoster = new Poster(imageURLInput.value, posterTitleInput.value, posterQuoteInput.value);

  images.push(imageURLInput.value);
  titles.push(posterTitleInput.value);
  quotes.push(posterQuoteInput.value);

  randomTitles.innerText = currentPoster.title;
  randomQuotes.innerText = currentPoster.quote;
  randomImages.src = currentPoster.imageURL;
  // goHome();
}

// This saves the poster
function savePoster() {
  console.log('Poster Saved')
  // savedPosters.push('This is poster 1');

  // 1. We are storing the current data showed in the home page to the array named (storedPosters)
  // savedPosters.push(randomImages.src, randomTitles.innerText, randomQuotes.innerText)
// ! bang operator
  if(!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster)
    // return savedPosters;
  }
  console.log(savedPosters);
}





// (we've provided one for you to get you started)!
//function getRandomIndex(array) {
//  return Math.floor(Math.random() * array.length);
//}
