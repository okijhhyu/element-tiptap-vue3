import { Editor, Extension } from '@tiptap/core';
import { getMarkAttributes } from '@tiptap/vue-3';
import { DEFAULT_FONT_FAMILY_MAP } from '@/utils/font-type';
import FontFamilyDropdown from '@/components/MenuCommands/FontFamilyDropdown.vue';
import TextStyle from '@tiptap/extension-text-style';

export type FontFamilyOptions = {
  types: string[];
};

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    fontFamily: {
      /**
       * Set the font family
       */
      setFontFamily: (fontFamily: string) => ReturnType;
      /**
       * Unset the font family
       */
      unsetFontFamily: () => ReturnType;
    };
  }
}

const FontFamily = Extension.create<FontFamilyOptions>({
  name: 'fontFamily',

  addOptions() {
    return {
      types: ['textStyle'],
      fontFamilyMap: DEFAULT_FONT_FAMILY_MAP,
      buttonIcon: '',
      commandList: Object.keys(DEFAULT_FONT_FAMILY_MAP).map(key => {
        return {
          title: `fontFamily ${key}`,
          command: ({ editor, range }:any) => {
            if (key === getMarkAttributes(editor.state, 'textStyle').fontFamily || '') {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .unsetFontFamily()
                .run();
            } else {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setFontFamily(key)
                .run();
            }
          },
          disabled: false,
          isActive(editor:Editor) { return key === getMarkAttributes(editor.state, 'textStyle').fontFamily || ''; }
        };
      }),
      button({ editor, extension }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: FontFamilyDropdown,
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
          fontFamily: {
            default: null,
            parseHTML: (element) =>
              element.style.fontFamily.replace(/['"]/g, ''),
            renderHTML: (attributes) => {
              if (!attributes.fontFamily) {
                return {};
              }

              return {
                style: `font-family: ${attributes.fontFamily}`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontFamily:
        (fontFamily) =>
          ({ chain }) => {
            return chain().setMark('textStyle', { fontFamily }).run();
          },

      unsetFontFamily:
        () =>
          ({ chain }) => {
            return chain()
              .setMark('textStyle', { fontFamily: null })
              .removeEmptyTextStyle()
              .run();
          },
    };
  },
  nessesaryExtensions: [TextStyle],
}).extend({

});

export default FontFamily;
