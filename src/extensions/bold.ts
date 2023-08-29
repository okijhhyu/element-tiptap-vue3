import type { Editor } from '@tiptap/core';
import TiptapBold from '@tiptap/extension-bold';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Bold = TiptapBold.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      commandList:
        [{
          title: 'bold',
          command: ({ editor, range }:any) => {
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .toggleBold()
              .run();
          },
          disabled: false,
          isActive(editor:Editor) { return editor.isActive('bold'); }
        }],
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleBold();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('bold'),
            icon: 'bold',
            tooltip: t('editor.extensions.Bold.tooltip'),
          },
        };
      },
    };
  },
});

export default Bold;
