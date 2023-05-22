<template>
  <div>
    <command-button
      :command="removeImage"
      :enable-tooltip="enableTooltip"
      :tooltip="t('editor.extensions.Image.buttons.remove_image.tooltip')"
      icon="trash-alt"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import CommandButton from '../CommandButton.vue';

import { nodeViewProps } from '@tiptap/vue-3';

export default defineComponent({
  name: 'RemoveImageCommandButton',

  components: {
    CommandButton,
  },

  props: {
    editor: nodeViewProps['editor'],
  },

  setup() {
    const t = inject('t');
    const enableTooltip = inject('enableTooltip', true);

    return { t, enableTooltip };
  },

  methods: {
    removeImage() {
      const a = this.editor?.commands.deleteSelection();
    },
  },
});
</script>
