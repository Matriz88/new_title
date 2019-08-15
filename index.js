class New_title {

  constructor() {
    let self = this;
    Object.defineProperty(window, 'new_title', {
      writable: false,
      set(val) {
        if (typeof (val) === 'object' && val.length == 3) {
          self.handleEvent(val);
        } else {
          self.changeTitle(val);
        }
      }
    })
  }

  changeTitle(val) {
    document.title = val;
  }

  handleEvent(val) {
    let [text, event, selector] = val;

    if (typeof (text) !== 'string' && typeof (event) !== 'string' && typeof (selector) !== 'string')
      throw "Wrong parameters!";

    const element = document.querySelector(selector);

    if (element) {
      element.addEventListener(event, () => {
        this.changeTitle(text);
      });
    }
  }
}

export default new New_title();
