import type { Text } from "@/data/content";
import { t, useLocale, type Locale } from "@/i18n/locale";
import { getUi } from "@/i18n/ui";

export function useCopy() {
  const locale = useLocale();
  return {
    locale,
    ui: getUi(locale),
    dir: locale === "ar" ? ("rtl" as const) : ("ltr" as const),
    tx(value: Text | string) {
      return typeof value === "string" ? value : t(value, locale);
    },
  };
}

export type { Locale };
