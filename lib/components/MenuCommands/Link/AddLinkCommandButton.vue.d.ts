import { Editor } from '@tiptap/core';
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}, {
    t: unknown;
    enableTooltip: boolean;
    isCodeViewMode: boolean;
}, {
    linkAttrs: {
        href: string;
        openInNewTab: boolean;
    };
    addLinkDialogVisible: boolean;
}, {}, {
    openAddLinkDialog(): void;
    closeAddLinkDialog(): void;
    addLink(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
}>>, {}, {}>;
export default _sfc_main;
