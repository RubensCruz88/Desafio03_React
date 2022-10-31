import styled from "styled-components";


export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 4.5rem 0;

	width: 100%;

	/* background: ${props => props.theme['blue-500']} */
	background-image: linear-gradient(${props => props.theme['base-background']},${props => props.theme['base-border']});


`