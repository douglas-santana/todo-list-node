const insertTask = require('../../services/addTask');

module.exports = async (req, res) => {
	try {
		const { item } = req.body;
		await insertTask(item);
		res.status(201).json({ message: 'created'});
	} catch (error) {
		res.status(500).send('erro');
	}
};