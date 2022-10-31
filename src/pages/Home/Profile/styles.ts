import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 2rem 3rem;
	gap: 1.5rem;

	background: ${props => props.theme['base-profile']};
	border-radius: 16px;

	img {
		width: 10.5rem;
		height: 10.5rem;
	}

`

export const Content = styled.div`
	display:flex;
	flex-direction: column;
	gap: 1rem;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${props => props.theme['base-title']};

	.name {
		font-size: 2rem;
		font-weight: bold;
	}

	a {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		cursor: pointer;

		font-weight: bold;
		color: ${props => props.theme['blue-500']}
	}
	
`

export const Footer = styled.div`
	display:flex;
	gap: 1.5rem;
`

export const Resume = styled.div`
	display: flex;
	gap: 0.5rem;

`