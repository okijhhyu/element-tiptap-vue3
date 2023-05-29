<template>
  <div class="el-tiptap-editor__wrapper">
    <el-tiptap :extensions="extensions" :content="content" :readonly="true" />
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
  Doc,
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

const content =
  "<p>I' m non-editable now. 😰</p><p></p><p>pass prop <code>readonly: true</code> to the editor.</p>";
</script>
