import { Editor } from '@tiptap/core';
import TiptapColor from '@tiptap/extension-color';
import { COLOR_SET } from '@/utils/color';
import ColorPopover from '@/components/MenuCommands/ColorPopover.vue';
import TextStyle from '@tiptap/extension-text-style';

const Color = TiptapColor.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      colors: COLOR_SET,
      button({ editor }: { editor: Editor; }) {
        return {
          component: ColorPopover,
          componentProps: {
            editor,
          },
        };
      },
    };
  },

  addExtensions() {
    return [TextStyle];
  },
});

export default Color;
