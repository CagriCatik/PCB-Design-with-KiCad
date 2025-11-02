// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electronics & PCB Design',
  tagline: 'A website dedicated to Electronics and PCB design with KiCad',
  favicon: 'img/favicon.ico',
  url: 'https://CagriCatik.github.io',
  baseUrl: '/PCB-Design-with-KiCad/',
  organizationName: 'CagriCatik', 
  projectName: 'PCB-Design-with-KiCad',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/edit/main/webpage',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/CagriCatik/PCB-Design-with-KiCad/tree/edit/main/webpage',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: ' ',
        logo: {
          alt: 'pcb logo',
          src: 'img/logo.png',
        },

        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pcbDesignSidebar',
            position: 'left',
            label: 'PCB Design',
          },
          {
            type: 'docSidebar',
            sidebarId: 'kicadSidebar',
            position: 'left',
            label: 'KiCad',
          },
          {
            type: 'docSidebar',
            sidebarId: 'schematicSidebar',
            position: 'left',
            label: 'Schematic',
          },
          {
            type: 'docSidebar',
            sidebarId: 'layoutSidebar',
            position: 'left',
            label: 'Layout',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designPrinciplesSidebar',
            position: 'left',
            label: 'Design Principles',
          },
          {
            type: 'docSidebar',
            sidebarId: 'designWorkflowSidebar',
            position: 'left',
            label: 'Design Workflow',
          },
          {
            type: 'docSidebar',
            sidebarId: 'symbolsEeschemaSidebar',
            position: 'left',
            label: 'Symbols Eeschema',
          },
          {
            type: 'docSidebar',
            sidebarId: 'footprintsPcbnewSidebar',
            position: 'left',
            label: 'Footprints Pcbnew',
          },
          {
            type: 'docSidebar',
            sidebarId: 'projectsSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            type: 'docSidebar',
            sidebarId: 'recipesSidebar',
            position: 'left',
            label: 'Recipes',
          },

          {
            type: 'docSidebar',
            sidebarId: 'electronicsSidebar',
            position: 'left',
            label: 'Electronics',
          },

          {
            label: 'GitHub',
            href: 'https://github.com/CagriCatik/PCB-Design-with-KiCad',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `PCB Design with KiCad`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
