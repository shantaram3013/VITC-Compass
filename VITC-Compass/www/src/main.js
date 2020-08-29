/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
let App = {}
App.UI = {
    isMenuVisible: false,
    menu: document.getElementById('menu'),
    menuClose: document.getElementById('menu-close'),
    mask: document.getElementById('mask'),
    menuBtn: document.getElementById('menu-btn'),
    menuBtns: document.getElementById('menu-items-wrapper'),
    text: document.getElementById('text'),
    header: document.getElementById('header-text')
}

App.UI.showMask = function () {
    App.UI.mask.style.display = 'block';
}

App.UI.hideMask = function () {
    App.UI.mask.style.display = 'none';
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

App.UI.loadContent = function(title) {
    App.UI.header.innerHTML = title;
    App.UI.text.innerHTML = content[title].text;
}

function onDeviceReady() {
    App.UI.generateMenu();
    App.UI.menuBtn.addEventListener('click', App.UI.showMenu);
    App.UI.menuClose.addEventListener('click', App.UI.hideMenu);
    App.UI.mask.addEventListener('click', function () {
        if (App.UI.isMenuVisible) {
            App.UI.hideMenu();
        }
    })
}

let content = {
    "Home": {
        "text": `I have made an isometric grid of cubes with css3 that bobs up and 
        down on mouseover. It works great on Firefox with a grid size less than about 12 and with Chrome works 
        pretty good under about 18. I have a decent video card and CPU and the thing that is bugging me is why 
        it is so slow to animate just one cube's animations if I make sure I only mouseover one cube. Does my 
        JavaScript need optimisation or is this just to be expected from the current implementation of browser
        CSS3 and JavaScript engines?`
    },
    "Testing": {
        "text": `Notice we set the background-size to the size of the logo element. We have to do that otherwise we’ll just
        see a bit of the upper left of our much larger original SVG image. These numbers are aspect-ratio aware of
        the original size. But you could use a background-size keywords like contain if you want to make sure the
        image will fit and can’t know the parent image will be of the exact right size.`
    }
}

App.UI.generateMenu = function() {
    for (let x of Object.keys(content)) {
        let y = document.createElement('div');
        y.classList.add("menu-item");
        let s = document.createElement('span');
        s.innerHTML = x;
        s.classList.add('menu-item-text');
        y.appendChild(s);
        y.addEventListener('click', function() {
            App.UI.hideMenu();
            App.UI.loadContent(x);
        })

        App.UI.menuBtns.appendChild(y);
    }
}