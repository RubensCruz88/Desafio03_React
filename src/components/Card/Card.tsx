import { CardContainer, Description, Header } from "./styles";
import { NavLink } from 'react-router-dom';

interface Issue {
	id: number;
	createdAt: Date;
	body: string;
	title: string
}

interface CardProps {
	data: Issue
}

export function Card({ data }: CardProps) {
	return (
		<CardContainer>
			<NavLink to={`/card/${data.id}`} title="card" >
				<Header>
					<span className="cardTitle">
						{data.title}
					</span>
					<span className="createdAgo">
						Há 1 dia
					</span>
				</Header>
				<Description>
					{data.body}
				</Description>
			</NavLink>
		</CardContainer>
	)
}