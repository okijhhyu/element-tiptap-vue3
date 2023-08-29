import type { Editor, Extension } from '@tiptap/core';
import type { HeadingOptions } from '@tiptap/extension-heading';
import TiptapHeading from '@tiptap/extension-heading';
import HeadingDropdown from '@/components/MenuCommands/HeadingDropdown.vue';

const Heading = TiptapHeading.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      commandList: this.parent?.()?.levels.concat([0] as any).map(level => {
        return {
          title: level > 0 ? `h ${level}` : 'paragraph',
          command: ({ editor, range }:any) => {
            if (level > 0) {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .toggleHeading({ level })
                .run();
            } else {
              editor
                .chain()
                .focus()
                .deleteRange(range)
                .setParagraph()
                .run();
            }
          },
          disabled: false,
          isActive(editor:Editor) {
            return level > 0
              ? editor.isActive('heading', {
                level,
              })
              : editor.isActive('paragraph');
          }
        };
      }),
      button({
        editor,
        extension,
      }: {
        editor: Editor;
        extension: Extension;
        t: (...args: any[]) => string;
      }) {
        return {
          component: HeadingDropdown,
          componentProps: {
            levels: (extension.options as HeadingOptions).levels,
            editor,
            buttonIcon: extension.options.buttonIcon,
          },
        };
      },
    };
  },
});

export default Heading;
