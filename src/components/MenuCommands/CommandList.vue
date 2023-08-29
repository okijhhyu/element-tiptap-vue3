<template>
  <div class="command-list">
    <el-tag
      v-for="(item, index) in items"
      :key="index"
      size="small"
      :effect="(item.isActive(editor) && index === selectedIndex)
        ? 'dark' : item.isActive(editor)
         ? 'light' : index === selectedIndex
          ? 'plain' : 'light'"
      :type="!(item.isActive(editor) || index === selectedIndex) ? 'info' : ''"
      :class="{'command-list__selected-active': item.isActive(editor) && index === selectedIndex}"
      @click="selectItem(index)"
    >
      {{ item.element || item.title }}
    </el-tag>
  </div>
</template>

<script>
import { Editor } from '@tiptap/vue-3';
export default {
  props: {
    items: Array,
    command: Function,
    editor: Editor
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items(newItems, oldItems) {
      if (newItems !== oldItems) {
        this.selectedIndex = 0;
      }
    }
  },
  methods: {
    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem(index) {
      const item = this.items[index];
      if (item) {
        this.command(item);
      }
    },
    onKeyDown({ event }) {
      if (event.key === 'ArrowUp') {
        this.upHandler();
        return true;
      }
      if (event.key === 'ArrowDown') {
        this.downHandler();
        return true;
      }
      if (event.key === 'Enter') {
        this.enterHandler();
        return true;
      }
      return false;
    }
  }
};
</script>
