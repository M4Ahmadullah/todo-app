import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AuroraBackground from "./components/bg";

function App() {
	return (
		<div>
			<AuroraBackground className="">
				<div className="w-full h-full flex flex-col z-10">
					<Navbar />
					<Hero />
				</div>
			</AuroraBackground>

			<div>
				<h1>AHmadullah</h1>
			</div>
		</div>
	);
}

export default App;
