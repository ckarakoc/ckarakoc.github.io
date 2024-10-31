import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinderService {

  // Regex-Replace:

  projects = [
    {
      title: "Computer Graphics",
      code: "https://github.com/alikahawa/group7",
      tech: ["C", "C++"],
      description:
        "Algorithms for the visualization of 3D volumetric data.",
      pdfLink: "/project-pdfs/Computer_Graphics.pdf",
    },
    {
      title: "Software Engineering Methods: AssDr0ids",
      imgSrc: "/project-imgs/ass0.jpg",
      code: "https://github.com/ckarakoc/AssDr0ids",
      tech: ["Java"],
      description:
        "An implementation of the Asteroids game made with design patterns and test driven development.",

      pdfLink: "",
    },
    {
      title: "Computational Intelligence: Ant Colony Optimization",
      imgSrc: "/project-imgs/aco0.jpg",
      code: "https://github.com/ckarakoc/CIassignment3",
      tech: ["Java"],
      description:
        "Ant Colony Optimization Algorithm solving the TSP.",

      pdfLink: "",
    },
    {
      title: "Machine Learning",
      imgSrc: "/project-imgs/ml0.jpg",
      code: "https://github.com/ckarakoc/CINetwork",
      tech: ["MatLab"],
      description:
        "A generic Machine Learning algorithm.",

      pdfLink: "",
    },
    {
      title: "Datamining",
      imgSrc: "/project-imgs/datamine0.jpg",
      code: "https://github.com/ckarakoc/DataMining",
      tech: ["Java"],
      description:
        "Datamining course assignments.",

      pdfLink: "",
    },
    {
      title: "A Multithreaded Netflix recommender system",
      imgSrc: "/project-imgs/netflix.jpg",
      code: "https://github.com/ckarakoc/DataMiningRecommender",
      tech: ["Java"],
      description:
        "Netflix Recommender System, Machine Learning, Nearest Neighbour Latent Factors, made with Java.",

      pdfLink: "/project-pdfs/DM.pdf",
    },
    {
      title: "A Netflix recommender system",
      imgSrc: "/project-imgs/netflix.jpg",
      code: "https://github.com/ckarakoc/recommender",
      tech: ["Python"],
      description:
        "Netflix Recommender System, Machine Learning, Nearest Neighbour Latent Factors, made with Python.",

      pdfLink: "/project-pdfs/Netflix_Challenge.pdf",
    },
    {
      title: "Multi-Core Nested Depth-First Search",
      imgSrc: "/project-imgs/ndfs0.png",
      code: "https://github.com/ckarakoc/ndfs",
      tech: ["Java"],
      description:
        "Concurrency and Multithreading: An implementation of the Multi-Core Nested Depth-First Search",

      pdfLink: "/project-pdfs/ndfs.pdf",
    },
    {
      title: "Two Brains: Illuminati-D2.1",
      imgSrc: "/project-imgs/twob0.jpg",
      code: "https://github.com/FWDekker/Illuminati-D2.1",
      tech: ["Java", "JavaFX"],
      description:
        "A group project, making a desktop application trying to match students with each other.",

      pdfLink: "",
    },
    {
      title: "Motion Tracking in Virtual Reality",
      imgSrc: "/project-imgs/motion0.png",
      code: "https://github.com/GreybeardCG/vr-number-one",
      tech: ["Unity", "C#"],
      description:
        "Our context project for a TU Delft Startup (AXIS Neuron).",

      pdfLink: "",
    },
    {
      title: "Compiler Construction",
      imgSrc: "/project-imgs/llvm0.png",
      code: "https://github.com/nielsdebruin/CoCo",
      tech: ["LLVM", "Python", "Shell", "C", "C++"],
      description:
        "Created compiler features for a custom C-like language.",

      pdfLink: "",
    },
    {
      title: "Ray Tracer",
      imgSrc: "/project-imgs/cg1.png",
      code: "https://github.com/ricohageman/ComputerGraphics",
      tech: ["C", "C++"],
      description:
        "We created a Raytracer in C++.",

      pdfLink: "",
    },

    {
      title: "Döner Kebab Store",
      imgSrc: "/project-imgs/doner0.png",
      code: "https://github.com/ckarakoc/CelalsDonerKebab",
      tech: ["PHP", "Laravel"],
      description:
        "A website created for a local Fast food chain. Not fully finished, because it was never delivered.",

      pdfLink: "",
    },
    {
      title: "Codewars",
      imgSrc: "/project-imgs/codewars0.png",
      code: "https://github.com/ckarakoc/codewars",
      projectLink: "https://ckarakoc.github.io/codewars/",
      tech: ["HTML", "CSS", "Javascript", "Python", "Selenium"],
      description:
        "Web Scraper for CodeWars.",

      pdfLink: "",
    },
    {
      title: "Conway's Game of Life",
      imgSrc: "/project-imgs/gol0.jpg",
      code: "https://github.com/ckarakoc/game-of-life",
      projectLink: "",
      tech: ["Python", "PyQt5", "OpenGL"],
      description:
        "Conway's game of life written in PyQt5 OpenGL.",

      pdfLink: "",
    },
    {
      title: "Conway's Game of Life",
      imgSrc: "/project-imgs/gol1.png",
      code: "https://github.com/ckarakoc/GameOfLife",
      projectLink: "",
      tech: ["Java", "JavaFX"],
      description:
        "Conway's game of life written in JavaFX.",

      pdfLink: "",
    },
    {
      title: "Snake",
      imgSrc: "/project-imgs/snake0.jpg",
      code: "https://github.com/ckarakoc/snake",
      projectLink: "https://ckarakoc.github.io/snake",
      tech: ["HTML", "CSS", "Javascript"],
      description:
        "A simple implementation of snake.",

      pdfLink: "",
    },
    {
      title: "Portfolio website",
      imgSrc: "/project-imgs/portfolio0.png",
      code: "https://github.com/ckarakoc/Website",
      projectLink: "https://www.ckarakoc.nl",
      tech: ["HTML", "SCSS", "Angular", "Typescript", "Python", "PrimeNG"],
      description:
        "This will be my future portfolio website, currently work in progress. Ask for a preview.",

      pdfLink: "",
    },
    {
      title: "PHD: Secret Life of Software Code",
      imgSrc: "/project-imgs/phd0.jpg",
      code: "",
      projectLink: "",
      tech: ["Github"],
      description:
        "For my Bachelor Seminar I helped a PHD student with journal articles.",
      pdfLink: "/project-pdfs/Bachelor_Seminar__Secret_Life_of_Software_Code.pdf",
    },
    {
      title: "Frontend Mentor",
      imgSrc: "/project-imgs/frontendmentor0.png",
      code: "https://github.com/ckarakoc/FrontendMentor",
      projectLink: "https://ckarakoc.github.io/FrontendMentor/",
      tech: ["Github"],
      description:
        "This is a repo to show all my Frontend creations on frontendmentor.io.",

      pdfLink: "",
    },
  ]

  projects2 = [
    {
      title: "Certificates & Tutorials",
      imgSrc: "/project-imgs/certf.jpg",
      code: "https://github.com/ckarakoc/Certificates",
      projectLink: "https://ckarakoc.github.io/Certificates/",
      tech: [],
      description:
        "A public repository containing all my certificates.",

      pdfLink: "",
    }
  ]


  getTreeNodesData() {
    let data0 = [];
    let data2 = [];

    for (let i = 0; i < this.projects.length; i++) {
      let project = this.projects[i];
      if (!project.projectLink) {
        data2.push({
          key: '0-' + i, label: `${ project.title.trim().toLowerCase().replace(/\s+/g, '_') }.doc`, icon: 'pi pi-fw pi-file', data: 'https://www.ckarakoc.nl/#projects',
        });
        continue;
      }
      data0.push({
        key: '0-' + i, label: `${ project.title.trim().toLowerCase().replace(/\s+/g, '_') }.com`, icon: 'pi pi-fw pi-external-link', data: `${ project.projectLink }`, type: 'url',
      });
    }
    return [
      {
        key: '0',
        label: 'Projects',
        data: '',
        icon: 'pi pi-fw pi-globe',
        children: data0
      },
      {
        key: '1',
        label: 'Documents',
        data: '',
        icon: 'pi pi-fw pi-inbox',
        children: data2
      },
      {
        key: '2',
        label: 'Certificates',
        data: 'https://ckarakoc.github.io/Certificates/',
        icon: 'pi pi-fw pi-star-fill',
        children: []
      }
    ];
  }

  getFiles() {
    return Promise.resolve(this.getTreeNodesData());
  }
}
