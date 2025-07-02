import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import path from 'path';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'recipes',
        path: 'recipes',
        routeBasePath: 'recipes',
        sidebarPath: path.resolve(__dirname, './sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'house',
        path: 'house',
        routeBasePath: 'house',
        sidebarPath: path.resolve(__dirname, './sidebars.ts'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: path.resolve(__dirname, './sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // unhide the following rows if you want to add a blog
        /*
        {
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
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // add widget here as navbar is always loaded regardless of page
        // /docs/ folder
        /*
        {
          type: 'doc',
          position: 'left',
          docId: 'intro',
          label: 'asdf',
        },
        */
        // /recipes/ folder
        {
          type: 'doc',
          docId: 'intro',
          label: 'Recipes',
          docsPluginId: 'recipes',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          label: 'Home Stuff',
          docsPluginId: 'house',
          position: 'left',
        },
        /*
        {
          type: 'doc',
          docId: 'recipes', 
          label: 'Recipes',
          position: 'left',
        },
        */
        // {
          // type: 'doc',
          // docId: 'intro',
          // label: 'About Us',
          // docsPluginId: 'about',
          // position: 'left',
        // },
        {
          href: 'https://github.com/LoRose2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            // {
              // label: 'Blog',
              // to: '/blog',
            // },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,

    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: false,
        hideable: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
