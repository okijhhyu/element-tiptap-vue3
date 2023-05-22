import { Extension } from '@tiptap/core';
import FullscreenCommandButton from '@/components/MenuCommands/FullscreenCommandButton.vue';

const Fullscreen = Extension.create({
  name: 'fullscreen',

  addOptions() {
    return {
      ...this.parent?.(),
      button() {
        return {
          component: FullscreenCommandButton,
        };
      },
    };
  },
});

export default Fullscreen;
