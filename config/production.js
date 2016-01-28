var productionConfig = {
	nodeEnv: process.env.NODE_ENV || "production",
	webConcurrency: process.env.WEB_CONCURRENCY || 1,
	appName: process.env.APP_NAME,
	trelloKey: process.env.TRELLO_KEY,
	trelloSecret: process.env.TRELLO_SECRET,
	hostname: process.env.HOSTNAME,
	db: process.env.DB
}

module.exports = productionConfig;