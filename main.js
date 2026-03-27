//попереднє домашнє завдання
// const slides = document.querySelectorAll(".slide");
// const nextBtn = document.getElementById("next");
// const prevBtn = document.getElementById("prev");



// let current = 0;

// function show(i){
//   slides.forEach(slide => { slide.classList.remove("active");

//   });
//   slides[i].classList.add("active");
  
// }


// show(current);
// nextBtn.addEventListener("click", function(){
//   current++;
//   if (current >= slides.length) {
//       current = 0;
  
//   }
//   show(current);
// }
// );
// prevBtn.addEventListener("click", function(){
//   current--;
//   if (current < 0) {
//       current = slides.length - 1;
  
//   }
//   show(current);
// }
// );

// прототипи

// function Slider(conSel, conf){
//   this.container = document.querySelector(conSel);
//   this.slides = this.container.querySelectorAll(".slide");
//   this.current = 0;
//   this.timer = null;
//   this.isPlaying = false;

//   this.conf = Object.assign({
//     showButtons: true, 
//     showIndicators: false,
//     autoplay: true,
//     interval: 3000
//   }, conf)
//   this.init();
// };
// Slider.prototype.init = function(){
//   if (this.conf.showButtons === true){
//     this.createButtons();
//   }
//   if (this.conf.showIndicators === true) {
//     this.createIndicators();
//   }
//   this.initKeyboard();
//   if (this.conf.autoplay === true) {
//     this.startAutoPlay();
// }
//   this.showSlide(this.current);
// };

// Slider.prototype.startAutoPlay = function() {
//   this.timer = setInterval(() => this.next(), this.conf.interval);
//   this.isPlaying = true;
// };
// Slider.prototype.stopAutoPlay = function() {
//   clearInterval(this.timer); 
//   this.isPlaying = false;
// };
// Slider.prototype.togglePlay = function() {
//   if (this.isPlaying) {
//       this.stopAutoPlay();
//   } else {
//       this.startAutoPlay();
//   }
// };
// Slider.prototype.initKeyboard = function() {
//   document.addEventListener('keydown', (e) => {
//       if (e.key === 'ArrowRight') this.next();
//       if (e.key === 'ArrowLeft') this.prev(); 
//   });
// };
// Slider.prototype.createButtons = function(){
//   const btnCon = document.createElement("div");
//   btnCon.className = "slider-btn";

//   const prevBtn = document.createElement("button");
//   prevBtn.className = "prev";
//   prevBtn.textContent = "Prev";

//   const nextBtn = document.createElement("button");
//   nextBtn.className = "next";
//   nextBtn.textContent = "Next";

//   const pauseBtn = document.createElement("button");
//   pauseBtn.className = "pause";
//   pauseBtn.textContent = "Pause/Play";

//   btnCon.appendChild(prevBtn);
//   btnCon.appendChild(nextBtn);
//   btnCon.appendChild(pauseBtn);

//   this.container.appendChild(btnCon);
//   prevBtn.addEventListener('click', () => this.prev());
//   nextBtn.addEventListener('click', () => this.next());
//   pauseBtn.addEventListener('click', () => this.togglePlay());
// };

// Slider.prototype.showSlide = function(index) {
//   this.slides.forEach(slide => { 
//       slide.classList.remove("active"); 
//   });
//   if(this.conf.showIndicators === true && this.dots) {
//     this.dots.forEach(dot => {
//         dot.classList.remove("active");
//     });
//     this.dots[index].classList.add("active");
//   }
//   this.slides[index].classList.add("active");
// };


// Slider.prototype.next = function() {
//   this.current++; 

//   if (this.current >= this.slides.length) {
//       this.current = 0;
//   }
//   this.showSlide(this.current);
// };

// Slider.prototype.prev = function() {
//   this.current--; 
//   if (this.current < 0) {
//       this.current = this.slides.length - 1;
//   }
  
//   this.showSlide(this.current);
// };
// Slider.prototype.createIndicators = function() {
//   const dotsCon = document.createElement("div");
//   dotsCon.className = "indicators"; 
//   this.dots = []; 

//   this.slides.forEach((slide, index) => {
//     const dot = document.createElement("div");
//     dot.className = "dot";
//     dot.addEventListener("click", () => {
//         this.current = index;
//         this.showSlide(this.current);
//     });
//     dotsCon.appendChild(dot); 
//     this.dots.push(dot);     
//   });
//   this.container.appendChild(dotsCon);
// };

// // const mySlider = new Slider('.slider', {
// //   showButtons: true,
// //   showIndicators: true,
// //   autoplay: true,   
// //   interval: 2000
// // });

// function SwipeSlider(conSel, conf){
//   Slider.call(this, conSel, conf);
//   this.startX = 0;
//   this.endX = 0;
//   this.isDragging = false;
//   if (this.conf.pauseOnHover) {
//     this.initHoverPause();
//   }
//   this.initSwipe();
// }
// SwipeSlider.prototype = Object.create(Slider.prototype);
// SwipeSlider.prototype.constructor = SwipeSlider;

// SwipeSlider.prototype.initSwipe = function() {
//   this.container.addEventListener('touchstart', (e) => {
//     this.startX = e.changedTouches[0].screenX;
//   });

//   this.container.addEventListener('touchend', (e) => {
//     this.endX = e.changedTouches[0].screenX;
//     this.handleSwipe();
//   });

//   this.container.addEventListener('mousedown', (e) => {
//     e.preventDefault(); 
//     this.startX = e.screenX;
//     this.isDragging = true;
//   });

