/* Auteur : Jeffren || 19/06/2023 */

var bks = document.querySelector('.bookService');
var menu = document.querySelector('header');
var btnBook = document.querySelector('#bookServ');
var serv = document.querySelector('#service');


window.onscroll = () => {

    if(window.scrollY > 30){
        menu.style.backgroundColor = '#fff';
        menu.style.boxShadow = '1px 1px 1px 1px rgba(217, 217, 217, 1)';
        btnBook.style.opacity = '1';
    }
    else{
        menu.style.backgroundColor = 'transparent';
        menu.style.boxShadow = '1px 1px 1px 1px transparent'; 
        btnBook.style.opacity = '0';
    }
}

btnBook.onmouseover = () => {
    bks.style.display = 'flex';
}
serv.onmouseover = () => {
    bks.style.display = 'flex';
    bks.style.right = '950px';
}
btnBook.onmouseout = () => {
    bks.style.display = 'none';
}
serv.onmouseout = () => {
    bks.style.display = 'none';
    bks.style.right = '130px';
}