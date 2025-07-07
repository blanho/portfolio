# Portfolio i18n Implementation

## Features Implemented

### 1. Internationalization (i18n) Setup

- ✅ **next-intl** integration with Next.js 15
- ✅ Support for English (`en`) and Japanese (`ja`)
- ✅ Locale-based routing (`/en/...` and `/ja/...`)
- ✅ Automatic locale detection and redirection

### 2. Language Switcher

- ✅ **LanguageSwitcher component** in the header
- ✅ Dropdown menu with flag icons and language names
- ✅ Smooth language switching with URL preservation
- ✅ Visual indication of current language

### 3. Translated Content

- ✅ **Contact page** fully translated (English/Japanese)
- ✅ **Navigation menu** translated
- ✅ **Common UI elements** translated (buttons, etc.)

### 4. Project Structure

```
app/
├── [locale]/              # Locale-based routing
│   ├── layout.tsx         # Locale-specific layout with NextIntlClientProvider
│   ├── page.tsx           # Home page
│   ├── contact/
│   │   └── page.tsx       # Translated contact page
│   ├── projects/
│   │   └── page.tsx       # Projects page
│   ├── services/
│   │   └── page.tsx       # Services page
│   └── resume/
│       └── page.tsx       # Resume page
├── layout.tsx             # Root layout (redirects to default locale)
├── globals.css
└── ...

messages/
├── en.json                # English translations
└── ja.json                # Japanese translations

i18n/
├── routing.ts             # Routing configuration
└── request.ts             # next-intl configuration

components/navbar/
├── LanguageSwitcher.tsx   # Language switching component
├── Header.tsx             # Updated with language switcher
└── NavBar.tsx             # Internationalized navigation
```

## How to Use

### 1. Accessing Different Languages

- **English**: `http://localhost:3001/en` (default)
- **Japanese**: `http://localhost:3001/ja`

### 2. Language Switching

- Click the language switcher in the header (globe icon)
- Select between English and Japanese
- The URL and content will update automatically

### 3. Adding New Translations

#### Step 1: Add to message files

**English** (`messages/en.json`):

```json
{
  "newSection": {
    "title": "New Section",
    "description": "Description in English"
  }
}
```

**Japanese** (`messages/ja.json`):

```json
{
  "newSection": {
    "title": "新しいセクション",
    "description": "日本語での説明"
  }
}
```

#### Step 2: Use in components

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("newSection");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
```

### 4. Adding New Routes

Add new paths to `i18n/routing.ts`:

```tsx
pathnames: {
  '/': '/',
  '/contact': {
    en: '/contact',
    ja: '/contact'
  },
  '/new-page': {
    en: '/new-page',
    ja: '/new-page'  // or '/新しいページ' for localized URLs
  }
}
```

## Key Components

### LanguageSwitcher

- Location: `components/navbar/LanguageSwitcher.tsx`
- Features: Dropdown with flags, current language indicator
- Uses: `next-intl` routing for language switching

### Internationalized Navigation

- Location: `components/navbar/NavBar.tsx`
- Features: Translated menu items, active state detection
- Uses: `next-intl` Link and routing

### Contact Page

- Location: `app/[locale]/contact/page.tsx`
- Features: Fully translated form, labels, placeholders, and content
- Demonstrates: Complex translation usage with form elements

## Configuration Files

### `next.config.ts`

```tsx
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
```

### `middleware.ts`

```tsx
import createMiddleware from "next-intl/middleware";
export default createMiddleware(routing);
```

## Current Implementation Status

✅ **Completed:**

- [x] Basic i18n setup with next-intl
- [x] English and Japanese language support
- [x] Language switcher component
- [x] Contact page translation
- [x] Navigation menu translation
- [x] Locale-based routing
- [x] Automatic locale detection

🔄 **Next Steps** (Optional):

- [ ] Translate remaining pages (Projects, Services, Resume, Home)
- [ ] Add more languages (e.g., Vietnamese, Chinese)
- [ ] Implement locale-specific date/time formatting
- [ ] Add RTL language support
- [ ] SEO optimization for multilingual content

## Testing

1. **Start the development server:**

   ```bash
   npm run dev
   ```

2. **Test language switching:**

   - Visit `http://localhost:3001` (redirects to `/en`)
   - Use the language switcher to switch to Japanese
   - Verify URLs change to `/ja/...`
   - Check that content is translated

3. **Test direct access:**
   - Visit `http://localhost:3001/ja/contact`
   - Verify Japanese content loads
   - Switch back to English and verify preservation of page

## Notes

- Default language is English (`en`)
- Language preference is preserved in URL
- All routing goes through the `[locale]` dynamic segment
- Components using translations must be client components (`'use client'`)
- The language switcher is responsive and shows flags/names based on screen size
