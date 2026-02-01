import Programs from "../components/Programs";
import programsBg from "../Images/Programs-bg.jpg";

function ProgramsPage() {
  return (
    <div
      className="programs-page-bg"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)),
          url(${programsBg})
        `,
      }}
    >
      <Programs />
    </div>
  );
}

export default ProgramsPage;
