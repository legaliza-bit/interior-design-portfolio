import { useRoute } from "wouter";
import Layout from "@/components/layout";
import { projects } from "@/lib/data";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  
  if (!match) return <NotFound />;

  const project = projects.find(p => p.id === params.id);
  
  if (!project) return <NotFound />;

  return (
    <Layout>
      <article className="min-h-screen">
        {/* Project Header */}
        <div className="h-[60vh] md:h-[70vh] w-full relative overflow-hidden bg-muted">
          <img 
            src={project.cover} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden" />
        </div>

        <div className="container mx-auto px-6 -mt-20 md:-mt-32 relative z-10 pb-24">
          <div className="bg-background p-8 md:p-12 shadow-sm max-w-4xl mx-auto border border-border/20">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
              <div className="md:w-1/3">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-4xl font-serif mb-6"
                >
                  {project.title}
                </motion.h1>
                <div className="space-y-4 text-xs tracking-[0.15em] uppercase text-muted-foreground border-t border-border/40 pt-6">
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="text-foreground">{project.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year</span>
                    <span className="text-foreground">{project.year}</span>
                  </div>
                   <div className="flex justify-between">
                    <span>Category</span>
                    <span className="text-foreground">{project.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-base leading-loose font-light text-muted-foreground"
                >
                  {project.description}
                  <br /><br />
                  Every detail was carefully considered to create a harmonious environment that speaks to the client's lifestyle. From the custom millwork to the hand-selected textiles, the space radiates warmth and sophistication.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="container mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
             {project.images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`${idx === 0 || idx === 3 ? "md:col-span-2" : ""} aspect-[4/3] bg-muted overflow-hidden`}
                >
                  <img src={img} alt={`Detail ${idx}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
                </motion.div>
             ))}
          </div>
        </div>
        
        {/* Next Project Navigation */}
        <div className="border-t border-border/40 py-24 text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 block">Next Project</span>
            <a href="/projects" className="text-3xl md:text-5xl font-serif hover:text-muted-foreground transition-colors cursor-pointer">
              View All Works
            </a>
        </div>
      </article>
    </Layout>
  );
}
