import { Extensions } from '@tiptap/core';
declare const _sfc_main: import("vue").DefineComponent<{
    content: {
        validator: (prop: unknown) => boolean;
        default: string;
    };
    extensions: {
        type: () => Extensions;
        default: never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    output: {
        type: StringConstructor;
        default: string;
        validator(output: string): boolean;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableCharCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    charCountMax: {
        type: NumberConstructor;
        default: undefined;
    };
    editorClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorContentClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorMenubarClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorBubbleMenuClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorFooterClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
}, {
    t: (...args: any[]) => string;
    editor: import("vue").ShallowRef<import("@tiptap/vue-3").Editor | undefined>;
    characters: import("vue").ComputedRef<any>;
    showFooter: import("vue").ComputedRef<boolean>;
    isFullscreen: import("vue").Ref<boolean>;
    isCodeViewMode: import("vue").Ref<boolean>;
    cmTextAreaRef: import("vue").Ref<any>;
    editorStyle: {
        width: string | number | undefined;
        height: string | number | undefined;
    }[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        validator: (prop: unknown) => boolean;
        default: string;
    };
    extensions: {
        type: () => Extensions;
        default: never[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    lang: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    height: {
        type: (StringConstructor | NumberConstructor)[];
        default: undefined;
    };
    output: {
        type: StringConstructor;
        default: string;
        validator(output: string): boolean;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableCharCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    charCountMax: {
        type: NumberConstructor;
        default: undefined;
    };
    editorClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorContentClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorMenubarClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorBubbleMenuClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
    editorFooterClass: {
        type: (StringConstructor | ObjectConstructor | ArrayConstructor)[];
        default: undefined;
    };
}>>, {
    content: string;
    extensions: Extensions;
    tooltip: boolean;
    readonly: boolean;
    width: string | number;
    placeholder: string;
    lang: string;
    height: string | number;
    output: string;
    spellcheck: boolean;
    enableCharCount: boolean;
    charCountMax: number;
    editorClass: string | unknown[] | Record<string, any>;
    editorContentClass: string | unknown[] | Record<string, any>;
    editorMenubarClass: string | unknown[] | Record<string, any>;
    editorBubbleMenuClass: string | unknown[] | Record<string, any>;
    editorFooterClass: string | unknown[] | Record<string, any>;
}, {}>;
export default _sfc_main;
