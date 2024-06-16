const catalog = [
       {
        img: './image/02.jpg',
        nameAvtor: 'Анри Селин',
        nameProd: 'Дама с собачкой',
        material: 'Акрил, бумага (50х80)',
        price: 16500,
       },
       {
        img: './image/03.jpg',
        nameAvtor: 'Франсуа Дюпон',
        nameProd: 'Процедура',
        material: 'Цветная литография (40х60)',
        price: 20000,
       },
       {
        img: './image/04.jpg',
        nameAvtor: 'Луи Детуш',
        nameProd: 'Роза',
        material: 'Бумага, акрил (50х80)',
        price: 12000,
       },
       {
        img: './image/05.jpg',
        nameAvtor: 'Франсуа Дюпон',
        nameProd: 'Охота Амура',
        material: 'Цветная литография (40х60)',
        price: 22500,
       },
       {
        img: './image/06.jpg',
        nameAvtor: 'Пьер Моранж',
        nameProd: 'Пейзаж с рыбой',
        material: 'Цветная литография (40х60)',
        price: 20000,
       },
    ]

    const tmpl = document.getElementById('card');

    const makeCard = ({ img, nameAvtor, nameProd,material,price }) => {
    const card = tmpl.cloneNode(true);
    card.querySelector('img').src = img;
    card.querySelector('span.name_avtor').innerText = nameAvtor;
    card.querySelector('h3.name_product').innerText = nameProd;
    card.querySelector('p.material').innerText = material;
    card.querySelector('div.price_product').innerText = price + ' руб';
    return card;
    }


    const fragment = new DocumentFragment();
    catalog.forEach(cardData => fragment.append(makeCard(cardData)));
    document.querySelector('.catalog').appendChild(fragment);
