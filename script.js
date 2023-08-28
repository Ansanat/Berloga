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
    document.getElementById('helpText').textContent = 'Семейный номер — большой просторный номер в котором могут комфортно расположиться двенадцать человек. Номер площадью 150 м. кв. включает в себя:';
    document.getElementById('helpUl1').textContent = '- Контрастный бассейн размерами 3х3 метра';
    document.getElementById('helpUl2').textContent = '- Парную на 12 человек';
    document.getElementById('helpUl3').textContent = '- Моечное отделение с двумя душевыми';
    document.getElementById('helpUl4').textContent = '- Зону для застолья';
    document.getElementById('helpUl5').textContent = '- Зону караоке';
    resetSelect();
    document.getElementById('familyItem').style.color = '#D2B48C';
    document.getElementById('banyaPrice').style.display = 'none';
    document.getElementById('familyPrice').style.display = 'block';
    document.getElementById('discounts').style.display = 'block';
    document.getElementById('familyWorkMode').style.display = 'block';
    document.getElementById('banyaWorkMode').style.display = 'none';
    document.getElementById('helpBlock').style.height = '300px';
}

function banya() {
    gallery_id = 'banya';
    i_gallery = 1;
    document.getElementById('zagolovok').textContent = 'Общественная баня';
    document.getElementById('helpText').textContent = 'Общее отделение банного комплекса Берлога рассчитано на одновременное посещение пятидесяти человек. Каждому клиенту предоставляется отдельный шкафчик с электронным замком, номер на шкафчике соответствует посадочному месту.';
    document.getElementById('helpUl1').textContent = '- Бассейн 3х6 метров с температурой 28 градусов';
    document.getElementById('helpUl2').textContent = '- Русская парная на 20 человек';
    document.getElementById('helpUl3').textContent = '- Турецкий хамам на 10 человек';
    document.getElementById('helpUl4').textContent = '- Купель с температурой воды 12 градусов';
    document.getElementById('helpUl5').textContent = '- Работает кухня';
    resetSelect();
    document.getElementById('banyaItem').style.color = '#D2B48C';
    document.getElementById('banyaPrice').style.display = 'block';
    document.getElementById('familyPrice').style.display = 'none';
    document.getElementById('discounts').style.display = 'none';
    document.getElementById('familyWorkMode').style.display = 'none';
    document.getElementById('banyaWorkMode').style.display = 'block';
    document.getElementById('helpBlock').style.height = '550px';
}


