"use client"

import React, { useState, useEffect } from "react";

interface Box {
    id: number;
    ratio: number;
    ref: React.RefObject<HTMLDivElement>;
    content: JSX.Element;
  }

const AboutContent: React.FC = () => {
    const [boxes, setBoxes] = useState<Box[]>([
      { id: 0, ratio: 0, ref: React.createRef<HTMLDivElement>(), 
            content:  <>
                        <img src="/JonathanHolmberg.png" alt="My picture" />
                      </>
      },
      { id: 1, ratio: 0, ref: React.createRef<HTMLDivElement>(), 
        content:  <>
                    <p>My journey in web development started way back in 2008 while studying Graphic Design at Inveon in Porvoo, building websites with Flash and Adobe Dreamweaver until the restaurant and hospitality industry temporarily stole my heart.</p>
                    <p>I spent the next 12 years working in a large variety of different roles, until the pandemic hit and I started looking
                    for work and landed at <a href="https://serviceform.com/">Serviceform</a>, a start up company focusing on website conversion.</p>
                    <p>Working in a start up is very hectic but also very rewarding, giving me a possibility to work with a myriad of different projects.</p>
                  </>
      },
      { id: 2, ratio: 0, ref: React.createRef<HTMLDivElement>(),
        content:  <>
                    <p>I started out in Sales before switching over to the Customer Success team. I worked closely with some of the largest real estate and automotive brands in Finland.</p>
                    <p>As our need for Customer Service grew, I was tasked with building out a Customer Happiness role, the processes, NPS and other relevant parts and trained and mentored the team that took over the role.</p>
                    <p>After the project I went back into the CSM team working as a Senior, before moving on to the development team.</p>
                    <p> As a Junior Developer I got to work on a lot of tasks, for example refactoring and designing some of the pages in our Dashboard, making and implementing a Technical Tasks kanban, building out integrations with 3rd party platforms and implementing customer requests.</p>
                  </> 
      },
      { id: 3, ratio: 0, ref: React.createRef<HTMLDivElement>(),
        content:  <>
                    <p>I thrive in environments where innovation and creativity are encouraged, and I am always looking for new ways to approach problems and find solutions that can benefit the greater good.</p>
                    <p>I appreciate elegant, simple solutions. I appreciate going above and beyond, not because it&apos;s possible but because it&apos;s meaningful to the problem present.</p>
                    <p><b>Form follows function.</b></p>
                    <p> My strong analytical, problem solving, visual and interpersonal skills make me confident in my ability to contribute effectively to (almost) any team.</p>
                  </>
      },
      { id: 4, ratio: 0, ref: React.createRef<HTMLDivElement>(),
        content:  <>
                    <p>I&apos;ve mainly worked with Javascript, Typescript, React, Next, AWS and Firebase. I&apos;ve done some smaller projects in Python and worked with 3rd party tools such as Figma, Canva and Zapier.</p>
                    <p>I am always eager to learn new languages, frameworks and techniques, for example playing around with HTMX, CSS animations and semantic HTML.</p>
                  </>
      },
      { id: 5, ratio: 0, ref: React.createRef<HTMLDivElement>(),
        content:  <>
                    <p>Aside from work and school my passion to learn also spills over to my personal life. I spend a lot of time watching videos essays, reading articles and documentation and doing deep dives on subjects such as
                    the Intersection Observer API, WAI-ARIA and Web site accessibility or SVG&apos;s. I also like using things like the Fibonacci Sequence or the Golden Ratio while designing.</p>
                     <p>While not staring at a computer screen I am most likely hanging out with my partner and our dogs, picking mushrooms, at the gym, taking care of sheep or on a yoga retreat.</p>
                     <img id="sheeps" src="/sheeps.png" alt="Sheep" />
                  </>
      },
    ]);
  
    const [currentSection, setCurrentSection] = useState<number>(0); // State to track the section number
  
    const titles: Record<number, JSX.Element> = {
      0: <h1>About<span>.</span></h1>,
      1: <h1>History<span>.</span></h1>,
      2: <h1>At Serviceform<span>.</span></h1>,
      3: <h1>As a developer<span>.</span></h1>,
      4: <h1>Technologies<span>.</span></h1>,
      5: <h1>Leisure<span>.</span></h1>,
    };
  
    useEffect(() => {
      const observerOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList(),
      }
  
      const observer = new IntersectionObserver(handleIntersect, observerOptions);
      boxes.forEach((box) => {
        const boxElement = box.ref.current;
        if (boxElement) {
          observer.observe(boxElement);
        }
      });
  
      return () => {
        boxes.forEach((box) => {
          const boxElement = box.ref.current;
          if (boxElement) {
            observer.unobserve(boxElement);
          }
        });
      };
    }, [boxes]);
  
    const buildThresholdList = (): number[] => {
      const thresholds: number[] = [];
      const numSteps = 20;
      for (let i = 1.0; i <= numSteps; i++) {
        thresholds.push(i / numSteps);
      }
      thresholds.push(0);
      return thresholds;
    };
  
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      let visibleBoxCount = 0; // Counter for visible boxes
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const targetId = Number(entry.target.id); // Convert id to number
          setBoxes((prevBoxes) =>
            prevBoxes.map((box) =>
              box.id === targetId ? { ...box, ratio: entry.intersectionRatio } : box
            )
          );
          visibleBoxCount++;
        }
      });
  
      if (visibleBoxCount > 0) {
        setCurrentSection(Math.max(...entries.map(entry => entry.isIntersecting ? Number(entry.target.id) : -1)));
      } else {
        setCurrentSection(0);
      }
    };
  
    return (
      <article data-step={currentSection}>
        <span className="glass">
          {titles[currentSection]}
        </span>
        <section className={"container"}>
          <div className={"outerContainer"}>
            <div className={"boxContainer"}>
              {boxes.map((box) => (
                <div
                  key={box.id}
                  id={String(box.id)}
                  ref={box.ref}
                  className={"box"}
                  style={{ opacity: box.ratio, }}>
                <div style={{ opacity: box.ratio }}>{box.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <figure className="sticky">
        <p></p>
      </figure>
      </article>
    );
  };
  
  export default AboutContent;