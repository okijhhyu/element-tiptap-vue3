import { Extension } from '@tiptap/core';
import type { Editor } from '@tiptap/core';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import { createIndentCommand, IndentProps } from '@/utils/indent';

export interface IndentOptions {
  types: string[];
  minIndent: number;
  maxIndent: number;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    indent: {
      /**
       * Set the indent attribute
       */
      indent: () => ReturnType;
      /**
       * Set the outdent attribute
       */
      outdent: () => ReturnType;
    };
  }
}

const Indent = Extension.create<IndentOptions>({
  name: 'indent',

  addOptions() {
    return {
      buttonIcon: ['', ''],
      types: ['paragraph', 'heading', 'blockquote'],
      minIndent: IndentProps.min,
      maxIndent: IndentProps.max,
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return [
          {
            component: CommandButton,
            componentProps: {
              command: () => {
                editor.commands.indent();
              },
              buttonIcon: extension.options.buttonIcon?.[0],
              icon: 'indent',
              tooltip: t('editor.extensions.Indent.buttons.indent.tooltip'),
            },
          },
          {
            component: CommandButton,
            componentProps: {
              command: () => {
                editor.commands.outdent();
              },
              icon: 'outdent',
              buttonIcon: extension.options.buttonIcon?.[1],
              tooltip: t('editor.extensions.Indent.buttons.outdent.tooltip'),
            },
          },
        ];
      },
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (element) => {
              const identAttr = element.getAttribute('data-indent');
              return (identAttr ? parseInt(identAttr, 10) : 0) || 0;
            },
            renderHTML: (attributes) => {
              if (!attributes.indent) {
                return {};
              }

              return { 'data-indent': attributes.indent };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      indent: () =>
        createIndentCommand({
          delta: IndentProps.more,
          types: this.options.types,
        }),
      outdent: () =>
        createIndentCommand({
          delta: IndentProps.less,
          types: this.options.types,
        }),
    };
  },

  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      'Shift-Tab': () => this.editor.commands.outdent(),
    };
  },
});

export default Indent;
