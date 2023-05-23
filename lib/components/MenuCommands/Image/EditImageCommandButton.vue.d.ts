declare const _sfc_main: import("vue").DefineComponent<{
    node: {
        type: import("vue").PropType<import("prosemirror-model").Node>;
        required: true;
    };
    updateAttrs: {
        type: import("vue").PropType<(attributes: Record<string, any>) => void>;
        required: true;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
}, {
    editImageDialogVisible: boolean;
    imageAttrs: any;
}, {}, {
    syncImageAttrs(): void;
    getImageAttrs(): {
        src: any;
        alt: any;
        width: any;
        height: any;
    };
    updateImageAttrs(): void;
    openEditImageDialog(): void;
    closeEditImageDialog(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
