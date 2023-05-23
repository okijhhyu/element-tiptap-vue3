import { Editor } from '@tiptap/vue-3';
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    initLinkAttrs: {
        type: ObjectConstructor;
        required: true;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
}, {
    linkAttrs: Record<string, any>;
    editLinkDialogVisible: boolean;
}, {}, {
    updateLinkAttrs(): void;
    openEditLinkDialog(): void;
    closeEditLinkDialog(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    initLinkAttrs: {
        type: ObjectConstructor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
