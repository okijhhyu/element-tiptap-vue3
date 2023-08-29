import { Plugin } from 'vue';
import ElementTiptap from '@/components/ElementTiptap.vue';

import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import getSuggestionItems from '@/utils/command-items';
import renderItems from '@/utils/command-list';

const ElementTiptapPlugin: Plugin = {
  install(app) {
    app.component('element-tiptap', ElementTiptap);
    app.component('el-tiptap', ElementTiptap);
  },
};

export * from '@/extensions';

export { ElementTiptapPlugin, ElementTiptap, CommandButton, getSuggestionItems, renderItems };

export default ElementTiptapPlugin;
