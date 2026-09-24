import type { RouteRecord } from "vite-react-ssg";
import App from "@/App";
import { LocaleProvider, type Locale } from "@/i18n/locale";

function LocaleShell({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <App />
    </LocaleProvider>
  );
}

export const routes: RouteRecord[] = [
  { path: "/", element: <LocaleShell locale="en" /> },
  { path: "/ar", element: <LocaleShell locale="ar" /> },
];
