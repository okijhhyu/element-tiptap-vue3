export declare const DEFAULT_LANGUAGE = "en";
export declare const Trans: {
    readonly defaultLanguage: string;
    readonly supportedLanguages: string[];
    loadLanguage(lang: any): Object;
    isLangSupported(lang: any): boolean;
    buildI18nHandler(lang?: string): Function;
};
