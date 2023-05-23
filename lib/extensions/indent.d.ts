import { Extension } from '@tiptap/core';
export interface IndentOptions {
    types: string[];
    minIndent: number;
    maxIndent: number;
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        indent: {
            /**
             * Set the indent attribute
             */
            indent: () => ReturnType;
            /**
             * Set the outdent attribute
             */
            outdent: () => ReturnType;
        };
    }
}
declare const Indent: Extension<IndentOptions, any>;
export default Indent;
