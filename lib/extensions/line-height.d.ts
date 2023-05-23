import { Extension } from '@tiptap/core';
export interface LineHeightOptions {
    types: string[];
    lineHeights: string[];
}
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        lineHeight: {
            setLineHeight: (lineHeight: string) => ReturnType;
            unsetLineHeight: () => ReturnType;
        };
    }
}
declare const LineHeight: Extension<LineHeightOptions, any>;
export default LineHeight;
