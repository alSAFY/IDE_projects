// Task one 

const _ = document ,
    menu = _.getElementById('menu'),
    mainBtn = _.querySelector('.menu-btn'),
    menuItems = _.querySelectorAll('.menu-btn'),
    resetMessage = _.getElementById('reset-message'),

    handleMenu = function (e){
        if(menu.className === 'hidden'){
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    },

    reset = function (){
        menu.classList.add('hidden');
        for(let i = 1; i < menuItems.length; i++){
            menuItems[i].classList.remove('hidden');
        }
        resetMessage.classList.add('hidden');
    },

removeMenuItem = function (e){
    e.target.classList.add('hidden');
    resetMessage.classList.remove('hidden');
}
;

mainBtn.addEventListener('dblclick',reset);
mainBtn.addEventListener('click',handleMenu);
for(let i = 1; i < menuItems.length; i++){
    menuItems[i].addEventListener('click',removeMenuItem);
}

//Task Two

const  paragraphs = _.querySelectorAll('.paragraph'),
    selectedParagraphs = _.getElementsByClassName('active'),

    changeBackgroundBtn = _.querySelector('#change-background'),

    selectParagraph = function(e){
        e.target.classList.add('active');
    }, 
    
    changeBackgroundColor = function(e) {
        for(let i = 0; i < selectedParagraphs.length; i++){
            selectedParagraphs[i].classList.add('bg');
        }
        console.log(selectedParagraphs)
    }
    ;

for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].addEventListener('click',selectParagraph);
}

changeBackgroundBtn.addEventListener('click',changeBackgroundColor);
 
//Task Three


const hoverArea = _.querySelector('#hover'),
    bold = _.querySelectorAll('.bold'),
    highlight = function (e) {
        for(let i = 0; i < bold.length; i++){
            bold[i].classList.add('highlight');
        }
    }
;
hoverArea.addEventListener('mouseover',highlight);