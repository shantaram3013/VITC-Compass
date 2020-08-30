// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function init() {
    App.UI.generateMenu();
    App.UI.loadContent("Home");
    App.UI.menuBtn.addEventListener('click', App.UI.showMenu);
    App.UI.menuClose.addEventListener('click', App.UI.hideMenu);
    App.UI.mask.addEventListener('click', function () {
        if (App.UI.isMenuVisible) {
            App.UI.hideMenu();
        }
    });
    App.UI.hideSplash();
    App.UI.hideMask();
    App.UI.mask.style.opacity = '0.6';
}

function onDeviceReady() {
    setTimeout(init, 2000);

}
App.UI.generateMenu = function () {
    for (let x of Object.keys(App.content)) {
        let y = document.createElement('div');
        y.classList.add("menu-item");
        let s = document.createElement('span');
        s.innerHTML = x;
        s.classList.add('menu-item-text');
        y.appendChild(s);
        y.addEventListener('click', function () {
            App.UI.hideMenu();
            App.UI.loadContent(x);
        })

        App.UI.menuBtns.appendChild(y);
    }
}