import { noop } from '../../utils/shared';
declare const _sfc_main: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        required: true;
    };
    enableTooltip: {
        type: BooleanConstructor;
        required: true;
    };
    command: {
        type: FunctionConstructor;
        default: typeof noop;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {
    commandButtonClass(): object;
}, {
    onClick(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        required: true;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isActive: {
        type: BooleanConstructor;
        default: boolean;
    };
    tooltip: {
        type: StringConstructor;
        required: true;
    };
    enableTooltip: {
        type: BooleanConstructor;
        required: true;
    };
    command: {
        type: FunctionConstructor;
        default: typeof noop;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    disabled: boolean;
    isActive: boolean;
    command: Function;
    readonly: boolean;
}, {}>;
export default _sfc_main;
