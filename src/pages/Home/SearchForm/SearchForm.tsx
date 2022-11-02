import { Container } from "./styles";

interface SearchFormProps {
	TotalPublicacoes: number;
}

export function SearchForm({ TotalPublicacoes }: SearchFormProps) {
	return (
		<Container>
			<div>
				<span className="title">Publicações</span>
				<span className="quantidade">{TotalPublicacoes} publicações</span>
			</div>

			<input placeholder="Buscar conteúdo"/>
		</Container>
	)

}