import {
  Editor, mergeAttributes,
} from '@tiptap/core';
import TableTiptap, { TableOptions } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import TableCell from '@tiptap/extension-table-cell';
import TablePopover from '@/components/MenuCommands/TablePopover/index.vue';
import TableView from '@/components/ExtensionViews/TableView.vue';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
interface TableOptionsOptions extends TableOptions {
  alignDefault: 'string';
  draggable: boolean,
  View: any,
}
const Table = TableTiptap.extend<TableOptionsOptions>({
  addAttributes() {
    return {
      ...this.parent?.(),
      align: { default: this.options.alignDefault },
      draggable: { default: this.options.draggable }
    };
  },
  parseHTML() {
    return [{ tag: 'div[data-type="tableWrapper"]' }];
  },
  renderHTML({ HTMLAttributes }) {
    return ['tableWrapper', mergeAttributes(HTMLAttributes), 0];
  },
  // @ts-ignore
  addOptions() {
    return {
      ...this.parent?.(),
      buttonIcon: '',
      resizable: false,
      button({ editor, extension }: { editor: Editor; extension: any; t: (...args: any[]) => string }) {
        return {
          component: TablePopover,
          componentProps: {
            editor,
            buttonIcon: extension.options.buttonIcon,
          },
        };
      },
    };
  },

  addNodeView() {
    return VueNodeViewRenderer(TableView);
  },
  addExtensions() {
    return [TableRow, TableHeader, TableCell];
  },
});

export default Table;
