<template>
  <div class="el-tiptap-editor__wrapper">
    <!-- <el-tiptap lang="ru" :extensions="textExtensions" content="Text Extensions" /> -->

    <el-tiptap
      lang="ru"
      output="html"
      :extensions="allExtensions"
      v-model:content="content1"
    />
    {{ content1 }}
    <el-tiptap
      lang="ru"
      output="json"
      :extensions="allExtensions"
      v-model:content="content1"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      content1: '',
      content2: ''
    };
  },
});
</script>
<script lang="ts" setup>
import {
  Doc,
  Text,
  Paragraph,
  // text extensions
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  FontFamily,
  FontSize,
  Color,
  Highlight,
  FormatClear,
  // paragraph extensions
  Heading,
  BulletList,
  OrderedList,
  TaskList,
  TextAlign,
  LineHeight,
  Indent,
  Blockquote,
  CodeBlock,
  // rich and tools extensions
  Link,
  Image,
  Table,
  Iframe,
  HorizontalRule,
  Fullscreen,
  Print,
  SelectAll,
  History,
  CodeView,
} from 'element-tiptap-vue3-fixed';

import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js';
// autoCloseTags

const textExtensions = [
  Doc,
  Text,
  Paragraph,
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  FontFamily,
  FontSize,
  Color.configure({ bubble: true }),
  Highlight.configure({ bubble: true }),
  FormatClear,
  History,
];

const paragraphExtensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  BulletList,
  OrderedList,
  TaskList,
  TextAlign,
  LineHeight,
  Indent,
  Blockquote,
  CodeBlock,
  History,
];

const richAndToolsExtensions = [
  Doc,
  Text,
  Paragraph,
  Link,
  Image,
  Iframe,
  Table.configure({ resizable: true }),
  HorizontalRule,
  Print,
  SelectAll,
  Fullscreen,
  CodeView.configure({
    codemirror,
    codemirrorOptions: {
      styleActiveLine: true,
      autoCloseTags: true,
    },
  }),
  History,
];
const allExtensions = [
  Doc,
  Text,
  Paragraph,
  Bold.configure({ bubble: true }),
  Underline.configure({ bubble: true }),
  Italic.configure({ bubble: true }),
  Strike.configure({ bubble: true }),
  Code.configure({ bubble: true }), // TODO
  FontFamily.configure({ bubble: true }),
  FontSize, // TODO
  Color.configure({ bubble: true }),
  Highlight.configure({ bubble: true }),
  FormatClear.configure({ bubble: true }), // TODO
  History, // TODO
  Heading.configure({ level: 5, bubble: true }),
  BulletList.configure({ bubble: true }),
  OrderedList, // TODO
  TaskList.configure({ bubble: true }),
  TextAlign.configure({ bubble: true }),
  LineHeight.configure({ bubble: true }),
  Indent.configure({ bubble: true }),
  Blockquote.configure({ bubble: true }),
  CodeBlock.configure({ bubble: true }),
  Link.configure({ bubble: true }),
  Image.configure({ bubble: true }),
  Iframe.configure({ bubble: true }),
  Table.configure({ resizable: true }),
  HorizontalRule.configure({ bubble: true }),
  Print.configure({ bubble: true }),
  SelectAll.configure({ bubble: true }),
  Fullscreen.configure({ bubble: true }),
  CodeView.configure({
    bubble: true,
    codemirror,
    codemirrorOptions: {
      styleActiveLine: true,
      autoCloseTags: true,
    },
  }),
];
</script>
