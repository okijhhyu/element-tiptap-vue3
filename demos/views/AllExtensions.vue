<template>
  <div class="el-tiptap-editor__wrapper">
    <!-- <el-tiptap lang="ru" :extensions="textExtensions" content="Text Extensions" /> -->

    <el-tiptap
      lang="ru"
      ref="editor"
      output="html"
      :extensions="allExtensions"
      v-model:content="content1"
      height="50vh"
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
  Gapcursor,
  Dropcursor,
  CodeBlockLowlight
} from 'element-tiptap-vue3-fixed';
import codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css'; // import base style
import 'codemirror/mode/xml/xml.js'; // language
import 'codemirror/addon/selection/active-line.js'; // require active-line.js
import 'codemirror/addon/edit/closetag.js';
// autoCloseTags
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
// load all highlight.js languages
import { lowlight } from 'lowlight';
lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

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
  // Gapcursor,
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
  Code.configure({ bubble: true }),
  FontFamily.configure({ bubble: true }),
  FontSize.configure({ bubble: true }),
  Color.configure({ bubble: true }),
  Highlight.configure({ bubble: true }),
  FormatClear.configure({ bubble: true }),
  History.configure({ depth: 10 }),
  Heading.configure({ level: 5, bubble: true }),
  BulletList.configure({ bubble: true }),
  OrderedList.configure({ bubble: true }),
  TaskList.configure({ bubble: true }),
  TextAlign.configure({ bubble: true }),
  LineHeight.configure({ bubble: true }),
  Indent.configure({ bubble: true }),
  Blockquote.configure({ bubble: true }),
  CodeBlockLowlight.configure({ lowlight }),
  Link.configure({ bubble: true }),
  Image.configure({
    bubble: true,
    defaultWidth: 400,
    draggable: true
  }),
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
  Gapcursor,
  CodeBlock,
  Dropcursor
];
</script>
<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  pre {
    background: #0d0d0d;
    border-radius: 0.5rem;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }
}

</style>
