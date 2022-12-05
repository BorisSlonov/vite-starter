const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach((item) => {
            // item.style.display = "none";
            item.classList.remove('this__active');
        });

        tab.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        // content[i].style.display = "block";
        content[i].classList.add('this__active');
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => {
        const target = e.target;
        if (
            target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
        ) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

const servicesTabs = document.querySelector(".allPlacesTabs");
if (servicesTabs) {
    tabs(
        ".allPlacesTabs__titles",
        ".allPlacesTabs__title",
        ".allPlacesTabs__item",
        "allPlacesTabs__title_active"
    );
}


const infoText = document.querySelector(".infoText");
if (infoText) {
    tabs(
        ".infoText__titles",
        ".infoText__title",
        ".infoText__item",
        "infoText__title_active"
    );
}

const infoTextMob = document.querySelector(".infoTextMob");
if (infoTextMob) {
    tabs(
        ".infoTextMob__titles",
        ".infoTextMob__title",
        ".infoTextMob__item",
        "infoTextMob__title_active"
    );
}


const carTypeTabs = document.querySelector(".carTypeTabs");
if (carTypeTabs) {
    tabs(
        ".carTypeTabs__titles",
        ".carTypeTabs__title",
        ".carTypeTabs__item",
        "carTypeTabs__title_active"
    );
}

if (document.querySelector('.infoText__title_1')) {
    let infoText__title_1 = document.querySelector('.infoText__title_1')
    let infoText__title_2 = document.querySelector('.infoText__title_2')
    let infoText__title_3 = document.querySelector('.infoText__title_3')

    let infoTextMob__title_1 = document.querySelector('.infoTextMob__title_1')
    let infoTextMob__title_2 = document.querySelector('.infoTextMob__title_2')
    let infoTextMob__title_3 = document.querySelector('.infoTextMob__title_3')

    let coins__img = document.querySelectorAll('.coins__img')
    let coins__img_1 = document.querySelector('.coins__img.coins__img_1')
    let coins__img_2 = document.querySelector('.coins__img.coins__img_2')
    let coins__img_3 = document.querySelector('.coins__img.coins__img_3')

    let coinsMob__img = document.querySelectorAll('.coinsMob__img')
    let coinsMob__img_1 = document.querySelector('.coinsMob__img.coins__img_1')
    let coinsMob__img_2 = document.querySelector('.coinsMob__img.coins__img_2')
    let coinsMob__img_3 = document.querySelector('.coinsMob__img.coins__img_3')

    let coins__img_active = document.querySelector('.coins__img_active')


    infoTextMob__title_1.addEventListener('click', () => {

        coinsMob__img.forEach(function (i) {
            i.classList.remove('coins__img_active')
        })

        coinsMob__img_1.classList.add('coins__img_active')
    })
    infoTextMob__title_2.addEventListener('click', () => {

        coinsMob__img.forEach(function (i) {
            i.classList.remove('coins__img_active')
        })

        coinsMob__img_2.classList.add('coins__img_active')
    })
    infoTextMob__title_3.addEventListener('click', () => {

        coinsMob__img.forEach(function (i) {
            i.classList.remove('coins__img_active')
        })

        coinsMob__img_3.classList.add('coins__img_active')
    })



    infoText__title_1.addEventListener('click', () => {

        coins__img.forEach(function (i) {
            i.classList.remove('coins__img_active')
        })

        coins__img_1.classList.add('coins__img_active')
    })
    infoText__title_2.addEventListener('click', () => {

        coins__img.forEach(function (i) {
            i.classList.remove('coins__img_active')
        })

        coins__img_2.classList.add('coins__img_active')
    })
    infoText__title_3.addEventListener('click', () => {

        coins__img.forEach(function (i) {
            i.classList.remove('coins__img_active')
        })

        coins__img_3.classList.add('coins__img_active')
    })
}

