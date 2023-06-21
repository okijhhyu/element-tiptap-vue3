<p align="center"><a href="https://github.com/Leecason/element-tiptap" target="_blank" rel="noopener noreferrer"><img src="/demos/assets/logo_for_github.png?raw=true" alt="ElTiptap logo"></a></p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/element-tiptap">
  <img alt="GitHub Release Date" src="https://img.shields.io/badge/release%20date%20-May%202023-yellowgreen">
  <img alt="npm peer dependency version" src="https://img.shields.io/badge/vue%20-3.0.0-brightgreen">
  <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  <img alt="GitHub" src="https://img.shields.io/github/license/Leecason/element-tiptap">
</p>

<h3 align="center">Element Tiptap Editor</h3>

A WYSIWYG rich-text editor using [tiptap](https://github.com/ueberdosis/tiptap) and [Element Plus](https://github.com/element-plus/element-plus) for Vue3

that's easy to use, friendly to developers, fully extensible and clean in design.

It' s version of alpha tiptap 2.0.1 with fixed bugs and repaire previous functionality. Also deleted most warns in console while using.

It' s final version of lib i fixed all bugs, which i saw, welcome issues if you found bugs or warnings, i will try to fix it.

I only done fix bugs and corrected some extentions and delete warnings [original](https://github.com/Leecason/element-tiptap)

if you are Russian company you can refer me job (okijhhyu@gmail.com)

English

## 🎄 Demo

👾[Code Sandbox](https://codesandbox.io/s/element-tiptapt-vue3-element-plus-7xw4pf?file=/src/)

## ✨ Features

- 🎨Use [element-plus](https://github.com/element-plus/element-plus) components
- 💅Many out of box [extensions](https://github.com/okijhhyu/element-tiptap-vue3#extensions) (welcome to submit an issue for feature request👏)
- 🔖Markdown support
- 📘TypeScript support
- 🌐I18n support(`en`, `zh`, `pl`, `ru`, `de`, `ko`, `es`, `zh_tw`, `fr`, `pt_br`, `nl`, `he`). welcome to contribute more languages
- 🎈Events you might use: `create`, `transaction`, `focus`, `blur`, `destroy`
- 🍀Fully extensible, you can customize editor extension and its menu button view
- 💻Also can control the behavior of the editor directly, customize the editor for yourself.

## 📦 Installation

### NPM

```shell
npm i element-tiptap-vue3-fixed
```

#### Install plugin

```js
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import ElementTiptapPlugin from 'element-tiptap-vue3-fixed';
// import ElementTiptap's styles
import 'element-tiptap-vue3-fixed/lib/style.css';

const app = createApp(App);

// use ElementPlus's plugin
app.use(ElementPlus);
// use this package's plugin
app.use(ElementTiptapPlugin);
// Now you register `'el-tiptap'` component globally.

app.mount('#app');
```

_Or_

#### Partial import

```vue
<template>
  <el-tiptap ...></el-tiptap>
</template>

<script setup>
import { ElementTiptap } from 'element-tiptap-vue3-fixed';
</script>
```

## 🚀 Usage

```vue
<template>
  <el-tiptap v-model:content="content" :extensions="extensions" />
</template>

<script setup>
import { ref } from 'vue';
import {
  // necessary extensions
  Doc,
  Text,
  Paragraph,
  //________________________
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  BulletList,
  OrderedList,
} from 'element-tiptap-vue3-fixed';

// editor extensions
// they will be added to menubar and bubble menu by the order you declare.
const extensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Bold.configure({ bubble: true }), // render command-button in bubble menu.
  Underline.configure({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
  Italic,
  Strike,
  BulletList,
  OrderedList,
];

// editor's content
const content = ref(`
  <h1>Heading</h1>
  <p>This Editor is awesome!</p>
`);
</script>
```

## 📔 Props

### extensions

Type: `Array`

You can use the necessary extensions. The corresponding command-buttons will be added by declaring the order of the extension.

All available extensions:

- `Doc`
- `Text`
- `Paragraph`
- `Heading`
- `Bold`
- `Italic`
- `Strike`
- `Underline`
- `Link`
- `Image`
- `Iframe`
- `CodeBlock`
- `Blockquote`
- `BulletList`
- `OrderedList`
- `TaskList`
- `TextAlign`
- `Indent`
- `LineHeight`
- `HorizontalRule`
- `HardBreak`
- `History`
- `Table`
- `FormatClear`
- `Color`
- `Highlight`
- `Print`
- `Fullscreen`
- `SelectAll`
- `FontFamily`
- `FontSize`
- `CodeView`

You can find all extensions docs [here](https://github.com/Leecason/element-tiptap/issues/107).

### Addendum to the link above
Extention: `Image`

Insert images with original width

```vue
 Image.configure({
    defaultWidth: null
  })
```

Insert images with width: 400px

```vue
 Image.configure({
    defaultWidth: 400
  })
```

You can customize the extension. See [Custom extensions](https://tiptap.dev/guide/custom-extensions).

### setContent

```html
<el-tiptap ref="editor" />
```

```vue
this.$refs.setContent(Content); 
can do reactive, but history brokes so add this function, to change content if necessary.
```
### placeholder

Type: `string`

Default: `''`

When editor is empty, placeholder will display.

```html
<el-tiptap placeholder="Write something …" />
```

### content

Type: `object` for output json

Default: `''`

Type: `string` for output html

Default: `''`

Editor's content

```html
<el-tiptap :content="content" @onUpdate="onEditorUpdate" />
```

or Use `'v-model'`

```html
<el-tiptap v-model:content="content" />
```

### output

Type: `string`

Default: `'html'`

Output can be defined to `'html'` or `'json'`.

```html
<el-tiptap output="json" />
```

further reading: [prosemirror data structure](https://prosemirror.net/docs/guide/#doc)

### readonly

Type: `boolean`

Default: `false`

```html
<el-tiptap readonly />
```

when `readonly` is `true`, editor is not editable.

### spellcheck

Type: `boolean`

Default: `false`

```html
<el-tiptap spellcheck> </el-tiptap>
```

Whether the content is spellcheck enabled.

### width, height

Type: `string | number`

A string value with unit or a simple value (the default unit is **`px`**)：

```html
<el-tiptap :width="700" height="100%"> </el-tiptap>
```

The above example will be converted to:

```css
width: 700px;
height: 100%;
```

### enableCharCount

Type: `boolean`

Default: `true`

Enables or disables the display of the character counter.

### tooltip

Type: `boolean`

Default: `true`

Control if tooltips are shown when getting with mouse over the buttons from the toolbar.

### locale

Specifies the editor i18n language.

```js
<template>
  <el-tiptap :lang="en"></el-tiptap>
</template>

<script setup>
import { ElementTiptap } from 'element-tiptap-vue3-fixed';
import en from 'element-tiptap-vue3-fixed/lib/locales/en';
</script>
```

Available languages:

- `en`(default)
- `zh`
- `pl` by @FurtakM
- `ru` by @baitkul
- `de` by @Thesicstar
- `ko` by @Hotbrains
- `es` by @koas
- `zh_tw` by @eric0324
- `fr` by @LPABelgium
- `pt_br` by @valterleonardo
- `nl` by @Arne-Jan
- `he` by @shovalPMS

Welcome contribution.

## 👽 Events

### onCreate

```vue
<template>
  <el-tiptap @onCreate="onCreate" />
</template>

<script setup>
/**
 * the tiptap editor instance
 * see https://tiptap.dev/api/editor
 */
const onCreate = ({ editor }) => {
  // ...
};
</script>
```

### onTransaction, onFocus, onBlur, onDestroy

The same as `onCreate`

## 🏗 Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.


## 📄 License

[MIT](https://github.com/okijhhyu/element-tiptap-vue3/blob/dev/LICENSE)
