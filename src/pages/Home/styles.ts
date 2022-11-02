import styled from "styled-components";

export const Container = styled.div`
	display:flex;
	justify-content: center;

`

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -5rem;

	max-width: 62rem;

`

export const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: calc(50% - 1rem) calc(50% - 1rem);
	gap: 2rem;

`