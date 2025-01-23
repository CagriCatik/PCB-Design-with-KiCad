// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PCB Design with KiCad',
  tagline: ' A website for PCB Design with KiCad',
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
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
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
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Knowledge Base',
                to: '/docs/category/introduction',
              },
              {
                label: 'Recipes',
                to: '/docs/category/recipes',
              },
            ],
          },
          {
            title: 'Projects',
            items: [
              {
                label: 'Project 1',
                href: 'https://github.com/CagriCatik/PCB-Design-with-KiCad',
              },
              {
                label: 'Project 2',
                href: 'https://github.com/CagriCatik/PCB-Design-with-KiCad',
              },
              {
                label: 'Project 3',
                href: 'https://github.com/CagriCatik/PCB-Design-with-KiCad',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
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
