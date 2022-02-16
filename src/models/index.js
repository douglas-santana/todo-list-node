const { MongoClient } = require('mongodb');
require('dotenv').config();

const DB_NAME = process.env.DB_NAME;
const URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/${DB_NAME}`;

const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
	if (!connection) {
		connection = (await MongoClient.connect(
			URL,
			OPTIONS,
		)).db(DB_NAME);
	}
  
	return connection;
};
