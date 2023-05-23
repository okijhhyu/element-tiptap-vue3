import { Extension } from '@tiptap/core';
export declare const DEFAULT_CODEMIRROR_OPTIONS: {
    lineNumbers: boolean;
    lineWrapping: boolean;
    tabSize: number;
    tabMode: string;
    mode: string;
};
export interface CodeViewOptions {
    codemirror: any;
    codemirrorOptions: any;
}
declare const CodeView: Extension<CodeViewOptions, any>;
export default CodeView;
