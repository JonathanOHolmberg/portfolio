import BlogGrid from "@/components/Blog/BlogGrid";

import "@/styles/pages/blog.css";

export default function Blog() {
    return (
        <main>
            <span><h1>Blog<span>.</span></h1></span>
           <section>
             <BlogGrid />  
           </section>
        </main>
    );
}