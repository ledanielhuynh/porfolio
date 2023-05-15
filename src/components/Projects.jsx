import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import github from "../assets/github.svg";
import figma from "../assets/figma.svg";
import website from "../assets/website.png";
import unilectives from "../assets/unilectives.png";
import rissk from "../assets/rissk.png";
import destinate from "../assets/destinate.png";

const projects = [
  {
    category: "FRONTEND",
    logo: github,
    image: website,
    title: "PORTFOLIO WEBSITE",
    description:
      "A website that showcases my skills, projects, personality, and achievements with a visually appealing and responsive interface. Coded with Vite, React, and TailwindCSS.",
    link: "https://github.com/ledanielhuynh/ledanielhuynh.github.io",
  },
  {
    category: "UX/UI DESIGN",
    logo: figma,
    image: unilectives,
    title: "UNI-LECTIVES",
    description:
      "Collaboratively redesigned CSESoc's Uni-lectives, which offers UNSW computer science students a platform where they can read and write reviews to aid in selecting their electives.",
    link: "https://www.figma.com/file/h2OXZG9l4nfVZCmzDt72r1/UNI-LECTIVES?type=design&node-id=0%3A1&t=geO8JeG9LtO0oD54-1",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: rissk,
    title: "RISSK.",
    description:
      "An app that offers assistance to people with disabilities and their caregivers, covering their needs in natural disasters.",
    link: "https://www.figma.com/proto/3gEb7AjZCl4C6Dy1BvXAWI/RISSK?page-id=143%3A1735&type=design&node-id=143-1737&viewport=986%2C656%2C0.88&scaling=min-zoom&starting-point-node-id=143%3A1737&show-proto-sidebar=1",
  },
  {
    category: "CASE STUDY",
    logo: figma,
    image: destinate,
    title: "DESTINATE",
    description:
      "An app that enables users to store and share recommendations conveniently, whilst gaining monetary rewards.",
    link: "https://www.figma.com/proto/RsfnPghJCn86WPOHGsLTVk/DESTINATE?page-id=1%3A1773&type=design&node-id=1-1780&viewport=1359%2C616%2C0.49&scaling=min-zoom&starting-point-node-id=1%3A1780&show-proto-sidebar=1",
  },
];

const ProjectCard = ({ index, category, image, logo, title, description, link }) => {
  const handleCardClick = () => {
    window.open(link, "_blank");
  };

  const projectNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex cursor-pointer flex-col space-y-8 rounded-2xl bg-zinc-900 p-8 transition duration-300 ease-out hover:bg-zinc-950"
      onClick={handleCardClick}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">{projectNumber}</h1>
          <h1 className="text-xl font-bold text-zinc-500">{category}</h1>
        </div>
        <div className="flex h-16 w-16 place-content-center justify-center rounded-xl bg-zinc-800 p-4">
          <img src={logo} alt={category} />
        </div>
      </div>
      <img src={image} alt={"${title} Mockup"} className="rounded-xl" />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-white">{title}</h1>
        <ul className="text-base text-zinc-300 md:text-lg">{description}</ul>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCards(true);
    }, 500);
  }, [selectedCategory]);

  const filteredProjects =
    selectedCategory === ""
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex max-w-screen-xl flex-col items-center justify-start space-y-12">
      <div className="space-y-4">
        <div className="grid max-w-screen-xl grid-rows-1 gap-4 md:grid-cols-2">
          <AnimatePresence>
            {showCards &&
              filteredProjects.map((project, index) => (
                <motion.div
                  key={"project-${index}"}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="flex"
                >
                  <ProjectCard
                    index={index}
                    category={project.category}
                    logo={project.logo}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                  />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
