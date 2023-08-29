import { VueRenderer } from '@tiptap/vue-3';
import tippy from 'tippy.js';
import CommandsList from '../components/MenuCommands/CommandList.vue';

const renderItems = () => {
  let component: VueRenderer;
  let popup: { destroy: () => void; hide: () => void; setProps: ({ getReferenceClientRect } : any) => void }[];

  return {
    onStart: (props: { editor: any; clientRect: any; }) => {
      component = new VueRenderer(CommandsList, {
        props,
        editor: props.editor
      });

      popup = tippy('body', {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        theme: 'command',
        trigger: 'manual',
        placement: 'bottom-start'
      });
    },
    onUpdate(props: Record<string, any>) {
      component.updateProps(props);

      popup[0].setProps({
        getReferenceClientRect: props.clientRect
      });
    },
    onKeyDown(props: { event: { key: string; }; }) {
      if (props.event.key === 'Escape') {
        popup[0].hide();
        return true;
      }
      return component.ref?.onKeyDown(props);
    },
    onExit() {
      popup[0].destroy();
      component.destroy();
    }
  };
};

export default renderItems;
