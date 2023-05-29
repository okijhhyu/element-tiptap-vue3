<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" />
  </div>
</template>

<script setup>
import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  BulletList,
  OrderedList,
  TextAlign,
  Indent,
  History,
} from 'element-tiptap-vue3-fixed';

const extensions = [
  Doc.configure({ title: true }),
  Text,
  Paragraph,
  Heading.configure({ level: 3 }),
  Bold,
  Underline,
  Italic,
  Strike,
  Code,
  TextAlign,
  BulletList,
  OrderedList,
  Indent,
  History,
];
const content = '<h1>Title Line</h1><p>The body content</p>';

</script>
