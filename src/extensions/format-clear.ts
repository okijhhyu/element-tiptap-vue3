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
    const commandsMap: Record<string, keyof UnionCommands> = {
      bold: 'unsetBold',
      italic: 'unsetItalic',
      underline: 'unsetUnderline',
      strike: 'unsetStrike',
      link: 'unsetLink',
      fontFamily: 'unsetFontFamily',
      fontSize: 'unsetFontSize',
      color: 'unsetColor',
      highlight: 'unsetHighlight',
      textAlign: 'unsetTextAlign',
      lineHeight: 'unsetLineHeight',
    };

    return {
      formatClear:
        () =>
          ({ editor, chain }) => {
            Object.entries(
              commandsMap
            ).reduce<ChainedCommands>((chain, [name, command]) => {
              const extension = editor.extensionManager.extensions.find(
                (e) => e.name === name
              );
              if (extension) {
                return chain[command]();
              }
              return chain;
            }, chain());

            return chain().focus().run();
          },
    };
  },
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.formatClear();
            },
            buttonIcon: extension.options.buttonIcon,
            icon: 'clear-format',
            tooltip: t('editor.extensions.FormatClear.tooltip'),
          },
        };
      },
    };
  },
});

export default FormatClear;
