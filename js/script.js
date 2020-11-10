window.onload = function () {
   arrowMenu();
   сallBackFunction();
   menuBurger();
   headerSlider();
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
let сallBackFunction = () => {
   let сallBackBody = document.getElementById('сallBackBody');
   let сallBack = document.getElementById('сallBack');
   let сallBackForm = document.querySelector('.сallBack__form');
   let transform = 0;
   let x = 60;
   let y = 100;
   let rightBody = 30;

   сallBackBody.onclick = () => {
      сallBackForm.classList.toggle('activeCallBack');
   }

   call = setInterval(() => {
      if (transform >= 30) {
         transform = 0;
         сallBackBody.style.transform = 'rotate(' + transform + 'deg)';
      } else if (transform >= 0) {
         transform++;
         сallBackBody.style.transform = 'rotate(' + transform + 'deg)';
      }
   }, 30);
   innerBorder = setInterval(() => {
      if (x >= 75) {
         x = 60;
         сallBackBody.style.width = x + 'px';
         сallBackBody.style.height = x + 'px';
      } else if (x >= 60) {
         x++;
         сallBackBody.style.width = x + 'px';
         сallBackBody.style.height = x + 'px';
      }
   }, 60);
}