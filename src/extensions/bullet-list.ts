import type { Editor } from '@tiptap/core';
import TiptapBulletList from '@tiptap/extension-bullet-list';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';
import ListItem from './list-item';

const BulletList = TiptapBulletList.extend({
  nessesaryExtensions: [ListItem],
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor, t }: { editor: Editor; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.toggleBulletList();
            },
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
