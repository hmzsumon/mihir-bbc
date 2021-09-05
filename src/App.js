import styled from 'styled-components';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import RoadMap from './components/RoadMap';
import TheTeam from './components/TheTeam';
import Works from './components/Works';
function App() {
	return (
		<AppWrapper>
			<ContentWrapper>
				<Navbar />
				<Hero />
				<Hr />
				<Works />
				<Hr />
				<RoadMap />
				<Hr />
				<TheTeam />
			</ContentWrapper>

			<Footer />
		</AppWrapper>
	);
}

export default App;

const AppWrapper = styled.div``;
const ContentWrapper = styled.div`
	padding: 10rem;
`;
const Hr = styled.hr`
	border-color: #3f3f3f;
`;
