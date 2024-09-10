"use client";

import React, { useEffect, useState } from "react";

interface Box {
  id: number;
  ratio: number;
  ref: React.RefObject<HTMLDivElement>;
  content: JSX.Element;
}

const HomeContent: React.FC = () => {
  const [boxes, setBoxes] = useState<Box[]>([
    {
      id: 0,
      ratio: 0,
      ref: React.createRef<HTMLDivElement>(),
      content: (
        <section>
          <span>
            <h2>Development<span>.</span></h2>
          </span>
          <article>
            <p>
              I am a software developer based out of Southern Finland,
              focusing primarily on front end and UX/UI.
            </p>
            <p>
              I mainly work with technologies like React, Next, Firebase and
              AWS.
            </p>
          </article>
          <button>Read more about me</button>
        </section>
      ),
    },
    {
      id: 1,
      ratio: 0,
      ref: React.createRef<HTMLDivElement>(),
      content: (
        <section>
          <span>
            <h2>Digital Art<span>.</span></h2>
          </span>
          <article>
            <p>
              I primarily work on apps and sites but also create digital art,
              paintings and drawings in my spare time.
            </p>
          </article>
          <button>Check out my art</button>
        </section>
      ),
    },
    {
      id: 2,
      ratio: 0,
      ref: React.createRef<HTMLDivElement>(),
      content: (
        <section>
          <span>
            <h2>Blog<span>.</span></h2>
          </span>
          <article>
            <p>Explaining is a great way to learn. Thats why I also started documenting my process by writing a blog.</p>
          </article>
          <button>Read my blog</button>
        </section>
      ),
    },
    {
      id: 3,
      ratio: 0,
      ref: React.createRef<HTMLDivElement>(),
      content: (
        <section>
          <h3>Interested in my work?</h3>
          <article>
            <p>Thank you for taking the time to visiting my site.</p>
            <p>If there is anything I can help with, please let me know!</p>
          </article>
          <button>Send me a message</button>
        </section>
      ),
    },
  ]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };

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
    entries.forEach((entry) => {
      const targetId = Number(entry.target.id);
      const currentBox = boxes.find((box) => box.id === targetId);
      
      if (currentBox) {
        // Update ratio and data attribute based on the intersection ratio
        setBoxes((prevBoxes) =>
          prevBoxes.map((box) => {
            if (box.id === targetId) {
              const newRatio = entry.intersectionRatio;
              // Determine if we should add or remove the data attribute
              const updatedRef = box.ref.current;
                if (updatedRef && newRatio > 0.8) {
                  updatedRef.setAttribute("data-vis", "true");
                } else if (updatedRef && newRatio < 0.6) {
                  updatedRef.removeAttribute("data-vis");
                }
              return { ...box, ratio: newRatio };
            }
            return box;
          })
        );
      }
    });
  };

  return (
    <article>
      <section className={"container"}>
        <div className={"outerContainer"}>
          <div className={"boxContainer"}>
            {boxes.map((box) => (
              <div
                key={box.id}
                id={String(box.id)}
                ref={box.ref}
                className={"box"}
                style={{ opacity: box.ratio }}
              >
                {box.content}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default HomeContent;