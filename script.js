let menuTrigger = document.getElementById("mobile-menu-trigger");
let mobileMenu = document.querySelector("header nav");

menuTrigger.addEventListener('click', function() {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});






let firstName = document.getElementById('fname'),
    surname = document.getElementById('lname'),
    phone = document.getElementById('pnumber'),
    btn = document.getElementById('startbtn');
    

    btn.addEventListener('click', function() {
        if (firstName.value && surname.value && phone.value) {
            firstName.nextElementSibling.classList.add('hidden');
            surname.nextElementSibling.classList.add('hidden');
            phone.nextElementSibling.classList.add('hidden');
            
        }

        if (!firstName.value) {
            firstName.nextElementSibling.classList.remove('hidden');
        }
        
        if (!surname.value) {
            surname.nextElementSibling.classList.remove('hidden');
        }
        if (!phone.value) {
            phone.nextElementSibling.classList.remove('hidden');
        }
    });

    







//
// About section tab navigation
//

const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; // "register" / "apply" / "receive"

        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");

        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}


// About section. Change of picture background

// const imageBoxElements = document.querySelectorAll(".about .image-box .small-images .small-one");
// const timageBoxContentElements = document.querySelectorAll(".about .tab-content");

// function removeActiveClassesFromElements(elements) {
//     for (let element of elements) {
//         element.classList.remove("active");
//     }
// }

// for (let tabElement of tabNavigationElements) {
//     tabElement.addEventListener("click", function() {
//         const target = this.dataset.target; // "register" / "apply" / "receive"

//         removeActiveClassesFromElements(tabNavigationElements);
//         this.classList.add("active");

//         removeActiveClassesFromElements(tabContentElements);
//         document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
//     });
// }






// document.querySelectorAll(".about .image-box .small-images .small-one").addEventListener('click', myFunction);
//     function myFunction() {
        
//     var element = document.querySelectorAll(".small-one");
//     element.classList.add("active");
//   };




//   document.getElementById("small-one").addEventListener("click", myFunction);

//   function myFunction() {
//     document.getElementById("small-one").innerHTML = "YOU CLICKED ME!";
//   };






//
// Reviews section swiper gallery
//

const swiper = new Swiper('.reviews-swiper', {
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 60,
    // slidesPerGroup: 2,
    autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    

    breakpoints: {
        1100: {
          slidesPerView: 3,
          spaceBetween: 120,
          slidesPerGroup: 3,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 80,
            slidesPerGroup: 2,
          }
    }
      
});

//
// Get weather data from openweather API
//

const url = "https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=d35c6784200117279d40254aa658d136";
const weatherElement = document.getElementById("weather-in-celsius");

function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = response.main.temp;

        if (temperature > 0) {
            weatherElement.innerText = "+" + Math.round(temperature);
        } else {
            weatherElement.innerText = temperature;
        }
    })
    http.send();
}

window.addEventListener('load', getCurrentWeatherInCelsius)


// Bottom form

let firstNameTwo = document.getElementById('fnameTwo'),
    surnameTwo = document.getElementById('lnameTwo'),
    phoneTwo = document.getElementById('pnumberTwo'),
    secondbtn = document.getElementById('sendbtn');

    secondbtn.addEventListener('click', function() {
        if (firstNameTwo.value && surnameTwo.value && phoneTwo.value) {
            firstNameTwo.nextElementSibling.classList.add('hidden');
            surnameTwo.nextElementSibling.classList.add('hidden');
            phoneTwo.nextElementSibling.classList.add('hidden');
            
        }

        if (!firstNameTwo.value) {
            firstNameTwo.nextElementSibling.classList.remove('hidden');
        }
        
        if (!surnameTwo.value) {
            surnameTwo.nextElementSibling.classList.remove('hidden');
        }
        if (!phoneTwo.value) {
            phoneTwo.nextElementSibling.classList.remove('hidden');
        }
    });


//     let change = document.querySelectorAll(".image-box");
// for (let i = 0; i < change.length; 1++) {
//     change[i].addEventListener("click", function() {
//         this.classList.add("active");
//     });
// };