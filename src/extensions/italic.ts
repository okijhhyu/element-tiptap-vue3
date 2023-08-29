import type { Editor } from '@tiptap/core';
import TiptapItalic from '@tiptap/extension-italic';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Italic = TiptapItalic.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      commandList:
      [{
        title: 'italic',
        command: ({ editor, range }:any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .run();
          editor
            .chain()
            .focus()
            .toggleItalic()
            .run();
        },
        disabled: false,
        isActive(editor:Editor) { return editor.isActive('italic'); }
      }],
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleItalic();
            },
            isActive: editor.isActive('italic'),
            icon: 'italic',
            buttonIcon: extension.options.buttonIcon,
            tooltip: t('editor.extensions.Italic.tooltip'),
          },
        };
      },
    };
  },
});

export default Italic;
