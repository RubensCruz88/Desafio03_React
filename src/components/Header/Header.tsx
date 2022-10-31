import logo from '../../images/Logo.svg';
import effectLeft from '../../images/effect-left.svg'
import effectRight from '../../images/effect-right.svg'
import { Container } from './styles';

export function Header() {
	return (
		<Container>
			<img src={effectLeft} />
			<img src={logo} />
			<img src={effectRight} />
		</Container>
	)

}