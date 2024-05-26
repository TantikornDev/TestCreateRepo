import { defineConfig } from 'vitepress'
import { shared } from './config/shared.mjs'
import { en } from './config/en.mts'
import { th } from './config/th.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'English', ...en },
    th: { label: 'ไทย', ...th },
  }
})
