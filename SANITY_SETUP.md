# Sanity CMS Setup Guide

This document explains how to complete the Sanity CMS setup for the TEG website.

## Prerequisites

- Node.js 18+ installed
- A Sanity account (free at [sanity.io](https://www.sanity.io/))

## Step 1: Create a Sanity Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Click "Create project"
3. Name it "TEG Website" and create it
4. Copy your **Project ID** from the dashboard

## Step 2: Configure Your Project ID

Replace `YOUR_PROJECT_ID` in these files with your actual project ID:

| File                      | Location |
| ------------------------- | -------- |
| `sanity/sanity.config.ts` | Line 10  |
| `sanity/sanity.cli.ts`    | Line 5   |
| `src/lib/sanityClient.ts` | Line 12  |

## Step 3: Start Sanity Studio

```bash
cd sanity
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) to access the CMS.

## Step 4: Create Content

In Sanity Studio:

1. Click "Page" in the sidebar
2. Create a new page with:
   - **Title**: "Home"
   - **Slug**: "home"
3. Fill in the Hero, Stats, Features, and CTA sections
4. Add both German and English translations
5. Click "Publish"

Repeat for "for-students" and "for-companies" pages.

## Step 5: Test the Integration

```bash
# In the main project directory
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). The website will:

- Display CMS content if available
- Fall back to static locale content if CMS is not configured

## How It Works

```
┌─────────────────┐     ┌──────────────┐
│  Sanity Studio  │────▸│ Sanity Cloud │
│  (localhost:3333)│     │   (API/CDN)  │
└─────────────────┘     └──────┬───────┘
                               │
                               ▼
┌─────────────────┐     ┌──────────────┐
│  React Website  │◂────│    GROQ      │
│  (localhost:5173)│     │   Queries    │
└─────────────────┘     └──────────────┘
```

## Files Added

| File                            | Purpose                  |
| ------------------------------- | ------------------------ |
| `sanity/`                       | Sanity Studio project    |
| `sanity/schemas/`               | Content type definitions |
| `src/lib/sanityClient.ts`       | Sanity client & helpers  |
| `src/hooks/useSanityContent.ts` | Content fetching hook    |
| `src/types/sanity.ts`           | TypeScript types         |

## Troubleshooting

**Content not loading?**

- Ensure the Sanity project ID is correct
- Check that content is published (not just saved as draft)
- Verify the page slug matches (e.g., "home", "for-students")

**CORS errors?**

- Add `http://localhost:5173` to your Sanity project's CORS origins at [sanity.io/manage](https://www.sanity.io/manage) → Your Project → API → CORS origins
