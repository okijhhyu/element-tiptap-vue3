import type { Editor } from '@tiptap/core';
import { Extension } from '@tiptap/core';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const SelectAll = Extension.create({
  name: 'selectAll',

  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.chain().focus();
              editor.commands.selectAll();
            },
            buttonIcon: extension.options.buttonIcon,
            icon: 'select-all',
            tooltip: t('editor.extensions.SelectAll.tooltip'),
          },
        };
      },
    };
  },
});

export default SelectAll;
