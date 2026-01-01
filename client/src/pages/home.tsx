import Layout from "@/components/layout";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export default function Home() {
  const heroProject = projects[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-muted">
           <img 
            src={heroProject.images[1]} // Use a different image for hero background
            alt="Hero Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        
        <div className="relative z-10 text-center text-white p-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
          >
            Design that feels <br/> like home.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base tracking-[0.2em] uppercase font-light opacity-90"
          >
            Curated Interiors • Bespoke Living
          </motion.p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <p className="text-lg md:text-xl leading-relaxed font-light text-muted-foreground">
            We believe that a home should be a reflection of the people who live inside. 
            Our approach blends timeless tradition with modern sensibility to create spaces 
            that are both beautiful and livable.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-32 container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-border/40 pb-6">
          <h2 className="text-sm tracking-[0.2em] uppercase text-muted-foreground">Selected Works</h2>
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">2023 — 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
