declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: true;
    };
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node>;
        required: true;
    };
    decorations: {
        type: import("vue").PropType<import("@tiptap/vue-3").DecorationWithType[]>;
        required: true;
    };
    selected: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    extension: {
        type: import("vue").PropType<import("@tiptap/vue-3").Node<any, any>>;
        required: true;
    };
    getPos: {
        type: import("vue").PropType<() => number>;
        required: true;
    };
    updateAttributes: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
    deleteNode: {
        type: import("vue").PropType<() => void>;
        required: true;
    };
}, unknown, unknown, {
    done: {
        get(): boolean;
        set(done: boolean): void;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: import("vue").PropType<import("@tiptap/core").Editor>;
        required: true;
    };
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node>;
        required: true;
    };
    decorations: {
        type: import("vue").PropType<import("@tiptap/vue-3").DecorationWithType[]>;
        required: true;
    };
    selected: {
        type: import("vue").PropType<boolean>;
        required: true;
    };
    extension: {
        type: import("vue").PropType<import("@tiptap/vue-3").Node<any, any>>;
        required: true;
    };
    getPos: {
        type: import("vue").PropType<() => number>;
        required: true;
    };
    updateAttributes: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
    deleteNode: {
        type: import("vue").PropType<() => void>;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
