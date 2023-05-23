import { Extension } from '@tiptap/core';
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        print: {
            /**
             * print the editor content
             */
            print: () => ReturnType;
        };
    }
}
declare const Print: Extension<any, any>;
export default Print;
