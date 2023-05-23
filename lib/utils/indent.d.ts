import type { Command } from '@tiptap/core';
export declare const enum IndentProps {
    max = 7,
    min = 0,
    more = 1,
    less = -1
}
export declare function createIndentCommand({ delta, types, }: {
    delta: number;
    types: string[];
}): Command;
