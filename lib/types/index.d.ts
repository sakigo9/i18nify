declare const _default$3: (amount: string | number, options?: {
    currency?: string | number;
    locale?: string;
    intlOptions?: Intl.NumberFormatOptions;
}) => string;

interface Currency {
    symbol: string;
    name: string;
}
interface GetCurrencyListOutput {
    [currencyCode: keyof typeof CURRENCIES]: Currency;
}
interface ByParts {
    currencySymbol: string;
    integerValue: string;
    decimalValue: string;
    separator: string;
    symbolAtFirst: boolean;
}

declare const _default$2: () => GetCurrencyListOutput;

declare const _default$1: (currencyCode: string | number) => string;

declare const _default: (amount: string | number, options?: {
    currency?: string | number;
    locale?: string;
    intlOptions?: Intl.NumberFormatOptions;
}) => ByParts;

declare const COUNTRY_PHONE_REGEX: {
    IN: RegExp;
};
declare function export_default(phone: string, country: keyof typeof COUNTRY_PHONE_REGEX): boolean;

export { _default$3 as formatNumber, _default as formatNumberByParts, _default$2 as getCurrencyList, _default$1 as getCurrencySymbol, export_default as validatePhone };
