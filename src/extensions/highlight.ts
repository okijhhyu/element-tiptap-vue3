import { Editor } from '@tiptap/core';
import TiptapHighlight from '@tiptap/extension-highlight';
import { COLOR_SET } from '@/utils/color';
import HighlightPopover from '../components/MenuCommands/HighlightPopover.vue';

const Highlight = TiptapHighlight.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      multicolor: true,
      colors: COLOR_SET,
      button({ editor, extension }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: HighlightPopover,
          componentProps: {
            editor,
            buttonIcon: extension.options.buttonIcon,
          },
        };
      },
    };
  },
});

export default Highlight;
