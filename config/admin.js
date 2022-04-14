module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '66835d6209d7ad2ba8dc8c0bfb401208'),
  },
});
