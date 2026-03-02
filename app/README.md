# Project EXE App

Cross-platform companion app built with Expo (React Native + Web).

## Quick Start

```bash
npm install
npm run start       # Start dev server (press w for web, i for iOS, a for Android)
npm run web         # Start web directly
npm run storybook   # Component development mode
```

## Project Structure

```
app/
├── app/                    # Routes (Expo Router - file-based)
│   ├── _layout.tsx         # Root layout (providers, global config)
│   └── index.tsx           # Home screen (/)
├── src/
│   ├── components/
│   │   ├── common/         # Shared UI components (Button, Text, etc.)
│   │   └── chat/           # Feature-specific components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API clients, storage, external integrations
│   ├── types/              # Shared TypeScript interfaces
│   └── utils/              # Pure utility functions
├── assets/                 # Images, fonts, static files
├── .rnstorybook/           # Storybook configuration
├── app.json                # Expo configuration
├── metro.config.js         # Metro bundler config (with Storybook)
└── tsconfig.json           # TypeScript config (with path aliases)
```

## Adding Screens

Create a file in `app/` to add a route:

```
app/chat.tsx        → /chat
app/settings.tsx    → /settings
app/chat/[id].tsx   → /chat/:id (dynamic route)
```

Layouts nest automatically. Create `app/chat/_layout.tsx` to wrap all `/chat/*` routes.

## Adding Components

Place components in `src/components/`:

```tsx
// src/components/common/Card.tsx
export function Card({ children }: { children: React.ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}
```

Import using path aliases:

```tsx
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
```

## Platform-Specific Code

React Native resolves platform-specific files automatically:

```
Button.tsx          # Default (shared)
Button.web.tsx      # Web override
Button.native.tsx   # iOS + Android override
Button.ios.tsx      # iOS only
Button.android.tsx  # Android only
```

The bundler picks the most specific match. No conditional imports needed.

## Storybook

Develop and test components in isolation:

```bash
npm run storybook       # Native (iOS/Android simulator)
npm run storybook:web   # Web browser
```

Add stories alongside components:

```tsx
// src/components/common/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-native";
import { Button } from "./Button";

const meta = {
  title: "Common/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Click me",
    variant: "primary",
  },
};
```

After adding new stories, regenerate the index:

```bash
npm run storybook:generate
```

## Path Aliases

Configured in `tsconfig.json`:

| Alias | Path |
|-------|------|
| `@/*` | `src/*` |
| `@/components/*` | `src/components/*` |
| `@/hooks/*` | `src/hooks/*` |
| `@/utils/*` | `src/utils/*` |
| `@/services/*` | `src/services/*` |
| `@/types/*` | `src/types/*` |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start Expo dev server |
| `npm run web` | Start web version |
| `npm run ios` | Start iOS simulator |
| `npm run android` | Start Android emulator |
| `npm run storybook` | Start Storybook (native) |
| `npm run storybook:web` | Start Storybook (web) |
| `npm run storybook:generate` | Regenerate story index |

## Tech Stack

- **Expo SDK 55** - React Native framework
- **Expo Router** - File-based navigation
- **React Native Web** - Web support via unified codebase
- **Storybook 10** - Component development
- **TypeScript** - Type safety
