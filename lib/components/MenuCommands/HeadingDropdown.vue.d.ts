import type { Level } from '@tiptap/extension-heading';
import { Editor } from '@tiptap/core';
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    levels: {
        type: ArrayConstructor;
        required: true;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
    isCodeViewMode: boolean;
}, unknown, {}, {
    toggleHeading(level: Level): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    levels: {
        type: ArrayConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
