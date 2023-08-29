const getSuggestionItems = ({ editor, query }: { editor: any, query:string}) => {
  return editor.extensionManager.extensions
    .flatMap((extension:any) => {
      const innerArray = extension.options.commandList && Object.values(extension.options.commandList);
      return Array.isArray(innerArray) ? innerArray : [];
    })
    .filter((item: { title: string; disabled: boolean }) => item?.title?.toLowerCase()?.startsWith(query?.toLowerCase()) && item?.disabled === false)
    .slice(0, 7);
};

export default getSuggestionItems;
