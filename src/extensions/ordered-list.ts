import type { Editor } from '@tiptap/core';
import TiptapOrderedList from '@tiptap/extension-ordered-list';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import ListItem from './list-item';

const OrderedList = TiptapOrderedList.extend({
  nessesaryExtensions: [ListItem],
  addOptions() {
    return {
      buttonIcon: '',
      ...this.parent?.(),
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleOrderedList();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('orderedList'),
            icon: 'list-ol',
            tooltip: t('editor.extensions.OrderedList.tooltip'),
          },
        };
      },
    };
  },
});

export default OrderedList;
