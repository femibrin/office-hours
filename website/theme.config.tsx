import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Office Hours</strong>,
  project: {
    link: 'https://github.com/femibrin/office-hours',
  },
  docsRepositoryBase: 'https://github.com/femibrin/office-hours/tree/main/website',
  footer: {
    text: 'Built by Femi Brinson with Claude Code',
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  primaryHue: 210,
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Office Hours',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="AI-powered career tools that run in your terminal" />
      <meta property="og:title" content="Office Hours" />
      <meta property="og:description" content="AI-powered career tools that run in your terminal" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  search: {
    placeholder: 'Search...',
  },
}

export default config
