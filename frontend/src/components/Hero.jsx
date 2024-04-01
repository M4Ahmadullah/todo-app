import Form from "./Form";
import ToDoCards from "./ToDoCards";

const Hero = () => {
	return (
		<div className="w-full h-[70vh] items-end justify-center flex px-10 sm:px-10 md:px-6 lg:px-6">
			<div
				className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-transparent to-transparent bg-opacity-100 backdrop-blur-md item-center  text-center border rounded-3xl
				 shadow-2xl pb-10
			"
			>
				<Form />
				<ToDoCards />
			</div>
		</div>
	);
};

export default Hero;