//   this.container.addEventListener('mouseup', (e) => {
//     if (!this.isDragging) return;
//     this.endX = e.screenX;
//     this.isDragging = false;
//     this.handleSwipe();
//   });

//   this.container.addEventListener('mouseleave', () => {
//     this.isDragging = false; 
//   });
// };

// SwipeSlider.prototype.handleSwipe = function() {
//   const threshold = 50; 
  
//   if (this.startX - this.endX > threshold) {
//     this.next();
//   }
  
//   if (this.endX - this.startX > threshold) {
//     this.prev();
//   }
// };

// SwipeSlider.prototype.initHoverPause = function() {
//   this.container.addEventListener('mouseenter', () => {
//     if (this.conf.autoplay) this.stopAutoPlay();
//   });
  
//   this.container.addEventListener('mouseleave', () => {
//     if (this.conf.autoplay) this.startAutoPlay();
//   });
// };

// const mySwipeSlider = new SwipeSlider('.slider', {
//   showButtons: true,
//   showIndicators: true,
//   autoplay: true,   
//   interval: 2000,
//   pauseOnHover: true
// });

class Slider {
  constructor(conSel, conf) {
    this.container = document.querySelector(conSel);
    this.current = 0;
    this.slides = this.container.querySelectorAll(".slide");
    this.timer = null;
    this.isPlaying = false;

    this.conf = Object.assign({
      showButtons: true, 
      showIndicators: false,
      autoplay: true,
      interval: 3000
    }, conf)
    this.init();
  }
  init() {
    if (this.conf.showButtons === true){
      this.createButtons();
    }
    if (this.conf.showIndicators === true) {
      this.createIndicators();
    }
    this.initKeyboard();
    if (this.conf.autoplay === true) {
      this.startAutoPlay();
  }
    this.showSlide(this.current);
  }

  startAutoPlay() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.next(), this.conf.interval);
    this.isPlaying = true;
  }
  stopAutoPlay(){
    clearInterval(this.timer); 
    this.isPlaying = false;
  }
  togglePlay(){
    this.conf.autoplay = !this.conf.autoplay;
    if (this.conf.autoplay) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }
  initKeyboard(){
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev(); 
  });
  }
  createButtons(){
    const btnCon = document.createElement("div");
    btnCon.className = "slider-btn";
  
    const prevBtn = document.createElement("button");
    prevBtn.className = "prev";
    prevBtn.textContent = "Prev";
  
    const nextBtn = document.createElement("button");
    nextBtn.className = "next";
    nextBtn.textContent = "Next";
  
    const pauseBtn = document.createElement("button");
    pauseBtn.className = "pause";
    pauseBtn.textContent = "Pause/Play";
  
    btnCon.appendChild(prevBtn);
    btnCon.appendChild(nextBtn);
    btnCon.appendChild(pauseBtn);
  
    this.container.appendChild(btnCon);
    prevBtn.addEventListener('click', () => this.prev());
    nextBtn.addEventListener('click', () => this.next());
    pauseBtn.addEventListener('click', () => this.togglePlay());
  }
  showSlide(index){
    this.slides.forEach(slide => { 
      slide.classList.remove("active"); 
  });
  if(this.conf.showIndicators === true && this.dots) {
    this.dots.forEach(dot => {
        dot.classList.remove("active");
    });
    this.dots[index].classList.add("active");
  }
  this.slides[index].classList.add("active");
  }
  next() {
    this.current++; 

  if (this.current >= this.slides.length) {
      this.current = 0;
  }
  this.showSlide(this.current);
  }
  prev(){
    this.current--; 
    if (this.current < 0) {
        this.current = this.slides.length - 1;
    }
    
    this.showSlide(this.current);
  }

  createIndicators(){
    const dotsCon = document.createElement("div");
  dotsCon.className = "indicators"; 
  this.dots = []; 

  this.slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => {
        this.current = index;
        this.showSlide(this.current);
    });
    dotsCon.appendChild(dot); 
    this.dots.push(dot);     
  });
  this.container.appendChild(dotsCon);
  }
}

class SwipeSlider extends Slider {
  constructor(conSel, conf) {
    super(conSel, conf); 
    this.startX = 0;
    this.endX = 0;
    this.isDragging = false;
    if (this.conf.pauseOnHover) {
      this.initHoverPause();
    }
    this.initSwipe();
  }
  initSwipe() {
   
    this.container.addEventListener('touchstart', (e) => {
      this.startX = e.changedTouches[0].screenX;
    });

    this.container.addEventListener('touchend', (e) => {
      this.endX = e.changedTouches[0].screenX;
      this.handleSwipe();
    });

    
    this.container.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.startX = e.screenX;
      this.isDragging = true;
    });

    this.container.addEventListener('mouseup', (e) => {
      if (!this.isDragging) return;
      this.endX = e.screenX;
      this.isDragging = false;
      this.handleSwipe();
    });

    this.container.addEventListener('mouseleave', () => {
      this.isDragging = false;
    });
  }
  handleSwipe() {
    const threshold = 50;
    
    if (this.startX - this.endX > threshold) {
      this.next();
    }
    
    if (this.endX - this.startX > threshold) {
      this.prev();
    }
  }

  initHoverPause() {
    this.container.addEventListener('mouseenter', () => {
      if (this.conf.autoplay) this.stopAutoPlay();
    });
    
    this.container.addEventListener('mouseleave', () => {
      if (this.conf.autoplay) this.startAutoPlay();
    });
  }
}

const ss = new SwipeSlider('.slider', {
  showButtons: true,
  showIndicators: true,
  autoplay: true,   
  interval: 2000,
  pauseOnHover: true
});