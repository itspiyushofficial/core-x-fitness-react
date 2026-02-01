import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Membership from "../components/Membership";

import programsBg from "../Images/Programs-bg.jpg";

function Home() {
  return (
    <>
      <Hero />
      <About />

      {/* PROGRAMS WITH BG (HOME PAGE) */}
      <section
        className="programs-page-bg"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)),
            url(${programsBg})
          `,
        }}
      >
        <div className="section">
          <Programs />
        </div>
      </section>

      <Membership />
    </>
  );
}

export default Home;
