import { Editor } from '@tiptap/core';
import { ShallowRef } from 'vue';
export default function useCodeView(editor: ShallowRef<Editor | undefined>): {
    cmTextAreaRef: import("vue").Ref<any>;
    isCodeViewMode: import("vue").Ref<boolean>;
};
