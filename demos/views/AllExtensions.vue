<template>
  <div class="el-tiptap-editor__wrapper">
    <!-- <el-tiptap lang="ru" :extensions="textExtensions" content="Text Extensions" /> -->

    <el-tiptap
      lang="ru"
      output="html"
      :extensions="allExtensions"
      :content="content1"
      @onUpdate="changeContent1($event)"
    />

    <el-tiptap
      lang="ru"
      output="json"
      :extensions="allExtensions"
      :content="content2"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      content1: '',
      content2: '',
      count: 0
    };
  },
  methods: {
    changeContent1(value) {
      this.content1 = value;
      this.count = this.count + 1;
      if (this.count > 10) {
        this.count = -10;
        this.content1 = '';
      }
      console.log(this.content1, this.count);
    }
  }
});
</script>
<script lang="ts" setup>
import {
  Document,
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
} from 'element-tiptap';

import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js';
// autoCloseTags

const textExtensions = [
  Document,
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
  Document,
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
  Document,
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
  Document,
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
  Heading.configure({ level: 5 }),
  BulletList,
  OrderedList,
  TaskList,
  TextAlign,
  LineHeight,
  Indent,
  Blockquote,
  CodeBlock,
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
];
</script>
