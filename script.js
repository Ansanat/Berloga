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

function familyNumber() {
    gallery_id = 'family';
    i_gallery = 1;
    document.getElementById('zagolovok').textContent = 'Семейный номер';
}
function banya() {
    gallery_id = 'banya';
    i_gallery = 1;
    document.getElementById('zagolovok').textContent = 'Общественная баня';
}
