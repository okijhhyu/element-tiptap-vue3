import { Extension } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        formatClear: {
            formatClear: () => ReturnType;
        };
    }
}
declare const FormatClear: Extension<any, any>;
export default FormatClear;
