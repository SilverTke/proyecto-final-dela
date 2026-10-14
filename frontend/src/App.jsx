import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
