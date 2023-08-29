import type { Editor } from '@tiptap/core';
import TiptapUnderline from '@tiptap/extension-underline';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Underline = TiptapUnderline.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      commandList:
      [{
        title: 'underline',
        command: ({ editor, range }:any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .run();
          editor
            .chain()
            .focus()
            .toggleUnderline()
            .run();
        },
        disabled: false,
        isActive(editor:Editor) { return editor.isActive('underline'); }
      }],
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleUnderline();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('underline'),
            icon: 'underline',
            tooltip: t('editor.extensions.Underline.tooltip'),
          },
        };
      },
    };
  },
});

export default Underline;
