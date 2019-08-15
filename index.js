(function () {
  Object.defineProperty(window, 'new_title', {
    set(val) {
      document.title = val;
      value = val;
    }
  })
})()
