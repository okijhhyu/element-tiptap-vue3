declare const _sfc_main: import("vue").DefineComponent<{}, {
    t: unknown;
    popoverVisible: import("vue").Ref<boolean>;
    popoverRef: import("vue").Ref<any>;
    confirmCreateTable: (row: number, col: number) => void;
}, {
    tableGridSize: {
        row: number;
        col: number;
    };
    selectedTableGridSize: {
        row: number;
        col: number;
    };
}, {}, {
    selectTableGridSize(row: number, col: number): void;
    resetTableGridSize(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _sfc_main;
