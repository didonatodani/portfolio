import stackData from "../../data/stack.json";
import "./StackSection.css";

function StackSection() {
  return (
    <section id="stack-section">
      <h2>Tech Stack</h2>
      <div className="stack-cards-container">
        {stackData.map((item, index) => {
          return (
            <article key={index} className="stack-card">
              <img
                src={item.image_url}
                alt={`${item.stack} logo`}
                className="stack-image"
              />
              <h3 className="stack-name">{item.stack}</h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default StackSection;
