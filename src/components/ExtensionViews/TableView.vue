<template>
  <node-view-wrapper class="tableWrapper">
    <node-view-content className='content' as='table'></node-view-content>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps, NodeViewContent } from '@tiptap/vue-3';

export default {
  name: 'TableView',
  componets: { NodeViewWrapper, NodeViewContent },
  props: nodeViewProps,
  mounted() {
    // this.updateTable();
  },
  computed: {
    getTableClass() {
      if (this.node.attrs.align === 'default') {
        return 'default-table';
      } else if (this.node.attrs.align === 'right' || this.node.attrs.align === 'left') {
        return this.node.attrs.align;
      } else {
        return '';
      }
    },
  },
  // methods: {
  //   updateTable() {
  //     const colgroup = this.$refs.colgroup;
  //     const contentDOM = this.$refs.contentDOM;
  //     const { node, cellMinWidth } = this;

  //     while (colgroup.firstChild) {
  //       colgroup.removeChild(colgroup.firstChild);
  //     }

  //     while (contentDOM.firstChild) {
  //       contentDOM.removeChild(contentDOM.firstChild);
  //     }

  //     updateColumns(node, colgroup, contentDOM, cellMinWidth);
  //   },
  // },
};
</script>
