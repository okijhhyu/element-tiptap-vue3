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
    defaultSize: string;
}, unknown, {
    fontSizes(): string[];
    activeFontSize(): any;
}, {
    toggleFontSize(size: string): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
