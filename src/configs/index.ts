const configs = {
    apis: {
        cep: process.env.REACT_APP_CEP_URL,
        economia: process.env.REACT_APP_ECONOMIA_URL,
        github: process.env.REACT_APP_GITHUB_URL,
        starWars: process.env.REACT_APP_STAR_WARS_URL,
    },
    sentry: process.env.REACT_APP_SENTRY_DSN || 'https://cc1c8d26e6a9479db60a5fba3179403b@o1196586.ingest.sentry.io/6319598'
};

export default configs;