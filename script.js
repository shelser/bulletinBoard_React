const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
  {
    id: 0,
    title: "Первый товар",
    price: '170 р',
    address: "Казань, р-н Вахитовский",
    date: "10 июля",
    img: "./image/card-image.png",
  },
  {
    id: 1,
    title: "Второй товар",
    price: '171 р',
    address: "Казань, р-н Вахитовский",
    date: "10 июля",
    img: "./image/card-image.png",
  },
  {
    id: 2,
    title: "Третий товар",
    price: '172 р',
    address: "Казань, р-н Вахитовский",
    date: "10 июля",
    img: "./image/card-image.png",
  },
  {
    id: 3,
    title: "Четвертый товар",
    price: '173 р',
    address: "Казань, р-н Вахитовский",
    date: "10 июля",
    img: "./image/card-image.png",
  },
  {
    id: 4,
    title: "Пятый товар",
    price: '174 р',
    address: "Казань, р-н Вахитовский",
    date: "10 июля",
    img: "./image/card-image.png",
  },
  {
    id: 5,
    title: "Шестой товар",
    price: '175 р',
    address: "Казань, р-н Вахитовский",
    date: "10 июля",
    img: "./image/card-image.png",
  },
];

const render = (cardLists) => {
  cardWrapper.innerHTML = '';

  cardLists.forEach((list, idx) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <a href="product.html" class="content-main__list-item">
          <div class="content-main__list-item--img">
            <img src=${list.img} alt=${list.title}>
          </div>
          <h5 class="content-main__list-item--title">${list.title}</h5>
          <strong class="content-main__list-item--price">
            ${list.price}
          </strong>
          <div class="content-main__list-item--desc-box">
            <span class="content-main__list-item--desc">
              ${list.address}
            </span>
            <span class="content-main__list-item--desc">
              ${list.date}
            </span>
          </div>
        </a>
      `
    );
  });
};

const filteredArray = (array, value) => {
  return array.filter((item) => (item.title.includes(value) || item.price.includes(value)))
};

cardWrapper.style.justifyContent = 'flex-start';
cardWrapper.style.gap = '30px';


render(cardArray);

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value));
});
