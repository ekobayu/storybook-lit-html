import type { Preview } from '@storybook/web-components'
import '../src/styles/the_accelerator/scss/the_accelerator.style.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
