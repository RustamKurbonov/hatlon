window.onload = function () {
   arrowMenu();
   menuBurger();
   headerSlider();
   calculator();
   sliderReviews();
}
let arrowMenu = () => {
   let isMobile = {
      Android: function () {return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
   };
   let body = document.querySelector('body');
   if(isMobile.any()){
      body.classList.add('touch');
      let arrow = document.querySelector('.header__arrow');
      let thisLink = arrow.previousElementSibling;
      let subMenu = arrow.nextElementSibling;
      thisLink.classList.add('parent');
      arrow.addEventListener('click', function () {
         subMenu.classList.toggle('open');
         arrow.classList.toggle('activeArrow');
      })
   } else {
      body.classList.add('mouse');
   }
}
function menuBurger() {
   let headerBurger = document.getElementById('burger');
   headerBurger.onclick = classActive;
}
function classActive(e) {
   let headerBurger = document.getElementById('burger');
   let headerMenu = document.getElementById('menu');
   let body = document.getElementById('body');
   let link = document.querySelectorAll('.link');
   headerBurger.classList.toggle('active');
   headerMenu.classList.toggle('active');
   body.classList.toggle('lock');

   for(let i = 0; i < link.length; i++){
      link[i].classList.remove('hover');
   }
}
function headerSlider() {
   let obj = document.getElementById('show');
   let arrBg = ['url(img/header/01.png)', 'url(img/header/02.png)', 'url(img/header/03.png)'];
   obj.style.backgroundImage = arrBg[0];
   obj.style.backgroundRepeat = 'no-repeat';
   obj.style.backgroundPosition = 'center';
   obj.style.backgroundSize = 'cover';
   let num = 0;

   nextBg = setInterval(() => {
      if (num > arrBg.length){
         num = 0;
         obj.style.backgroundImage = arrBg[num];
         obj.style.backgroundRepeat = 'no-repeat';
         obj.style.backgroundPosition = 'center';
         obj.style.backgroundSize = 'cover';
      } else {
         obj.style.backgroundImage = arrBg[num];
         obj.style.backgroundRepeat = 'no-repeat';
         obj.style.backgroundPosition = 'center';
         obj.style.backgroundSize = 'cover';
         num++;
      }
   }, 2000);

}
let calculator = () => {
   let room = document.getElementById('room');
   let repair = document.getElementById('repair');
   let volume = document.getElementById('volume');
   let sum = document.getElementById('sum');

   room.onchange = calc;
   repair.onchange = calc;
   volume.onchange = calc;
}
let calc = () => {
   if (room.value > 0 && repair.value > 0 && volume.value !== '' && volume.value > 0){
      sum.value = (room.value * repair.value * volume.value) / 100;
   } else {
      sum.value = '';
   }
}
let sliderReviews = () => {
   let line = document.querySelector('.reviews__line');
   let slides = document.querySelectorAll('.reviews__slide');
   let btnLeft = document.querySelector('.reviews__btn-left');
   let btnRight = document.querySelector('.reviews__btn-right');
   let dots = document.querySelectorAll('.reviews__dot');
   dots[0].classList.add('activeDot');

   let widthArray = [0];
   let lineWidth = 0;
   let step = 0;
   let offset = 0;

   for (let i = 0; i < slides.length; i++) {
      widthArray.push(slides[i].offsetWidth + 3);
      lineWidth += slides[i].offsetWidth + 3;
   }

   line.style.width = lineWidth + 'px';

   for (let q = 0; q < dots.length; q++) {
      dots[q].addEventListener('click', function (e) {
         for(let f = 0; f < dots.length; f++){
            dots[f].classList.remove('activeDot');
         }
         e.target.classList.add('activeDot');
         step = e.target.id;
         offset = 0;
         for(let a = 0; a <= step; a++){
            offset += widthArray[a];
         }
         line.style.left = -offset + 'px';
      })
   }

   btnLeft.onclick = function(){
      for (let f = 0; f < dots.length; f++) {
         dots[f].classList.remove('activeDot');
      }
      if(step <= 0){
         offset = lineWidth - slides[1].offsetWidth;
         step = slides.length - 1;
         dots[step].classList.add('activeDot');
         line.style.left = -offset + 'px';
      } else {
         step--;
         if(step === 0){
            offset = 0;
         } else {
            offset -= widthArray[step];
         }
         dots[step].classList.add('activeDot');
         line.style.left = -offset + 'px';
      }
   }

   btnRight.onclick = function () {
      for (let f = 0; f < dots.length; f++) {
         dots[f].classList.remove('activeDot');
      }
      if (step >= slides.length - 1) {
         offset = 0;
         step = 0;
         dots[step].classList.add('activeDot');
         line.style.left = -offset + 'px';
      } else {
         step++;
         offset += widthArray[step];
         dots[step].classList.add('activeDot');
         line.style.left = -offset  + 'px';
      }
   }
   
}
