import type { Editor } from '@tiptap/core';
import TiptapBulletList from '@tiptap/extension-bullet-list';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import ListItem from './list-item';

const BulletList = TiptapBulletList.extend({
  nessesaryExtensions: [ListItem],
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleBulletList();
            },
            buttonIcon: extension.options.buttonIcon,
            isActive: editor.isActive('bulletList'),
            icon: 'list-ul',
            tooltip: t('editor.extensions.BulletList.tooltip'),
          },
        };
      },
    };
  },
});

export default BulletList;
