
function getElmsByClass(elms) {
    return document.getElementsByClassName(elms);
}

function getElmById(elm) {
    return document.getElementById(elm);
}

function getElmsByTag(elms) {
    return document.getElementsByTagName(elms);
}

function getSelector(elm) {
    return document.querySelector(elm);
}

function getSelectorAll(elm) {
    return document.querySelectorAll(elm);
}

function addEventToElms(elms, event, fn) {
    Array.from(elms).forEach(elm=> {
        elm.addEventListener(event, fn, false);
    }); 
}

function addClassToElms(elms, className) {
    Array.from(elms).forEach(elm=> {
        elm.classList.add(className);
    }); 
}

function removeClassToElms(elms, className) {
    Array.from(elms).forEach(elm=> {
        elm.classList.remove(className);
    }); 
}

function toggleClassToElms(elms, className) {
    Array.from(elms).forEach(elm=> {
        elm.classList.toggle(className);
    }); 
}

export { getElmsByClass, 
        getElmById, 
        getElmsByTag, 
        getSelector, 
        getSelectorAll, 
        addEventToElms, 
        addClassToElms, 
        removeClassToElms, 
        toggleClassToElms };