/* eslint-disable no-undef */
const os = require('os');

window.addEventListener('DOMContentLoaded', () => { 
    const osPlatform = document.querySelector("#osPlatform");
    const osArchitecture = document.querySelector("#osArchitecture");

    osPlatform.innerHTML = `Platform: <strong>${os.platform()}</strong>`;
    osArchitecture.innerHTML = `Platform: <strong>${os.arch()}</strong>`;
})

