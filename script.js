var i_gallery = 1;

function gallery(imgCount, path) {
    document.getElementById('gallery').style.opacity = 0;
    let opacity=0;
    opacityTimer = setInterval(()=>{
        opacity+=0.1;
        document.getElementById('gallery').style.opacity = opacity;
    },70)
    setTimeout(() => {
        clearInterval(opacityTimer);
        if (i_gallery < imgCount)
            i_gallery++;
        else
            i_gallery = 1;
        document.getElementById('gallery').src = path + i_gallery + '.jpg';
    }, 3000);
}