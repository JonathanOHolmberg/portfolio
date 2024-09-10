import HomeContent from "@/components/Home/Content";
import "@/styles/pages/home.css"

export default function Home() {

  return (
    <main>
      <section className="hero">
        <span>
          <h1>Hi!</h1>
          <h1>Welcome to my</h1>
          <h1>
            <div className="animation">
              <div className="animation-left"><span>Portfolio</span></div>
              <div className="animation-right"><span>Portfolio</span></div>
            </div>
          </h1>
        </span>
        <summary>I mainly write modern, lightweight and beautiful apps and websites.</summary>
        <button>Browse my work</button>
      </section>
      <HomeContent />
    </main>
  );
}