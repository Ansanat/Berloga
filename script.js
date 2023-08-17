var i_gallery = 1;
var gallery_id = 'banya';

function gallery(imgCount, id) {
    document.getElementById(id).style.opacity = 0;
    let opacity=0;
    opacityTimer = setInterval(()=>{
        opacity+=0.1;
        document.getElementById(id).style.opacity = opacity;
    }, 70)
    setTimeout(() => {
        clearInterval(opacityTimer);
        if (i_gallery < imgCount)
            i_gallery++;
        else
            i_gallery = 1;
        document.getElementById(id).src = 'images/' + gallery_id + '/Image' + i_gallery + '.jpg';
    }, 3000);
}

function resetSelect() {
    document.getElementById('banyaItem').style.color = 'white';
    document.getElementById('familyItem').style.color = 'white';
}

function familyNumber() {
    gallery_id = 'family';
    i_gallery = 1;
    document.getElementById('zagolovok').textContent = 'Семейный номер';
    document.getElementById('helpText').textContent = 'Семейный номер — большой просторный номер в котором могут комфортно расположиться двенадцать человек.';
    resetSelect();
    document.getElementById('familyItem').style.color = '#D2B48C';
}

function banya() {
    gallery_id = 'banya';
    i_gallery = 1;
    document.getElementById('zagolovok').textContent = 'Общественная баня';
    document.getElementById('helpText').textContent = 'Общее отделение банного комплекса Берлога рассчитано на одновременное посещение пятидесяти человек. Каждому клиенту предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту.';
    resetSelect();
    document.getElementById('banyaItem').style.color = '#D2B48C';
}


