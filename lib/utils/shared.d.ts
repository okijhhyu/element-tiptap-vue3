export declare function noop(): void;
/**
 * Check whether a value is NaN
 */
export declare function isNaN(val: any): boolean;
export declare function clamp(val: number, min: number, max: number): number;
export declare function readFileDataUrl(file: File): Promise<any>;
/**
 * Create a cached version of a pure function.
 */
export declare function cached(fn: Function): Function;
/**
 * Capitalize a string.
 */
export declare const capitalize: Function;
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
export declare function isPlainObject(obj: any): boolean;
