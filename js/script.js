

function init(){
    let map = new ymaps.Map('map-test', {
        center:[[52.266792294160865,104.3038915811244]], 
        zoom: 19
    })
}

ymaps.ready(init);