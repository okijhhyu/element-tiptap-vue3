<template>
  <el-dropdown
    placement="bottom"
    trigger="click"
    @command="(lineHeight) => editor.commands.setLineHeight(lineHeight)"
    popper-class="my-dropdown"
    :popper-options="{ modifiers: [{ name: 'computeStyles', options: { adaptive: false } }] }"
  >
    <div>
      <command-button
        :enable-tooltip="enableTooltip"
        :button-icon="buttonIcon"
        :tooltip="t('editor.extensions.LineHeight.tooltip')"
        :readonly="isCodeViewMode"
        icon="text-height"
      />
    </div>
    <template #dropdown>
      <el-dropdown-menu class="el-tiptap-dropdown-menu">
        <el-dropdown-item
          v-for="lineHeight in lineHeights"
          :key="lineHeight"
          :command="lineHeight"
          :class="{
            'el-tiptap-dropdown-menu__item--active':
              isLineHeightActive(lineHeight),
          }"
          class="el-tiptap-dropdown-menu__item"
        >
          <span>{{ lineHeight }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { Editor } from '@tiptap/vue-3';
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { isLineHeightActive } from '@/utils/line-height';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'LineHeightDropdown',

  components: {
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    CommandButton,
  },

  props: {
    editor: {
      type: Editor,
      required: true,
    },
    buttonIcon: {
      default: '',
      type: String
    },
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);

    return { t, enableTooltip, isCodeViewMode };
  },

  computed: {
    lineHeights() {
      const lineHeightOptions = this.editor.extensionManager.extensions.find(
        (e) => e.name === 'lineHeight'
      )!.options;
      return lineHeightOptions.lineHeights;
    },
  },

  methods: {
    isLineHeightActive(lineHeight: string) {
      return isLineHeightActive(this.editor.state, lineHeight);
    },
  },
});
</script>
