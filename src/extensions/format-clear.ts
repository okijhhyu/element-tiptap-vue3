import { ChainedCommands, Extension, UnionCommands } from '@tiptap/core';
import type { Editor } from '@tiptap/core';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    formatClear: {
      formatClear: () => ReturnType;
    };
  }
}

const FormatClear = Extension.create({
  name: 'formatClear',

  addCommands() {
    return {
      formatClear:
        () =>
          ({ chain }) => {
            return chain()
              .focus()
              .clearNodes()
              .unsetAllMarks()
              .run();
          },
    };
  },

  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              console.log(editor);
              editor.commands.formatClear();
            },
            icon: 'clear-format',
            tooltip: t('editor.extensions.FormatClear.tooltip'),
          },
        };
      },
    };
  },
});

export default FormatClear;
