import { StoreProvider } from '@/app/providers/StoreProvider'
import { Theme } from '@/app/providers/ThemeProvider'
import type { Preview } from '@storybook/react'

import 'app/styles/index.scss'
import { CSSProperties } from 'react'
import { BrowserRouter } from 'react-router-dom'

const getStyle = (): CSSProperties => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

type ThemeModes = {
  [key in Theme]: {
    theme: Theme
  }
}

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, context) => {
      const theme = (context.globals.theme || Theme.LIGHT) as Theme

      return (
        <StoreProvider>
          <BrowserRouter>
            <div id='storybook-container' style={getStyle()} className={`app ${theme}`}>
              <Story />
            </div>
          </BrowserRouter>
        </StoreProvider>
      )
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chromatic: {
      disableAnimations: true,
      modes: Object.values(Theme).reduce((acc: ThemeModes, theme) => {
        acc[theme] = { theme }
        return acc
      }, {} as ThemeModes),
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: Object.values(Theme).map((theme) => ({
          title: theme.split('_')[1].slice(0, 1).toUpperCase() + theme.split('_')[1].slice(1),
          value: theme,
          icon: 'component',
        })),
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: Theme.LIGHT,
  },
}

export default preview
