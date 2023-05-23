import { Editor } from '@tiptap/core';
import { ShallowRef } from 'vue';
export default function useCharacterCount(editor: ShallowRef<Editor | undefined>): {
    characters: import("vue").ComputedRef<any>;
};
