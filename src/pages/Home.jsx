import Hero from '../components/Hero/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <div className="home-background">
        <div className="home-content">
          <Hero />
          <div className="picture-container">
            <img src="/fe.jpeg" alt="Featured content" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
