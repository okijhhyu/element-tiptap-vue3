import { Plugin } from 'vue';
import ElementTiptap from './components/ElementTiptap.vue';
declare const ElementTiptapPlugin: Plugin;
export * from './extensions';
export { ElementTiptapPlugin, ElementTiptap };
export default ElementTiptapPlugin;
