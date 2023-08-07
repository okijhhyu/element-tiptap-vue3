import type { Editor } from '@tiptap/core';
import TiptapHorizontalRule from '@tiptap/extension-horizontal-rule';
import CommandButton from '@/components/MenuCommands/CommandButton.vue';

const HorizontalRule = TiptapHorizontalRule.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      button({ editor, extension, t }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: CommandButton,
          componentProps: {
            command: () => {
              editor.commands.setHorizontalRule();
            },
            buttonIcon: extension.options.buttonIcon,
            icon: 'horizontal-rule',
            tooltip: t('editor.extensions.HorizontalRule.tooltip'),
          },
        };
      },
    };
  },
});

export default HorizontalRule;
