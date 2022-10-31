import { Container } from "./styles";

export function SearchForm() {
	return (
		<Container>
			<div>
				<span className="title">Publicações</span>
				<span className="quantidade">6 publicações</span>
			</div>

			<input placeholder="Buscar conteúdo"/>
		</Container>
	)

}