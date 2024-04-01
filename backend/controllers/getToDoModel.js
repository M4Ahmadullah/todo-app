import ToDoModel from "../models/ToDoModel.js";

const getToDoModel = async (req, res) => {
	const todo = await ToDoModel.find();
	res.send(todo);
};

export default getToDoModel;
