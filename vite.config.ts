import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['localhost', '127.0.0.1', 'c327-2800-484-b37b-0-1c4e-a8d-2045-8f2d.ngrok-free.app'],
  },
});
