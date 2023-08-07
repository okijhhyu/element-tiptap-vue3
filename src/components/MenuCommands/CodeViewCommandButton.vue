<template>
  <div>
    <command-button
      :command="() => toggleIsCodeViewMode(!isCodeViewMode)"
      :enable-tooltip="enableTooltip"
      :tooltip="t('editor.extensions.CodeView.tooltip')"
      icon="file-code"
      :button-icon="buttonIcon"
      :is-active="isCodeViewMode"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'CodeViewCommandButton',

  components: {
    CommandButton,
  },

  props: {
    buttonIcon: {
      default: '',
      type: String
    }
  },
  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);
    const isCodeViewMode = inject('isCodeViewMode', false);
    const toggleIsCodeViewMode = inject('toggleIsCodeViewMode');

    return { t, enableTooltip, isCodeViewMode, toggleIsCodeViewMode };
  },
});
</script>
