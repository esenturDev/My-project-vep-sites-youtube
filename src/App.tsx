import { Layout } from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers/Providers";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Providers>
					<Layout />
				</Providers>
			</BrowserRouter>
		</>
	);
};

export default App;
