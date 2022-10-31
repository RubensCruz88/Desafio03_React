import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Home } from './pages/Home/Home';
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/Header";
import { CardDetail } from "./pages/CardDetail/CardDetail";
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />

		<BrowserRouter>
			<Router />
		</BrowserRouter>

	</ThemeProvider>

  )
}

export default App
