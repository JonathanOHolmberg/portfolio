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
      <section>
        <span>
          <h2>Development<span>.</span></h2>
        </span>
        <article>
          <p>I am a software developer based out of Southern Finland, focusing primarily on front end and UX/UI.</p>
          <p>I mainly work with technologies like React, Next, Firebase and AWS.</p>
        </article>
        <button>Read more about me</button>
      </section>
      <section>
        <span>
          <h2>Digital Art<span>.</span></h2>
        </span>
        <article>
          <p>I primarily work on apps and sites but also create digital art, paintings and drawings in my spare time.</p>
        </article>
        <button>Check out my art</button>
      </section>
      <section>
        <span>
          <h2>Blog<span>.</span></h2>
        </span>
        <article>
          <p>I also started documenting my process by writing a blog.</p>
        </article>
        <button>Read my blog</button>
      </section>
      <section>
        <h3>Interested in my work?</h3>
        <article>
          <p>Thank you for taking the time to visiting my site.</p>
          <p>If there is anything I can help with, please let me know!</p>
        </article>
        <button>Send me a message</button>
      </section>
    </main>
  );
}