import { Link } from "react-router-dom";
import { Footer } from "../../components";
import "./HomePage.scss";

export const HomePage: React.FC = () => {
  return (
    <div className="home-page animation-slide-down">
      <h1>Statistical Riddles</h1>
      <ul className="home-page__list animation-slide-down">
        <Link to="/prisoner-riddle">100 Prisoners Riddle</Link>
        <Link to="/monty-hall">Monty Hall Problem</Link>
      </ul>
      <Footer />
    </div>
  );
};
