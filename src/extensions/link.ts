import { getMarkRange } from '@tiptap/core';
import type { Editor } from '@tiptap/core';
import TiptapLink from '@tiptap/extension-link';
import { Plugin, TextSelection } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import AddLinkCommandButton from '@/components/MenuCommands/Link/AddLinkCommandButton.vue';

const Link = TiptapLink.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      addLinkPlaceholder: '',
      editLinkPlaceholder: '',
      button({ editor, extension }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: AddLinkCommandButton,
          componentProps: {
            editor,
            buttonIcon: extension.options.buttonIcon,
            placeholder: extension.options.addLinkPlaceholder
          },
        };
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleClick(view: EditorView, pos: number) {
            const { schema, doc, tr } = view.state;

            const range = getMarkRange(doc.resolve(pos), schema.marks.link);

            if (!range) return false;

            const $start = doc.resolve(range.from);
            const $end = doc.resolve(range.to);

            const transaction = tr.setSelection(
              new TextSelection($start, $end)
            );

            view.dispatch(transaction);
            return true;
          },
        },
      }),
    ];
  },
});

export default Link;
