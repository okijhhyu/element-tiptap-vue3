import { Extension } from '@tiptap/core';
export type FontFamilyOptions = {
    types: string[];
};
declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontFamily: {
            /**
             * Set the font family
             */
            setFontFamily: (fontFamily: string) => ReturnType;
            /**
             * Unset the font family
             */
            unsetFontFamily: () => ReturnType;
        };
    }
}
declare const FontFamily: Extension<FontFamilyOptions, any>;
export default FontFamily;
