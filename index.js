const menu = [
  {
    id: 1,
    img: './img/bag.png',
    category: "bag",
    desc: "я первый kdjgkzhg igdisug giudf dhsigkzjofsduroyeigh<br> ghruisghdflkfjoe orps;kjlzdkjgrutyio 9rodksjolzkbjfgyu8",
    title: "title"
  },
  {
    id: 2,
    img: "./img/leaves.png",
    category: "leaves",
    desc: "я второй",
    title: "title"
  },
  {
    id: 3,
    img: "./img/heart.png",
    category: "heart",
    desc: "я третий",
    title: "title"
  },
  {
    id: 4,
    img: "./img/umberalla.png",
    category: "umberalla",
    desc: "я четвертый",
    title: "title"
  },

];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('.filter-btn');

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(sectionCenter);
});

//filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const category = (e.currentTarget.dataset.id);
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === 'bag') {
      displayMenuItems(menuCategory)
    }
    else {
      displayMenuItems(menuCategory);
    }
  });
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `<div class="menu-item">
    <img class="icon" src="${item.img}" alt="id" width="100px">
    <h2 class="menu-item_title">${item.title}</h2>
    <p class="item-info">${item.desc}</p>
  </div>`;
  });

  sectionCenter.innerHTML = displayMenu;
};




//////////////////////////////////////////////slider//////////////////////////////////////////





const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
})
prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});
function carousel() {
  if (counter === slides.length) {
    counter = 0;

  }
  if (counter < 0) {

  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}