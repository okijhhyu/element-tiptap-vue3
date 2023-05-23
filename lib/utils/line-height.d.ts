import { EditorState, Transaction } from 'prosemirror-state';
import type { Command } from '@tiptap/core';
export declare const ALLOWED_NODE_TYPES: string[];
export declare function isLineHeightActive(state: EditorState, lineHeight: string): boolean;
export declare function transformLineHeightToCSS(value: string | number): string;
export declare function transformCSStoLineHeight(value: string): string;
export declare function setTextLineHeight(tr: Transaction, lineHeight: string | null): Transaction;
export declare function createLineHeightCommand(lineHeight: string): Command;
