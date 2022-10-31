import { FaAngleLeft, FaCalendar, FaComment, FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { Container, Footer, Header, Resume } from "./styles";
import { NavLink } from 'react-router-dom';


export function Detail() {
	return (
		<Container>
			<Header>
				<NavLink to="/" end title="home">
					<FaAngleLeft size={24} />
					VOLTAR
				</NavLink>

				<a>
					VER NO GITHUB
					<FaExternalLinkSquareAlt size={22} />
				</a>
			</Header>
			<h1>JavaScript data types and data structures</h1>
			<Footer>
					<Resume>
						<FaGithub />
						rubenscruz88
					</Resume>
					<Resume>
						<FaCalendar />
						RocketSeat
					</Resume>
					<Resume>
						<FaComment />
						32 seguidores
					</Resume>
				</Footer>

		</Container>
	)
}