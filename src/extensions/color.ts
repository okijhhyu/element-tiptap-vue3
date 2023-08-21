import { Editor } from '@tiptap/core';
import TiptapColor from '@tiptap/extension-color';
import { COLOR_SET } from '@/utils/color';
import ColorPopover from '@/components/MenuCommands/ColorPopover.vue';
import TextStyle from '@tiptap/extension-text-style';

const Color = TiptapColor.extend({
  nessesaryExtensions: [TextStyle],
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      colors: COLOR_SET,
      button({ editor, extension }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: ColorPopover,
          componentProps: {
            editor,
            buttonIcon: extension.options.buttonIcon,
          },
        };
      },
    };
  },
});

export default Color;
