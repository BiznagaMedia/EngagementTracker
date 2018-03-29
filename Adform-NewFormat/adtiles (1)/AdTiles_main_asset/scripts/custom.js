/** 
 * The code below is responsible for assigning background images and clickTAGs to panels.
 */
 
 // REUSABLE UTILITIES //
/* CHECK IF IS VALID IMAGE URL */
function isImage(url) {
    return (url && url.match(/\.(jpeg|jpg|gif|png)$/) !== null);
}

/* SET IMAGE AS BACKGROUND */
function setBackgroundImage(elem, background, position, size) {
    if (elem && background) {
        elem.style.background = 'url("' + background + '") no-repeat ' + (position || '50% 50%') + ' / ' + (size || 'cover');
    }
}

/* REMOVES ELEMENTS WHEN IMAGE IS SET AS BACKGROUND */
function removeElems() {
    [].forEach.call(arguments, function(selector) {
        var elem = document.querySelector(selector);
        elem && elem.parentNode.removeChild(elem);
    });
}

[].forEach.call(document.querySelectorAll('.adf-Flip-panel'), function (panel, index) {
    var card = panel.children[0];
    var bg = Adform.getAsset(index + 4);
    if (isImage(bg)) {
        setBackgroundImage(card, bg, '0 0');
        removeElems('.adf-Logo', '.adf-Info', '.adf-PanelTitle');
        card.classList.remove('adf-Border', 'adf-Background');
    }
});

/* Add clickTAGs to each click area with 'adf-clickTAG' class */
[].forEach.call(document.querySelectorAll('.adf-clickTAG'), function (panel, index) {
    panel.addEventListener('click', function () {
        var ctNumber = (index) ? (index + 1) : '';
        window.open(Adform.getVar('clickTAG' + ctNumber), Adform.getVar('landingPageTarget'));
    });
});