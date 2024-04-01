import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
	text: {
		type: String,
		require: true,
	},
});

const ToDoModel = mongoose.model("ToDo", todoSchema);
export default ToDoModel;
