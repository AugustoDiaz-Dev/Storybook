import React from "react"
// import Center from '../src/components/Center/Center'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui/core'
import { withConsole } from '@storybook/addon-console'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withA11y } from '@storybook/addon-a11y'

export const decorators = [
  // (Story) => (<Center>{Story()}</Center>),
  (Story) => (<ThemeProvider theme={theme}>
    <CSSReset />
    <Box m='4'>
      <Story />
    </Box>
  </ThemeProvider>),
];
// You should restart the server when you modify something in the .storybook folder

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

}

