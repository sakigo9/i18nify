import { withErrorBoundary } from '../../common/errorBoundary';
import { CURRENCIES } from './data/currencies';

// this function formats amount based on locale and options provided
const formatNumber = (
  amount: string | number,
  options: {
    currency?: keyof typeof CURRENCIES;
    locale?: string;
    intlOptions?: Intl.NumberFormatOptions;
  } = {},
): string => {
  if (!Number(amount)) throw new Error('Parameter `amount` is not a number!');

  let locale = options?.locale;

  // If a specific locale is provided, use it; otherwise, use the browser's locale
  if (!locale) {
    locale = window.navigator.language;
  }

  let formattedAmount = '';

  const intlOptions = options?.intlOptions ? { ...options.intlOptions } : {};

  if (options?.currency || intlOptions.currency) {
    intlOptions.style = 'currency';
    intlOptions.currency = (options.currency || intlOptions.currency) as string;
  }

  if (!locale) throw new Error('Pass valid locale !');

  try {
    formattedAmount = new Intl.NumberFormat(
      locale || undefined,
      intlOptions,
    ).format(parseFloat(amount as string));
  } catch (err) {
    throw new Error(err.message);
  }

  return formattedAmount;
};

export default withErrorBoundary(formatNumber);
