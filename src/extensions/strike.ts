import type { Editor } from '@tiptap/core';
import TiptapStrike from '@tiptap/extension-strike';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Strike = TiptapStrike.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      commandList:
      [{
        title: 'strike',
        command: ({ editor, range }:any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .run();
          editor
            .chain()
            .focus()
            .toggleStrike()
            .run();
        },
        disabled: false,
        isActive(editor:Editor) { return editor.isActive('strike'); }
      }],
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleStrike();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('strike'),
            icon: 'strikethrough',
            tooltip: t('editor.extensions.Strike.tooltip'),
          },
        };
      },
    };
  },
});

export default Strike;
