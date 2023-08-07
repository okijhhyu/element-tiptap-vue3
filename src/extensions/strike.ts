import type { Editor } from '@tiptap/core';
import TiptapStrike from '@tiptap/extension-strike';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const Strike = TiptapStrike.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
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
