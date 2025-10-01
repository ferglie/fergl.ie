# Svelte to TanStack Start Conversion

## Summary

Successfully converted the Svelte app from `/srv/dev/ferg.al/.krud/.old/` to TanStack Start with the latest RC version (1.132.31).

## What Was Converted

### 1. **Package Updates**
- Updated to TanStack Start 1.132.31 (latest version)
- Updated TanStack Router to 1.132.31
- Added MongoDB and dotenv dependencies

### 2. **Static Assets**
- Copied all static files from `static/` to `public/`:
  - Images (favicon, android-chrome, apple-touch-icon)
  - Audio files (power_of_love.mp3)
  - Background image (pipes.png)
  - Animated GIF (awesome-just-awesome.gif)

### 3. **Configuration Files**

#### Tailwind Config (`tailwind.config.ts`)
- Converted from JavaScript to TypeScript
- Added custom animations (`ltr-linear-infinite`)
- Added custom background pattern (`hero-pattern`)
- Configured keyframes for animated background

#### Vite Config
- Added SSR configuration for MongoDB
- Existing TanStack Start plugin configuration maintained

### 4. **Database Connection**
Created `src/lib/db.ts` - MongoDB connection utility with:
- Environment variable support (MONGODB_URI)
- Development mode connection caching
- Production mode connection handling

### 5. **Components Converted**

#### Navbar (`src/components/Navbar.tsx`)
Converted from Svelte to React:
- Social media links (GitHub, Mixcloud, Soundcloud, YouTube, Mastodon, Bluesky)
- FontAwesome icons support
- Tailwind CSS styling preserved

#### Counter (`src/components/Counter.tsx`)
Simple visitor counter component converted to React

### 6. **API Route**
Created `src/routes/api.visit.ts`:
- GET endpoint: Records visit and returns visitor count
- POST endpoint: Records visit only
- MongoDB integration
- Error handling and logging
- Client IP detection from headers

### 7. **Main Page**
Converted `src/routes/index.tsx`:
- React component with hooks (useRef for audio)
- TanStack Router loader for fetching visitor count on server
- Animated background with scrolling pipe pattern
- Interactive "MOAR MAGIC" button with audio playback
- Visitor counter display
- Full responsive layout

### 8. **Root Layout**
Updated `src/routes/__root.tsx`:
- Added FontAwesome CDN link
- Updated page title
- Removed unused Header component
- Maintained TanStack devtools

### 9. **Styles**
Updated `src/styles.css`:
- Maintained Tailwind imports
- Added custom CSS for hidden links

### 10. **Environment Variables**
Created `.env` file with MongoDB connection string

## Key Differences from SvelteKit

1. **Routing**: TanStack Router uses file-based routing similar to SvelteKit, but with `.tsx` extensions
2. **API Routes**: Uses `createFileRoute` with `server.handlers` instead of SvelteKit's `+server.ts` pattern
3. **Data Loading**: Uses `loader` in route config instead of SvelteKit's `load` function
4. **Components**: React JSX instead of Svelte syntax
5. **State Management**: React hooks (useState, useRef) instead of Svelte stores

## Running the App

```bash
# Development
bun run dev

# Build
bun run build

# Preview production build
bun run serve
```

## Environment Setup

Make sure MongoDB is running locally or update the `.env` file with your MongoDB connection string:

```
MONGODB_URI=mongodb://localhost:27017/ferglie
```

## URL

The app runs on: http://localhost:3000

## Features Preserved

✅ Animated scrolling background
✅ Visitor counter with MongoDB persistence
✅ Social media navigation links
✅ Audio playback on button click
✅ FontAwesome icons
✅ Responsive design
✅ Tailwind CSS styling
✅ All static assets (images, audio, favicons)
