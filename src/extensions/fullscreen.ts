import { Extension } from '@tiptap/core';
import FullscreenCommandButton from '@/components/MenuCommands/FullscreenCommandButton.vue';

const Fullscreen = Extension.create({
  name: 'fullscreen',

  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      button({ extension }: { extension: any; t: (...args: any[]) => string }) {
        return {
          component: FullscreenCommandButton,
          componentProps: {
            buttonIcon: extension.options.buttonIcon,
          }
        };
      },
    };
  },
});

export default Fullscreen;
