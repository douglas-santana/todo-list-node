const getTasks = require('../../services/getTasks');

module.exports = async (req, res) => {
	try {
		const tasks = await getTasks();
		res.status(200).json({ tasks });
	} catch (error) {
		res.status(500).send('erro ao buscar');
	}
};