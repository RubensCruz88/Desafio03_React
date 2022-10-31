import styled from "styled-components";

export const Container = styled.div`
	padding: 2rem;
	border-radius: 16px;
	margin-top: -5rem;

	background: ${props => props.theme['base-profile']};

	h1 {
		margin: 1rem 0;
	}
`

export const Header = styled.div`
	display: flex;
	justify-content: space-between;

	a {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		cursor: pointer;

		color: ${props => props.theme['blue-500']};
	}
`

export const Footer = styled.div`
	display:flex;
	gap: 1.5rem;

	color: ${props => props.theme['base-label']};
`

export const Resume = styled.div`
	display: flex;
	gap: 0.5rem;

`