import styled from "styled-components";


export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	margin: 2rem 0;

	div {
		display: flex;
		justify-content: space-between;
	}

	input {
		padding: 1rem;
		border-radius: 8px;
		border: 0;

		background: ${props => props.theme['base-input']};
		color: ${props => props.theme['base-text']};
		font-size: 1rem;


		&::placeholder {
			color: ${props => props.theme['base-label']};
		}

	}

`