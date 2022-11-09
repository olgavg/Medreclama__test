import '../scss/main.scss';
import '../index.html';
import '../js/imask.js';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


// Swiper
const swiper = new Swiper('.swiper', {
  loop: false,
  modules: [Navigation],
  slidesPerView: 2,  
  spaceBetween: 25,
  slidesPerGroup: 2,
  breakpoints: {
    // when window width is >= 0
    0: {
      slidesPerView: 1
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'swiper-button-disabled'
  }
});


//Drag and Drop of blocks
document.addEventListener('DOMContentLoaded', (event) => {
  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add('over');
  }

  function handleDragLeave(e) {
    this.classList.remove('over');
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); 
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  
  
  let items = document.querySelectorAll('.wrapper .wrapper__item');
  items.forEach(function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
  });
});


// Mask for tel input
var dynamicMask = new IMask(document.getElementById('formTel'),{
  mask: [   
    {
      mask: '+{7} (000)000-00-00'
    },
    {
      mask: /^\+7(\s+)?[0-9]{3}-?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/
    }
  ]
})
