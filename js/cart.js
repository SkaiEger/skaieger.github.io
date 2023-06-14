// Div внутри корзины, в который мы добавляем товары
const cartWrapper =  document.querySelector('.cart-wrapper');

// Отслеживаем клик на странице
window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"
	if (event.target.hasAttribute('data-cart')) {

		// Находим карточку с товаром, внутри котрой был совершен клик
		const card = event.target.closest('.card');

		// Собираем данные с этого товара и записываем их в единый объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		// Проверять если ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		// Если товар есть в корзине
		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {
			// Если товара нет в корзине

			// Собранные данные подставим в шаблон для товара в корзине
			const cartItemHTML = ` <div class="container">
                                        <div class="cart-item item" data-id="${productInfo.id}">
                                            <div class="cart-item__top">
                                                <div class="cart-item__img">
                                                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                                                </div>
                                                <div class="cart-item__desc">
                                                    <h3 class="cart-item__title ptext1"> ${productInfo.title}</h3>
                                                    <div class="price">
                                                        <h3 class="price__currency ptext1"> ${productInfo.price}</h3>
                                                    </div>
                                                    <!-- cart-item__details -->
                                                    <div class="cart-item__details">
                                                    <div class="cart-btn items items--small counter-wrapper">
                                                            <button class="btn1 btn_minus items__control" data-action="minus"> - </button>
                                                            <div class="cart-counter items__current" data-counter="">${productInfo.counter}</div>
                                                            <button class="btn1 btn_plus items__control" data-action="plus"> + </button>
                                                        </div>
                                                    </div>
                                                    <!-- // cart-item__details -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>`;

			// Отобразим товар в корзине
			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

            
		}

		// Сбрасываем счетчик добавленного товара на "1"
		card.querySelector('[data-counter]').innerText = '1';

        

		// Пересчет общей стоимости товаров в корзине
		calcCartPriceAndDelivery();

	}

});
