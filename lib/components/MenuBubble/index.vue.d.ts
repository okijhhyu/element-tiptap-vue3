import { Editor } from '@tiptap/vue-3';
import { Selection } from 'prosemirror-state';
declare const enum MenuType {
    NONE = "none",
    DEFAULT = "default",
    LINK = "link"
}
declare const _sfc_main: import("vue").DefineComponent<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    menuBubbleOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    t: unknown;
    enableTooltip: boolean;
    isCodeViewMode: boolean;
}, {
    activeMenu: MenuType;
    isLinkBack: boolean;
}, {
    bubbleMenuEnable(): boolean;
    linkMenuEnable(): boolean;
    textMenuEnable(): boolean;
    isLinkSelection(): boolean;
}, {
    generateCommandButtonComponentSpecs(): import("@tiptap/vue-3").AnyExtension;
    linkBack(): void;
    setMenuType(type: MenuType): void;
    $_isLinkSelection(selection: Selection): boolean;
    $_getCurrentMenuType(): MenuType;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    editor: {
        type: typeof Editor;
        required: true;
    };
    menuBubbleOptions: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    menuBubbleOptions: Record<string, any>;
}, {}>;
export default _sfc_main;
