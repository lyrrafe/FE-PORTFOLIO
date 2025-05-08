import Hero from '../components/Hero/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="page home-page">
      <div className="home-background">
        <div className="home-content">
          <div className="home-layout">
            <div className="profile-image-container">
              <div className="profile-image-circle">
                <img src="/fe.jpeg" alt="Lyrra Fe" />
              </div>
            </div>
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
