declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: true;
    };
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node>;
        required: true;
    };
    updateAttrs: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: true;
    };
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node>;
        required: true;
    };
    updateAttrs: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
