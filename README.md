# new_title

The new_title magic property!

Change/Update the title of your document by editing `window.new_title`.

---

## 🔧 Install

```
$ npm install new_title
```
```js
require("new_title");
```
or
```html
<script src="https://unpkg.com/new_title/dist/new_title.min.js" />
```

## ✏️ How to use

### Direct change

Just assign a string! 🙃

```js
window.new_title = "New title! 🏆";
```

### Change on event!

Assign an array with 3 elements:

1. new value you want to assign to the title
2. event
3. css selector

```js
 window.new_title = ['On click title!', 'click', '.myClass'];
```

This will add a listener to the element `.myClass` and the title will change when element is clicked!
