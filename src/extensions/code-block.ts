import type { Editor } from '@tiptap/core';
import TiptapCodeBlock from '@tiptap/extension-code-block';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const CodeBlock = TiptapCodeBlock.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      commandList:
        [{
          title: 'codeBlock',
          command: ({ editor, range }:any) => {
            editor
              .chain()
              .focus()
              .deleteRange(range)
              .run();
            editor
              .chain()
              .focus()
              .toggleCodeBlock()
              .run();
          },
          disabled: false,
          isActive(editor:Editor) { return editor.isActive('codeBlock'); }
        }],
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleCodeBlock();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('codeBlock'),
            icon: 'code',
            tooltip: t('editor.extensions.CodeBlock.tooltip'),
          },
        };
      },
    };
  },
});

export default CodeBlock;
