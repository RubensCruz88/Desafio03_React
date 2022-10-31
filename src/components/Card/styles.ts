import styled from "styled-components";

export const CardContainer = styled.a`
	display: flex;
	flex-direction: column;

	padding: 1.5rem;
	border-radius: 8px;
	cursor: pointer;

	background: ${props => props.theme['base-post']};

	a {
		text-decoration: inherit;
		color: inherit;
	}

`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;

	.cardTitle {
		font-weight: bold;
		font-size: 1.5rem;
		max-width: 70%;
	}

	.createdAgo {
		font-size: 1rem;
	}

`

export const Description = styled.div`
	height: 8rem;
	overflow: hidden;
`