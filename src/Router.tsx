import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { CardDetail } from './pages/CardDetail/CardDetail';
import { Home } from './pages/Home/Home';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />}/>
				<Route path="/card/:id" element={<CardDetail />}/>
			</Route>
		</Routes>
	)
}