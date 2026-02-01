import aboutBg from "../Images/about-bg.jpg";
import aboutSide from "../Images/about-side.png";

function AboutSection() {
  return (
    <section
      className="about-section"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.8),
            rgba(0,0,0,0.6)
          ),
          url(${aboutBg})
        `
      }}
    >
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image slide-hidden">
          <img src={aboutSide} alt="Gym Training" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content slide-hidden">
          <h2>About Core X Fitness</h2>
          <p>
            Core X Fitness is a newly established, modern strength-focused gym
            built for people who are serious about real transformation.
            <br /><br />
            We believe in disciplined training, correct form, and consistency —
            not shortcuts. Our gym is designed to support both beginners and
            experienced lifters in a motivating, no-nonsense environment.
            <br /><br />
            With quality equipment, focused guidance, and a powerful atmosphere,
            Core X Fitness helps you build strength, confidence, and long-term
            results.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;
