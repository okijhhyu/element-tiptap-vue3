import { Editor, Extension } from '@tiptap/core';
import {
  DEFAULT_FONT_SIZES,
  convertToPX,
  DEFAULT_FONT_SIZE,
} from '@/utils/font-size';
import FontSizeDropdown from '@/components/MenuCommands/FontSizeDropdown.vue';
import TextStyle from '@tiptap/extension-text-style';

export type FontSizeOptions = {
  types: string[];
};

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (fontSize: string) => ReturnType;
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType;
    };
  }
}

const FontSize = Extension.create<FontSizeOptions>({
  name: 'fontSize',

  addOptions() {
    return {
      types: ['textStyle'],
      fontSizes: DEFAULT_FONT_SIZES,
      buttonIcon: '',
      button({ editor, extension }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: FontSizeDropdown,
          componentProps: {
            editor,
            buttonIcon: extension.options.buttonIcon,
          },
        };
      },
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => convertToPX(element.style.fontSize) || '',
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return {
                style: `font-size: ${attributes.fontSize}px`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
          ({ chain }) => {
            return chain().setMark('textStyle', { fontSize }).run();
          },
      unsetFontSize:
        () =>
          ({ chain }) => {
            return chain()
              .setMark('textStyle', { fontSize: DEFAULT_FONT_SIZE })
              .removeEmptyTextStyle()
              .run();
          },
    };
  },
  nessesaryExtensions: [TextStyle],
});

export default FontSize;
