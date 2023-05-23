type ImageResult = {
    complete: boolean;
    width: number;
    height: number;
    src: string;
};
export declare function resolveImg(src: string): Promise<ImageResult>;
export declare const enum ImageDisplay {
    INLINE = "inline",
    BREAK_TEXT = "block",
    FLOAT_LEFT = "left",
    FLOAT_RIGHT = "right"
}
export {};
