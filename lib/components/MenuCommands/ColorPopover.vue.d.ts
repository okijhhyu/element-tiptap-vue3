import { Editor } from '@tiptap/vue-3';
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
    isCodeViewMode: boolean;
    popoverRef: import("vue").Ref<any>;
    colorText: import("vue").Ref<string>;
    selectedColor: import("vue").ComputedRef<string>;
    confirmColor: (color?: string) => void;
}, unknown, {
    colorSet(): string[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
