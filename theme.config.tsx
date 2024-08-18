import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Rhino Linux'
    }
  },
  logo: <span>Rhino Linux Wiki</span>,
  project: {
    link: 'https://github.com/rhino-linux',
  },
  chat: {
    link: 'https://discord.gg/reSvc8Ztk3',
  },
  docsRepositoryBase: 'https://github.com/rhino-site/rhino-linux-wiki/tree/main',
  footer: {
    text: 'Rhino Linux Wiki',
  },
  primarySaturation: {
    dark: 33,
    light: 67
  },
  primaryHue: 245,
}

export default config
