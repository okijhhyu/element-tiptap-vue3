import type { Editor } from '@tiptap/core';
import TiptapHistory from '@tiptap/extension-history';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const History = TiptapHistory.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: ['', ''],
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return [
          {
            component: CommandButton,
            componentProps: {
              command: () => {
                editor.commands.undo();
              },
              disabled: !editor.can().chain().focus().undo().run(),
              icon: 'undo',
              buttonIcon: extension.options.buttonIcon?.[0],
              tooltip: t('editor.extensions.History.tooltip.undo'),
            },
          },
          {
            component: CommandButton,
            componentProps: {
              command: () => {
                editor.commands.redo();
              },
              disabled: !editor.can().chain().focus().redo().run(),
              icon: 'redo',
              buttonIcon: extension.options.buttonIcon?.[1],
              tooltip: t('editor.extensions.History.tooltip.redo'),
            },
          },
        ];
      },
    };
  },
});

export default History;
