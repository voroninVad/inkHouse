const catalog = [
      {
         img: './image/france/01.jpg',
         nameAvtor: 'Марсель Руссо',
         nameProd: 'Охота Амура',
         material: 'Холст, масло (50х80)',
         price: 14500,
         filter: 'france',
      },
       {
        img: './image/france/02.jpg',
        nameAvtor: 'Анри Селин',
        nameProd: 'Дама с собачкой',
        material: 'Акрил, бумага (50х80)',
        price: 16500,
        filter: 'france',
       },
       {
        img: './image/france/03.jpg',
        nameAvtor: 'Франсуа Дюпон',
        nameProd: 'Процедура',
        material: 'Цветная литография (40х60)',
        price: 20000,
        filter: 'france',
       },
       {
        img: './image/france/04.jpg',
        nameAvtor: 'Луи Детуш',
        nameProd: 'Роза',
        material: 'Бумага, акрил (50х80)',
        price: 12000,
        filter: 'france',
       },
       {
        img: './image/france/05.jpg',
        nameAvtor: 'Франсуа Дюпон',
        nameProd: 'Птичья трапеза',
        material: 'Цветная литография (40х60)',
        price: 22500,
        filter: 'france',
       },
       {
        img: './image/france/06.jpg',
        nameAvtor: 'Пьер Моранж',
        nameProd: 'Пейзаж с рыбой',
        material: 'Цветная литография (40х60)',
        price: 20000,
        filter: 'france',
       },
       {
         img: './image/germany/01.jpg',
         nameAvtor: 'Курт Вернер',
         nameProd: 'Над городом',
         material: 'Цветная литография (40х60)',
         price: 16000,
         filter: 'germany hide',
        },
        {
         img: './image/germany/02.jpg',
         nameAvtor: 'Макс Рихтер',
         nameProd: 'Птенцы',
         material: 'Холст, масло (50х80)',
         price: 14500,
         filter: 'germany hide',
        },
        {
         img: './image/germany/03.jpg',
         nameAvtor: 'Мартин Майер',
         nameProd: 'Среди листьев',
         material: 'Цветная литография (40х60)',
         price: 20000,
         filter: 'germany hide',
        },
        {
         img: './image/germany/04.jpg',
         nameAvtor: 'Герман Беккер',
         nameProd: 'Яркая птица',
         material: 'Цветная литография (40х60)',
         price: 13000,
         filter: 'germany hide',
        },
        {
         img: './image/germany/05.jpg',
         nameAvtor: 'Вульф Бауэр',
         nameProd: 'Дятлы',
         material: 'Бумага, акрил (50х80)',
         price: 20000,
         filter: 'germany hide',
        },
        {
         img: './image/germany/06.jpg',
         nameAvtor: 'Вальтер Хартманн',
         nameProd: 'Большие воды',
         material: 'Бумага, акрил (50х80)',
         price: 23000,
         filter: 'germany hide',
        },
        {
         img: './image/england/01.jpg',
         nameAvtor: 'Пол Смит',
         nameProd: 'Дикий зверь',
         material: 'Акварель, бумага (50х80)',
         price: 19500,
         filter: 'england hide',
        },
        {
         img: './image/england/02.jpg',
         nameAvtor: 'Джон Уайт',
         nameProd: 'Скалистый берег',
         material: 'Цветная литография (40х60)',
         price: 17500,
         filter: 'england hide',
        },
        {
         img: './image/england/03.jpg',
         nameAvtor: 'Джим Уотсонт',
         nameProd: 'Река и горы',
         material: 'Акварель, бумага (50х80)',
         price: 20500,
         filter: 'england hide',
        },
        {
         img: './image/england/04.jpg',
         nameAvtor: 'Юджин Зиллион',
         nameProd: 'Белый попугай',
         material: 'Цветная литография (40х60)',
         price: 15500,
         filter: 'england hide',
        },
        {
         img: './image/england/05.jpg',
         nameAvtor: 'Эрик Гиллман',
         nameProd: 'Ночная рыба',
         material: 'Бумага, акрил (50х80)',
         price: 12500,
         filter: 'england hide',
        },
        {
         img: './image/england/06.jpg',
         nameAvtor: 'Альфред Барр',
         nameProd: 'Рыжий кот',
         material: 'Цветная литография (40х60)',
         price: 21000,
         filter: 'england hide',
        },
    ]

    document.getElementById('catalog').innerHTML = catalog.map((el =>`
               <article  id="card" class="card ${el.filter}">
                  <img src="${el.img}" alt="${el.nameAvtor}">
                  <div class="card_content">
                        <span class="name_avtor">${el.nameProd}</span>
                        <div class="info_product">
                           <h3 class="name_product">${el.nameAvtor}</h3>
                           <p class="material">${el.material}</p>
                        </div>
                        <div class="price_product">${el.price} руб</div>
                  </div>
                  <button class="cart_btn">В корзику</button>      
               </article>`)).join("\n");


const list = document.querySelector('.items_panel'),
      items = document.querySelectorAll('.card');

function filter(){
   list.addEventListener('click', event => {
      if(event.target.tagName !== 'LI') return false;
      const filterClass = event.target.dataset.f
      items.forEach(elem => {
         elem.classList.remove('hide');
   
         if(!elem.classList.contains(filterClass)){
            elem.classList.add('hide');
         }
      })
   })
}

filter();
