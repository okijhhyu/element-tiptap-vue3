import { ImageDisplay } from './utils/image';
export declare const ELEMENT_TIPTAP_TIP = "[Element-Tiptap Tip]";
export declare const enum Alignment {
    left = "left",
    center = "center",
    right = "right",
    justify = "justify"
}
export declare const ALIGN_PATTERN: RegExp;
export declare const DEFAULT_IMAGE_URL_REGEX: RegExp;
export declare const DEFAULT_IMAGE_WIDTH = 200;
export declare const DEFAULT_IMAGE_DISPLAY = ImageDisplay.INLINE;
export declare const LINE_HEIGHT_100 = 1.7;
export declare const DEFAULT_LINE_HEIGHT = "100%";
export declare const enum EVENTS {
    INIT = "init",
    TRANSACTION = "transaction",
    FOCUS = "focus",
    BLUR = "blur",
    PASTE = "paste",
    DROP = "drop",
    UPDATE = "update"
}
export declare const PREVIEW_WINDOW_WIDTH: string;
