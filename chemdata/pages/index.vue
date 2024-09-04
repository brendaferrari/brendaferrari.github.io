<template>
  <div>
    <div class="flex flex-col">
      <div class="bg-violet-100 dark:bg-violet-400 max-h-fit">
        <div class="p-6">
          <img
            class="mx-auto rounded-full w-96 h-96"
            src="~/assets/images/profile.png"
          />
        </div>
        <div
          class="flex justify-center text-4xl dancing-script-font sm:text-5xl dark:text-zinc-800"
        >
          <p>Hello! I am Brenda Ferrari</p>
        </div>
        <div
          class="flex justify-center p-2 text-lg sm:text-xl dark:text-zinc-800"
        >
          <p>
            DSc in Chemistry | Cheminformatician | Artificial Intelligence |
            Computational Chemistry
          </p>
        </div>
        <div class="flex justify-center p-8 gap-1">
          <!-- https://flowbite.com/docs/typography/links/ -->
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
          />

          <a href="https://github.com/brendaferrari" target="_blank">
            <button
              class="bg-black hover:bg-slate-800 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"
            >
              <i class="fab fa-github mr-1"></i> GitHub
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-ferrari-b04bb2b4/"
            target="_blank"
          >
            <button
              class="bg-blue-800 hover:bg-blue-700 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"
            >
              <i class="fab fa-linkedin mr-1"></i> LinkedIn
            </button>
          </a>
          <a href="https://orcid.org/0000-0001-5609-0947" target="_blank">
            <button
              class="bg-lime-600 hover:bg-lime-500 rounded-lg text-white text-s text-center self-center px-3 py-2 my-2 mx-2"
            >
              <i class="fab fa-orcid mr-1"></i> ORCID
            </button>
          </a>
        </div>
        <div class="flex justify-center mb-4">
          <button
            type="button"
            onclick="smoothScroll(document.getElementById('second'))"
          >
            <ChevronDoubleDownIcon
              class="hover:bg-gray-300 rounded dark:hover:bg-gray-800 animate-bounce h-10 w-10 mt-2 md:flex"
            />
          </button>
        </div>
      </div>

      <div
        class="flex flex-col second h-fit bg-violet-200 dark:bg-violet-300 p-2 lg:flex-row max-w-fit"
        id="second"
      >
        <div class="flex flex-col space-y-4 items-center basis-2/5 px-12 py-12">
          <div
            class="flex justify-start dancing-script-font text-3xl md:text-5xl sm:text-4xl dark:text-zinc-800"
          >
            <h3>About me</h3>
          </div>
          <div>
            <img class="rounded w-auto h-44" src="~/assets/images/me.jpg" />
          </div>
          <div class="box-content bg-violet-400 rounded-full h-2 w-16"></div>
          <span class="text-justify not-prose dark:text-zinc-800">
            My name is Brenda Ferrari and I will be a Postdoctoral Reseacher at
            the Computational Nanoscience group at Nanoscience Center on the
            University of Jyväskylä (Jyväskylä, Finland).
          </span>
          <span class="text-justify not-prose dark:text-zinc-800">
            I will work on a project where ligand-stabilized metal nanoclusters
            are studied as sensors for chiral biomolecules in aqueous solvents.
            I am also I am adventuring myself on the world of frontend/backend
            by creating this website with the possibility to run the scripts and
            software I am developing. I usually write codes related to my
            research and blog posts to share concepts I have learned!
          </span>
        </div>

        <div class="flex flex-col space-y-4 items-center basis-2/5 px-12 py-12">
          <h3
            class="text-3xl md:text-5xl dancing-script-font not-prose dark:text-zinc-800"
          >
            Skills
          </h3>
          <div class="flex items-center">
            <div>
              <h4
                class="flex justify-end p-4 font-bold not-prose dark:text-zinc-800"
              >
                Chemistry
              </h4>
              <div v-for="(skill, index) in skillsReversed" :key="index">
                <ProgressBarReversed
                  :percentage="skill.percentage"
                  :name="skill.name"
                />
              </div>
            </div>
            <div>
              <h4
                class="flex justify-start p-4 font-bold not-prose dark:text-zinc-800"
              >
                Computation
              </h4>
              <div v-for="(skill, index) in skills" :key="index">
                <ProgressBar
                  :percentage="skill.percentage"
                  :name="skill.name"
                />
              </div>
            </div>
          </div>
          <div class="flex mt-4">
            <img
              src="https://media.tenor.com/akBy6qWGjs4AAAAi/peach-cat-mochi-peach-cat.gif"
              alt
              width="100"
              height="100"
            />
            <div class="thought">Always learning...</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col bg-violet-100 dark:bg-violet-400 p-8 max-h-fit">
        <h3
          class="flex justify-center dancing-script-font text-5xl px-12 py-12 not-prose dark:text-zinc-800"
        >
          Projects
        </h3>
        <div class="flex flex-wrap justify-center not-prose dark:text-zinc-800">
          <div v-for="(projects, index) in projectNames" :key="index">
            <ProjectBox
              :name="projects.name"
              :linkPath="projects.linkPath"
              :linkImage="projects.linkImage"
              :about="projects.about"
            />
          </div>
        </div>

        <div class="flex justify-center p-4">
          <div
            class="center-txt bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-72 rounded-lg mt-6 hover:shadow-black/70 not-prose dark:text-zinc-800"
          >
            <NuxtLink to="/projects"
              >click here to check other Projects...</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/outline";

