import { Link } from "wouter";
import { Project } from "@/lib/data";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.id}`}>
      <motion.div 
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-muted">
          <img 
            src={project.cover} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-serif mb-2 text-foreground group-hover:text-muted-foreground transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
            {project.category}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
