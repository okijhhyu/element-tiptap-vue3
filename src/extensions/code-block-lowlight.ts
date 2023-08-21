import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import type { Editor } from '@tiptap/core';
import TiptapCodeBlockLowlight from '@tiptap/extension-code-block-lowlight';

export default TiptapCodeBlockLowlight.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      lowlight: {},
      defaultLanguage: null,
      buttonIcon: '',
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
            tooltip: t('editor.extensions.CodeBlock.tooltip')
          }
        };
      }
    };
  }
});
