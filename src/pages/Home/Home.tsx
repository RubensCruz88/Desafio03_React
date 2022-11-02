import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import { Profile } from './Profile/Profile';
import { SearchForm } from './SearchForm/SearchForm';
import { CardsContainer, Container, Main } from './styles';
import { api } from '../../lib/axios';

interface Usuario {
	avatar: string;
	nome: string;
	usuario: string;
	empresa?: string;
	seguidores: number;
	linkGithub: string;
}

interface Issue {
	id: number;
	createdAt: Date;
	body: string;
	title: string
}

interface ResponseGithub {
	number: number;
	createdAt: Date;
	body: string;
	title: string;
}


export function Home() {
	const [user, setUser] = useState<Usuario>({} as Usuario)
	const [issues, setIssues] = useState<Issue[]>([])

	async function loadUser() {
		const response = await api.get('/users/rubenscruz88');

		const usuario: Usuario = {
			avatar: response.data.avatar_url,
			nome: response.data.name,
			usuario: response.data.login,
			empresa: response.data.company,
			seguidores: response.data.followers,
			linkGithub: response.data.html_url
		}

		setUser(usuario);

	}

	async function loadIssues() {
		const response = await api.get<ResponseGithub[]>('/repos/RubensCruz88/Desafio03_React/issues')

		const issues = response.data.map(issue => {
			return ({
				id: issue.number,
				createdAt: issue.createdAt,
				body: issue.body,
				title: issue.title
			})
		});

		setIssues(issues)
	};
	

	useEffect(() => {
		loadUser();
		loadIssues();
	},[])


	return (
		<Container>
			<Main>
				<Profile user={user} />
				<SearchForm TotalPublicacoes={issues.length}/>

				<CardsContainer>
					{issues.map(issue => {
						return (
							<Card key={issue.id} data={issue}/>
						)
					})}
				</CardsContainer>
			</Main>
		</Container>
	)

}
