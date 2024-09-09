# Portfolio website
 
Welcome! This is my personal portfolio and digital playground for front end techniques.
This README will function both as a introductory read and as a glossary and index for my personal cache of data and knowledge.

## Purposes of this project:

I am building this website for a couple of reasons:

### 1. To get better

During the last months I've iterated through a lot of repos, setting up a project from (relative) zero to production as fast
as I can, then deleting the repo and starting anew. There is a saying in music; "Repetition legitimizes. Repetition legitimizes".
Doing so has given me the opportunity to try out a myriad of different techniques, folder structures, dependencies, initial commits and
other variables to find a comfortable setup. It also gave me the chance to filter out ideas, as things I though were final have disappeared
or changed completely during the process. I am also trying out atomic commits, trying to keep the changes very (maybe even ridiculously) fragmented.

### 2. To showcase my work

I feel like I have a lot to give and that my CV doesn't give a accurate description of me as a person or the skillset I currently have and
that I am working towards. Two core tenets of my learning experience is applying what I've learned to practical (and sometimes absurdist)
implementations as well as being able to explain the core concept of something to anyone. So building out a site where I can display both
the "Works" (practical) and the "Blog" (educational) makes sense.

### 3. To help others

Starting out in the developer journey can be a pain in the ass, and requires a lot of passion and dedication from someone. Things change with
a blazing speed, documentation is scattered or outdated and the scope of everything that goes into modern development and grasping the "bigger picture"
can be very challenging. Hopefully someone somewhere will stumble upon this repo or the site itself and possibly even steal or learn a thing or two.
That is why I am using [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/) - [more info here](https://choosealicense.com/licenses/cc0-1.0/)
as the lisence for this repo, use whatever you find useful!

## Setting up VSCodium

I wanted to start from a place of 0 configuration, and evolve my setup when I either get frustrated with something or learn something new. I also made sure
not to just copypaste things people smarter than me have done, and truly weigh the usefullness and necessity of tools I adopt. Regarding VSCodium that mainly
consisted of hiding a bunch of things I dont need, creating my own snippets (more on that in the future) and learning essential [keyboard shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings) and
[Emmet](https://code.visualstudio.com/docs/editor/emmet) abbreviations.

## Initial Commit

After trying out a bunch of different setups, I landed on

npm create t3-app@latest made by [Theo](https://t3.gg/), a [skater boy from California](https://www.youtube.com/watch?v=aWfYxg-Ypm4&t=86s&ab_channel=Programmersarealsohuman)
To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

The stack is quite lightweight as is, and omitting tRPC, auth, ORM (and Tailwind!) due to the nature of the project makes it even lighter.

I decided to stick to vanilla CSS because of 3 1/2 reasons:

1. Embracing the full chaos of default styling and learn more about css resets.
2. Limiting the use of classes altogether, trying to write out more semantic HTML.
3. Limiting my use of CSS modules to increase re-usability and smarter site and component structure.
4. It's fun and looks a lot nicer.

### Stack

Next.js
React
Vanilla CSS

### Filesize:

301 699 704 bytes (**365,9 MB** on disk) for **19 908 items**.

### Running locally:

**Average**
10 requests
1.4 MB transferred
6.5 MB resources
Finish: 430 ms
DOMContentLoaded: 164 ms
Load: 420 ms

### Deploying to Vercel
[https://portfolio-bice-one-48.vercel.app/]

**Average**
11 requests
164 kB transferred
412 kB resources
Finish: 473 ms
DOMContentLoaded: 309 ms
Load: 398 ms