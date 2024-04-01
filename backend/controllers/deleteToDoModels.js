import ToDoModel from "../models/ToDoModel.js";

const deleteToDoModel = async (req, res) => {
	const { _id } = req.body;

	ToDoModel.findByIdAndDelete(_id)
		.then(() => res.send("Deleted Successfuly"))
		.catch((err) => console.log(err));
};

export default deleteToDoModel;
