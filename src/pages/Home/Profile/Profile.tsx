import { Container, Content, Footer, Header, Resume } from "./styles";
import { FaExternalLinkSquareAlt, FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa';

interface Usuario {
	avatar: string;
	nome: string;
	usuario: string;
	empresa?: string;
	seguidores: number;
	linkGithub: string;
}

interface ProfileProps {
	user: Usuario
}

export function Profile({user}: ProfileProps) {

	return (
		<Container>
			<img src={user.avatar} />
			<Content>
				<Header>
					<span className="name">{user.nome}</span>
					<a href={user.linkGithub}>
						GITHUB
						<FaExternalLinkSquareAlt />
					</a>
				</Header>

				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia tempore consectetur, itaque nobis, fugiat 
					nihil reprehenderit blanditiis odio adipisci in quos numquam. Sequi nesciunt itaque, corrupti aspernatur qui 
					maiores ullam?
				</div>
				<Footer>
					<Resume isShown={user.usuario !== null}>
						<FaGithub />
						{user.usuario}
					</Resume>
					<Resume isShown={user.empresa !== null}>
						<FaBuilding />
						{user.empresa}
					</Resume>
					<Resume isShown={user.seguidores !== null}>
						<FaUserFriends />
						{user.seguidores} seguidores
					</Resume>
				</Footer>
			</Content>
		</Container>
	)
}