const skills = ref([
  {
    percentage: 80,
    name: "Python",
  },
  {
    percentage: 75,
    name: "Machine Learning",
  },
  {
    percentage: 85,
    name: "Data Analysis",
  },
  {
    percentage: 55,
    name: "Deep Learning",
  },
  {
    percentage: 40,
    name: "Full stack",
  },
]);

const skillsReversed = ref([
  {
    percentage: 95,
    name: "Homology Modeling",
  },
  {
    percentage: 85,
    name: "Molecular Dynamics",
  },
  {
    percentage: 75,
    name: "Molecular Docking",
  },
  {
    percentage: 85,
    name: "Cheminformatics",
  },
  {
    percentage: 90,
    name: "Organic Chemistry",
  },
]);

const projectNames = ref([
  {
    name: "PeptoCodes",
    linkPath: "https://github.com/brendaferrari/PepToCodes",
    linkImage: "images/Peptocodes.png",
    about:
      "To transform amino acid smiles to one letter code or three letter code",
  },
  {
    name: "Head and Tail Assign",
    linkPath: "https://github.com/brendaferrari/HeadTailAssign",
    linkImage: "images/hta_logo.png",
    about:
      "Assigns the head and tail atom position in a monomeric unit or in a polymerization reaction, both represented in SMILES string format",
  },
  {
    name: "AutoPaDELPy",
    linkPath: "https://github.com/brendaferrari/AutoPaDELPy",
    linkImage: "images/autopadelpy_logo.png",
    about:
      "AutoPaDELPy provides an automated user interface for PaDELPy software.",
  },

  {
    name: "PORCUPINEplot",
    linkPath: "https://github.com/brendaferrari/PORCUPINEplot",
    linkImage: "images/porcupine.png",
    about:
      "PORCUPINEplot is a script developed to automate the generation of porcupine plots of PCA analysis.",
  },
]);

onMounted(() => {
  // https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click
  window.smoothScroll = function (target) {
    var scrollContainer = target;
    do {
      //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do {
      //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
    } while ((target = target.offsetParent));

    scroll = function (c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + ((b - a) / 30) * i;
      setTimeout(function () {
        scroll(c, a, b, i);
      }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  };
});

useSeoMeta({
  title: "Main page",
  ogTitle: "Main page",
  description: "The main page of my website",
  ogDescription: "The main page of my website",
});
</script>
