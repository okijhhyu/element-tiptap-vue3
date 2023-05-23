import { Extension } from '@tiptap/core';
export type FontSizeOptions = {
    types: string[];
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size
             */
            setFontSize: (fontSize: string) => ReturnType;
            /**
             * Unset the font size
             */
            unsetFontSize: () => ReturnType;
        };
    }
}
declare const FontSize: Extension<FontSizeOptions, any>;
export default FontSize;
