import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    server: {
      allowedHosts: [
        'localhost',
        'admin.ecokayizasweb.xyz',
        'www.admin.ecokayizasweb.xyz',
        'admin.121.40.165.119',
        '121.40.165.119'
      ],
    }
  });  NODE_OPTIONS="--max-old-space-size=2048" npm run build
};
