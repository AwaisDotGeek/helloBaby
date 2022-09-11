$(document).ready(function() {
    $('.nav-profile-img').click(
        function(){
            try {
                if($('#nav-items-for-small-screens-container').attr('class').split(' ').includes('show-small-screen-nav-items')){
                    $('#nav-items-for-small-screens-container').toggleClass('show-small-screen-nav-items');
                }   
            } catch (error) {
            }
            var logout = $('.logout');
            if(document.querySelector('.navbar').clientWidth <= 480){
                logout.toggleClass('make-logout-visible-small-screens');
            } else {
                $('.logout').toggleClass('make-logout-visible');
            }
        }
    );

    $('#navbar-toggler').click(
        function(){
            try {
                if($('.logout').attr('class').split(' ').includes('make-logout-visible')){
                    $('.logout').toggleClass('make-logout-visible');   
                } else if ($('.logout').attr('class').split(' ').includes('make-logout-visible-small-screens')){
                    $('.logout').toggleClass('make-logout-visible-small-screens');
                }
            } catch (error) {
            }
            $('#nav-items-for-small-screens-container').toggleClass('show-small-screen-nav-items');
        }
    );
    
    $('.location-link').hover(
        function(){
            $(this).find('.fa-location-dot').addClass('location-mark');
            $(this).parent().find('.location-img').css({"visibility": "hidden"});
        },
        function(){
            $(this).find('.fa-location-dot').removeClass('location-mark');
            $(this).parent().find('.location-img').css({"visibility": "visible"});
        }
    );

    $('.pop-cat-img-shadow').hover(
        function(){
            $(this).css({"opacity": 0.4});
        },
        function(){
            $(this).css({"opacity": 0});
        }
    );
    $('.category-img-text').hover(
        function(){
            $(this).parent().find('.pop-cat-img-shadow').css({"opacity": 0.4});
        }
    );

    $('.recent-images-img').hover( 
        function(){
            $(this).parent().parent().find('.recent-img-shadow-and-links').toggleClass('make-recent-img-shadow-and-links-visible');
        }
    );
});

// Applying red left border for each link on navs' left side
let navbarLeftLinks = document.getElementsByClassName("nav-left-link");

function makeClickedLinkActive(a){
    for(var i = 0; i < navbarLeftLinks.length; i++){
        navbarLeftLinks[i].classList.remove('active-link');
    }
    a.classList.add("active-link");
}

for(var i = 0; i < navbarLeftLinks.length; i++){
    navbarLeftLinks[i].addEventListener('click', function(e){
        makeClickedLinkActive(e.target);
    }, false);
}
// ----------------------------------------------------------

// ---------------------------------------------------------------

// Keep the search box in home page at center
function getSearchBoxCentered(){
    let searchBoxContainer = document.querySelector('.search-box');
    let searchBoxWidth = searchBoxContainer.clientWidth;
    let searchBoxHeight = searchBoxContainer.clientHeight;

    // the code to center
    searchBoxContainer.style.marginTop = ((-(searchBoxHeight / 2)) + "px");
    searchBoxContainer.style.marginLeft = ((-(searchBoxWidth / 2)) + "px");
}

getSearchBoxCentered();

// Also call the function on window resize event
var myBody = document.getElementById('home-page');
window.onload = function(){
    getSearchBoxCentered();
    getImgTextCentered();
}
myBody.onresize = function(){
    getSearchBoxCentered();
    getImgTextCentered();
    showPossibleCards();
}

// ------------------------------------------------------------------

// keep the img-text in categories centered
function  getImgTextCentered(){
    let imgTextList = document.getElementsByClassName('category-img-text');
    for(var i = 0; i < imgTextList.length; i++){
        let text = imgTextList[i];
        let textWidth = text.clientWidth;
        let textHeight = text.clientHeight;

        text.style.marginLeft = (-(textWidth / 2)) + "px";
        text.style.marginTop = (-(textHeight / 2)) + "px";
    }
}

getImgTextCentered();

// --------------------------------------------------------------------

// -------------------------------------------------------------------

// Dealing with featured artists cards
function showPossibleCards(){
    var cards = document.querySelectorAll('.my-card');
    var screenWidth = window.innerWidth;

    if(screenWidth > 1200){
        for(var i = 0; i < cards.length; i++){
            cards[i].style.display = 'grid';
            cards[i].style.width = '20%';
        }
    } else if(screenWidth < 1200 && screenWidth > 980){
        for(var i = 0; i < cards.length; i++){
            cards[i].style.display = 'grid';
            cards[i].style.width = '20%';
        }
    } else if (screenWidth < 980 && screenWidth > 800){
        for(var i = 0; i < 3; i++){
            cards[i].style.display = 'grid';
        }
        for(var i = 3; i < cards.length; i++){
            cards[i].style.display = 'none';
        }
        for(var i = 0; i < 3; i++){
            cards[i].style.width = '25%';
        }
    } else if (screenWidth < 800 && screenWidth > 650){
        for(var i = 0; i < 2; i++){
            cards[i].style.display = 'grid';
        }
        for(var i = 2; i < cards.length; i++){
            cards[i].style.display = 'none';
        }
        for(var i = 0; i < 3; i++){
            cards[i].style.width = '35%';
        }
    } else {
        for(var i = 1; i < cards.length; i++){
            cards[i].style.display = 'none';
        }
        for(var i = 0; i < 3; i++){
            cards[i].style.width = '80%';
        }
    }

    if(screenWidth <= 450){
        var cardsContainer = document.querySelector('.cards');
        cardsContainer.style.padding = "1em 0.2em";
    } else {
        var cardsContainer = document.querySelector('.cards');
        cardsContainer.style.padding = "1.5em 3em";
    }
}

showPossibleCards();

// Dealing the logout page transition
var currentUserIcon = document.querySelectorAll('.current-user'); // we have 2 (for small and large screen)
currentUserIcon.forEach(icon => icon.onclick = function() {
    var logoutPage = document.querySelector('.logout');
    clickedUserIcon = currentUserIcon;
    if(logoutPage.classList.contains('logout-open-transition')){
        logoutPage.classList.remove('logout-open-transition');
        logoutPage.classList.add('logout-close-transition')
    } else {
        logoutPage.classList.remove('logout-close-transition')
        logoutPage.classList.add('logout-open-transition');
    }
});

// Dealing with the location of logout page
// var navOne = document.querySelector('.navbar-1');
// var navOneWidth = navOne.clientWidth;
// if(){
    
// }
// console.log(clickedUserIcon);
