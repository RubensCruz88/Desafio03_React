import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Detail } from "./Detail/Detail";
import { Container, Main, Post } from "./styles";

interface IPost {
	title: string;
	body: string;
	login: string;
	comments: number;
}


export function CardDetail() {
	const { id } = useParams()
	const [post, setPost] = useState<IPost>({} as IPost)

	async function loadPost() {
		const response = await api.get(`repos/RubensCruz88/Desafio03_React/issues/${id}`)

		const novoPost: IPost = {
			body: response.data.body,
			comments: response.data.comments,
			login: response.data.user.login,
			title: response.data.title
		}

		setPost(novoPost);
	}

	useEffect(() => {
		loadPost();
	},[])
	
	return (
		<Container>
			<Main>
				<Detail />

				<Post>
					<ReactMarkdown>
						{post.body}
					</ReactMarkdown>
				</Post>
			</Main>
		</Container>
	)

}