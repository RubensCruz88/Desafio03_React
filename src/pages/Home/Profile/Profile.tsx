import { Container, Content, Footer, Header, Resume } from "./styles";
import { FaExternalLinkSquareAlt, FaGithub, FaBuilding, FaUserFriends } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export function Profile() {
	return (
		<Container>
			<img src="https://conteudo.imguol.com.br/c/entretenimento/80/2017/04/25/a-atriz-zoe-saldana-como-neytiri-em-avatar-1493136439818_v2_900x506.jpg" />
			<Content>
				<Header>
					<span className="name">Rubens Cruz</span>
					<a>
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
					<Resume>
						<FaGithub />
						rubenscruz88
					</Resume>
					<Resume>
						<FaBuilding />
						RocketSeat
					</Resume>
					<Resume>
						<FaUserFriends />
						32 seguidores
					</Resume>
				</Footer>
			</Content>
		</Container>
	)
}