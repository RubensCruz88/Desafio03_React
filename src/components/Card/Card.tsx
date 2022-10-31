import { CardContainer, Description, Header } from "./styles";
import { NavLink } from 'react-router-dom';

export function Card() {
	return (
		<CardContainer>
			<NavLink to="/card" title="card" >
				<Header>
					<span className="cardTitle">
						Javascrt data types ans data structures
					</span>
					<span className="createdAgo">
						Há 1 dia
					</span>
				</Header>
				<Description>
					Programming languages all have built-in data structures, but these often differ from one language to another. This article 
					attempts to list the built-in data structures available in
					ut these often differ from one language to another. This article 
					attempts to list the built-in data structures available in 
					ut these often differ from one language to another. This article 
					attempts to list the built-in data structures available in  
				</Description>
			</NavLink>
		</CardContainer>
	)
}