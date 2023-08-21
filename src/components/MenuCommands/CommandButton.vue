<template>
  <el-tooltip
    :content="tooltip"
    :show-after="350"
    :disabled="!enableTooltip || readonly"
    effect="dark"
    popper-class="tooltip-up"
    placement="top"
    :enterable="false"
  >
    <div v-if="!buttonIcon" :class="commandButtonClass" @mousedown.prevent @click="onClick">
      <v-icon :name="icon" :button-icon="buttonIcon" />
    </div>
    <div v-else v-html="buttonIcon" :class="commandButtonClass" @mousedown.prevent @click="onClick" />
  </el-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElTooltip } from 'element-plus';
import { noop } from '@/utils/shared';
import VIcon from '../Icon/Icon.vue';

export default defineComponent({
  components: {
    ElTooltip,
    VIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    tooltip: {
      type: String,
      required: true,
    },

    enableTooltip: {
      type: Boolean,
      required: true,
    },

    command: {
      type: Function,
      default: noop,
    },
    buttonIcon: {
      type: String,
      required: false,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    commandButtonClass(): object {
      return {
        'el-tiptap-editor__command-button': true,
        'el-tiptap-editor__command-button--active': this.isActive,
        'el-tiptap-editor__command-button--readonly': (this.readonly || this.disabled),
      };
    },
  },

  methods: {
    onClick() {
      if (!this.readonly && !this.disabled) this.command();
    },
  },
});
</script>
