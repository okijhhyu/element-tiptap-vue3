<template>
  <node-view-wrapper class="task-item-wrapper">
    <li
      :data-type="node?.type.name"
      :data-done="done.toString()"
      data-drag-handle
    >
      <span contenteditable="false">
        <el-checkbox :model-value="done" @change="changeCheck" />
      </span>

      <node-view-content class="todo-content" />
    </li>
  </node-view-wrapper>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NodeViewWrapper, nodeViewProps, NodeViewContent } from '@tiptap/vue-3';
import { ElCheckbox } from 'element-plus';

export default defineComponent({
  name: 'TaskItemView',

  components: {
    NodeViewWrapper,
    NodeViewContent,
    ElCheckbox,
  },

  props: nodeViewProps,
  watch: {
    'node.attrs.done'(value) {
      console.log(value);
      this.done = value;
    }
  },
  data() {
    return {
      done: this.node?.attrs.done
    };
  },
  methods: {
    changeCheck(event: any) : void {
      this.updateAttributes({
        done: event
      });
    },
  },
});
</script>
