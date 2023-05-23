export default function useEditorStyle({ width, height, }: {
    width?: string | number;
    height?: string | number;
}): {
    width: string | number | undefined;
    height: string | number | undefined;
}[];
