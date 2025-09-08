export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8004),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url:'http://admin.ecokayizasweb.xyz',
});
