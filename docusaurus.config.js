// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🦾 Simulately',
  tagline: 'Handy information and resources for physics simulators for robotic learning research.',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://simulately.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'haoran-geng', // Usually your GitHub org/user name.
  projectName: 'Simulately', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Simulately',
        logo: {
          alt: 'Simulately Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Information',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/geng-haoran/Simulator-Summary',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'BIGAI',
                href: 'http://eng.bigai.ai/',
              },
              {
                label: 'PKU EPIC Lab',
                href: 'https://pku-epic.github.io/',
              },
              {
                label: 'PKU CoRe Lab',
                href: 'https://pku.ai/',
              },
            ],
          },
          {
            title: 'Powered By',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'Cloudflare',
                href: 'https://www.cloudflare.com/',
              },
            ],
          },
          {
            title: 'About Us',
            items: [
              {
                label: 'Editors\'s Words',
                href: '/blog/editors-words',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/geng-haoran/Simulator-Summary',
              },
              {
                label: 'E-Mail',
                href: 'mailto:contact@simulately.io',
              },
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simulately, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;