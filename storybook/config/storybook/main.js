module.exports = {
  stories: ['../../src/**/*.stories.(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    {
      name: "@storybook/addon-docs",
      options: {
        babelOptions: {
          present: [
            [
              "@vue/cli-plugin-babel/preset",
              {
                jsx: false,
              },
            ],
          ],
        },
      },
    },
  ]
}
