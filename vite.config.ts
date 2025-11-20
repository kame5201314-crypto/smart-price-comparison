import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    define: {
      // Explicitly define environment variables for Vercel builds
      'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(env.VITE_OPENAI_API_KEY || process.env.VITE_OPENAI_API_KEY || ''),
      'import.meta.env.VITE_AI_MODEL': JSON.stringify(env.VITE_AI_MODEL || process.env.VITE_AI_MODEL || 'gpt-3.5-turbo'),
      'import.meta.env.VITE_OPENROUTER_API_KEY': JSON.stringify(env.VITE_OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY || ''),
    },
  }
})
