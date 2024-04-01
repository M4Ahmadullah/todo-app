import { Formik } from "formik";

const Form = () => (
	<div className="m-0 bg-transparent  border-none py-1 px-10">
		<h1 className=" text-center my-0 w-full h-full font-semibold text-white text-4xl py-5 pb-10">
			To-Do App
		</h1>
		<Formik
			initialValues={{ title: "", description: "" }}
			validate={(values) => {
				const errors = {};
				if (!values.title) {
					errors.title = "Required";
				} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.title)) {
					errors.title = "Invalid title address";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				/* and other goodies */
			}) => (
				<form onSubmit={handleSubmit} className="w-full h-full">
					<label htmlFor="title" className="text-white">
						Title
					</label>
					<textarea
						type="text"
						name="title"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.email}
						className="my-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-100 px-4 py-2 w-[100%] h-12 resize-none transition duration-300 ease-in-out"
					/>
					{errors.email && touched.email && errors.email}
					<label htmlFor="description" className="text-white text-start items-start justify-start">
						description
					</label>
					<textarea
						type="text"
						name="description"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.description}
						className="my-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-100 px-4 py-2 w-full h-12 resize-none transition duration-300 ease-in-out
						
						"
					/>
					{errors.description && touched.description && errors.description}
					<button className="inline-flex w-full h-12 animate-shimmer items-center justify-center rounded-md border border-slate-900 bg-[linear-gradient(150deg,#000103,15%,#1e2631,55%,#000103)] bg-[length:120%_120%] px-6 font-medium text-slate-100 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-50">
						Submit
					</button>
				</form>
			)}
		</Formik>
	</div>
);

export default Form;
