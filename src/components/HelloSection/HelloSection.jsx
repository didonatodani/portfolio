import "./HelloSection.css";

function HelloSection() {
  return (
    <section id="hello-section">
      <h2>Dani Di&nbsp;Donato</h2>
      {/* this h1 will have animations in the future */}
      <h1>&lt;Web Dev/&gt;</h1>
      <a href="#projects-section" className="hello-btn">CHECK MY WORK!</a>
    </section>
  );
}
export default HelloSection;
