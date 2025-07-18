import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="tagline">সাইবার অপরাধ সুরক্ষা</h1>
        <div className="button-group">
          <Link to="/report">
            <button className="primary-button">Registration</button>
          </Link>
          <Link to="/login">
            <button className="secondary-button">Login</button>
          </Link>
        </div>
      </header>

      <main className="main-content">
        <h2 className="tagline">Your safety online matters</h2>
        <p className="description">
          Report cyber incidents quickly, securely, and easily. This platform ensures accessibility and ease of reporting for all citizens.
        </p>

        <div className="button-group">
          <Link to="/about">
            <button className="primary-button">About Us</button>
          </Link>

          <Link to="/contact">
            <button className="secondary-button">Contact</button>
          </Link>
        </div>
      </main>

      <footer className="footer">
        Enhancing Cybercrime Reporting Systems through HCI Principles — Bangladesh Study
      </footer>
    </div>
  );
}

export default Home;
