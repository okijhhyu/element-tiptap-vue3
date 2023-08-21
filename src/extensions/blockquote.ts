import type { Editor } from '@tiptap/core';
import TiptapBlockquote from '@tiptap/extension-blockquote';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
export interface BlockquoteOptions {
  buttonIcon: string;
}
const Blockquote = TiptapBlockquote.extend<BlockquoteOptions>({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleBlockquote();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('blockquote'),
            icon: 'quote-right',
            tooltip: t('editor.extensions.Blockquote.tooltip'),
          },
        };
      },
    };
  },
});

export default Blockquote;
