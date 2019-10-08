class New_title {

  constructor() {
    let self = this;
    Object.defineProperty(window, 'new_title', {
      set(val) {
        if (Array.isArray(val) && val.length == 3) {
          self.handleEvent(val);
        } else if (typeof (val) === 'string') {
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
