export default {
  env: process.env.NODE_ENV || 'production',
  port: 3001,

  email: {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'w.maeda.jp@gmail.com',
      pass: 'Baseball02171213'
    },
    from: 'w.maeda.jp@gmail.com',
  },
}
