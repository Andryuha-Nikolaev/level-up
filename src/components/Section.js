export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._initialArray = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  //перебирает массив данных _initialArray. Вызывает для каждого элемента функцию переданную в renderer
  renderItems() {
    // Переберем массив _initialArray с начальными карточками
    this._initialArray.forEach((item) => {
      this._renderer(item);
    });
  }

  //принимает параметр element и вставляет его в контейнер методом append
  addItem(element) {
    this._container.prepend(element);
  }
}
