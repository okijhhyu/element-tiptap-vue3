<template>
  <div>
    <command-button
      :command="() => toggleFullscreen(!isFullscreen)"
      :enable-tooltip="enableTooltip"
      :tooltip="buttonTooltip"
      :button-icon="buttonIcon"
      :icon="isFullscreen ? 'compress' : 'expand'"
      :is-active="isFullscreen"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import CommandButton from './CommandButton.vue';

export default defineComponent({
  name: 'FullscreenCommandButton',

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
    const isFullscreen = inject('isFullscreen', false);
    const toggleFullscreen = inject('toggleFullscreen');

    return { t, enableTooltip, isFullscreen, toggleFullscreen };
  },

  computed: {
    buttonTooltip() {
      return this.isFullscreen
        ? this.t('editor.extensions.Fullscreen.tooltip.exit_fullscreen')
        : this.t('editor.extensions.Fullscreen.tooltip.fullscreen');
    },
  },
});
</script>
