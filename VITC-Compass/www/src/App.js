Array.prototype.remove = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
}

let App = {}

App.UI = {
    isMenuVisible: false,
    menu: document.getElementById('menu'),
    menuClose: document.getElementById('menu-close'),
    mask: document.getElementById('mask'),
    menuBtn: document.getElementById('menu-btn'),
    menuBtns: document.getElementById('menu-items-wrapper'),
    text: document.getElementById('text'),
    header: document.getElementById('header-text'),
    splash: document.getElementById('splash')
}

App.UI.showMask = function () {
    App.UI.mask.style.display = 'block';
}

App.UI.hideMask = function () {
    App.UI.mask.style.display = 'none';
}

App.UI.showSplash = function () {
    App.UI.splash.style.display = 'block';
}

App.UI.hideSplash = function () {
    App.UI.splash.style.display = 'none';
}

App.UI.showMenu = function () {
    App.UI.isMenuVisible = true;
    App.UI.showMask();
    App.UI.menu.style.display = 'block';
    App.UI.menu.style.animation = '0.25s linear menu-slide-in';
    setTimeout(function () {
        App.UI.menu.style.animation = '';
    }, 250);
}

App.UI.hideMenu = function () {
    App.UI.isMenuVisible = false;
    App.UI.hideMask();
    App.UI.menu.style.animation = '0.25s linear menu-slide-out';
    setTimeout(function () {
        App.UI.menu.style.animation = '';
        App.UI.menu.style.display = 'none';
    }, 250);
}

App.UI.loadContent = function (title) {
    App.UI.header.innerHTML = title;
    App.UI.text.innerHTML = App.content[title].text;
}

App.UI.showMask();
App.UI.mask.style.opacity = '1';
