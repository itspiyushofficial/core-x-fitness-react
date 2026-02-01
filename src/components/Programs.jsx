import { useNavigate } from "react-router-dom";
import weightImg from "../Images/weight-gain.webp";
import cardioImg from "../Images/cardio.webp";
import fatlossImg from "../Images/weight-loss.webp";
import strengthImg from "../Images/strength.jpg";
import personalImg from "../Images/personal-training.jpg";
import dietImg from "../Images/weight-gain-diet.jpg";
import machineImg from "../Images/imported-machines.jpg";
import workoutImg from "../Images/workout-plans.jpg";

const Programs = () => {
  const navigate = useNavigate();
  const goToGallery = () => {
    navigate("/gallery");
  };
  return (
    <section className="section">
      <h2>Our Programs</h2>

      <div className="programs">
        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${weightImg})` }}
        >
          <h3>Weight Training</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${cardioImg})` }}
        >
          <h3>Cardio Training</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${fatlossImg})` }}
        >
          <h3>Fat Loss Program</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${strengthImg})` }}
        >
          <h3>Strength & Conditioning</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${personalImg})` }}
        >
          <h3>Personal Training</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${dietImg})` }}
        >
          <h3>Weight Gain Diet</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${machineImg})` }}
        >
          <h3>Imported Machines</h3>
        </div>

        <div
          className="program"
          onClick={goToGallery}
          style={{ backgroundImage: `url(${workoutImg})` }}
        >
          <h3>Workout Charts and Plans</h3>
        </div>
      </div>
    </section>
  );
};

export default Programs;
