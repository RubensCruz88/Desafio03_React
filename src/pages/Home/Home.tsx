import { Card } from '../../components/Card/Card';
import { Profile } from './Profile/Profile';
import { SearchForm } from './SearchForm/SearchForm';
import { CardsContainer, Container, Main } from './styles';

export function Home() {
	return (
		<Container>
			<Main>
				<Profile />
				<SearchForm />

				<CardsContainer>
					<Card />
					<Card />
					<Card />
				</CardsContainer>
			</Main>
		</Container>
	)

}
