<template>
  <div>
    <div class="flex flex-col dark:text-zinc-800">
      <div class="bg-violet-200 h-fit">
        <h3
          class="flex justify-center p-8 mt-8 dancing-script-font text-3xl md:text-5xl sm:text-4xl"
        >
          My career
        </h3>
        <div class="flex flex-col justify-center pr-36 pl-36 pb-24 space-y-10">
          <h3
            class="flex justify-center text-xl text-violet-500 font-semibold tracking-wide antialiased"
          >
            Work Experience
          </h3>
          <div class="flex space-x-8">
            <div class="flex flex-col min-w-56">
              <span class="text-2xl text-end">Postdoctoral Researcher</span>
              <span class="text-end">June 2024 - present</span>
              <span class="text-end">Jyväskylä, Finland</span>
            </div>
            <div class="flex size-12">
              <!-- <div
              class="after:block after:bg-black after:w-[1px] after:h-dvh after:mx-auto"
            > -->
              <div
                class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
              >
                <BriefcaseIcon class="w-8 h-8" />
              </div>
              <!-- </div> -->
            </div>
            <div class="flex flex-col">
              <span class="text-2xl text-start">University of Jyväskylä</span>
              <span class="text-start"
                >Supervisor:
                <a
                  class="link-color"
                  href="https://www.jyu.fi/en/people/hannu-hakkinen"
                  >Prof. Dr. Hannu Häkkinen</a
                >
              </span>
              <span class="text-justify"
                >Project will be related to the study of ligand-stabilized metal
                nanoclusters as sensors for chiral biomolecules in aqueous
                solvents.</span
              >
            </div>
          </div>

          <div class="flex space-x-8">
            <div class="flex flex-col min-w-56">
              <span class="text-2xl text-end">Reseach Intern</span>
              <span class="text-end">August 2021 - August 2023</span>
              <span class="text-end">Rio de Janeiro, Brazil</span>
            </div>
            <div class="flex size-12">
              <!-- <div
              class="after:block after:bg-black after:w-[1px] after:h-dvh after:mx-auto"
            > -->
              <div
                class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
              >
                <BriefcaseIcon class="w-8 h-8" />
              </div>
              <!-- </div> -->
            </div>
            <div class="flex flex-col">
              <span class="text-2xl text-start">IBM Research Brazil</span>
              <span class="text-start"
                >Manager:
                <a
                  class="link-color"
                  href="https://research.ibm.com/people/mathias-steiner"
                  >Dr. Mathias Steiner</a
                >, Advisor:
                <a
                  class="link-color"
                  href="https://scholar.google.com/citations?user=VvSVNwQAAAAJ&hl=en"
                  >Dr. Ronaldo Giro</a
                >
              </span>
              <span class="text-justify"
                >Research using Data Science and Cheminformatics techniques
                focusing on the field of carbon capture, aiming to enhance CO2
                separation and sequestration in nanoscale. Implemented Data
                Mining and Software Development as a solution of problems
                related to CO2 separation. As a product of this work, a Deep
                Learning model was trained to predict polymerisation reactions
                and retrosynthesis with forward model Top-4 accuracy of 80% and
                a backward model Top-4 accuracy of 60%. This result is on
                preprint on
                <a class="link-color" href="https://arxiv.org/abs/2310.11423"
                  >ArXiv</a
                >. Other results of this work are still being published.</span
              >
            </div>
          </div>

          <div class="flex space-x-8">
            <div class="flex flex-col min-w-56">
              <span class="text-2xl text-end">Doctoral Researcher</span>
              <span class="text-end">March 2019 - September 2023</span>
              <span class="text-end">Rio de Janeiro, Brazil</span>
            </div>
            <div class="flex size-12">
              <!-- <div
              class="after:block after:bg-black after:w-[1px] after:h-dvh after:mx-auto"
            > -->
              <div
                class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
              >
                <BriefcaseIcon class="w-8 h-8" />
              </div>
              <!-- </div> -->
            </div>
            <div class="flex flex-col">
              <span class="text-2xl text-start"
                >LabMMol: Laboratório de Modelagem Molecular</span
              >
              <span class="text-start"
                >Advisors:
                <a
                  class="link-color"
                  href="http://lattes.cnpq.br/0780841238637304"
                  >Prof. Dr. Magaly Girão Albuquerque</a
                >
                and
                <a
                  class="link-color"
                  href="http://lattes.cnpq.br/4430323583603846"
                  >Prof. Dr. Camilo Henrique da Silva Lima</a
                ></span
              >
              <span class="text-justify"
                >Research using Molecular Modeling and Data Science techniques
                focusing on the design of selective furin inhibitors as
                broad-spectrum antivirals. Design of new antivirals using
                Homology Modeling, Molecular Docking, Molecular Dynamics and to
                build inhibition models with aid of Machine Learning techniques
                with Python, NumPy, Pandas, SciKit-Learn and other libraries.
              </span>
            </div>
          </div>

          <div class="flex space-x-8">
            <div class="flex flex-col min-w-56">
              <span class="text-2xl text-end">Master Researcher</span>
              <span class="text-end">March 2017 - March 2019</span>
              <span class="text-end">Rio de Janeiro, Brazil</span>
            </div>
            <div class="flex size-12">
              <!-- <div
              class="after:block after:bg-black after:w-[1px] after:h-full after:mx-auto"
            > -->
              <div
                class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
              >
                <BriefcaseIcon class="w-8 h-8" />
              </div>
              <!-- </div> -->
            </div>
            <div class="flex flex-col">
              <span class="text-2xl text-start"
                >FioCruz: Fundação Oswaldo Cruz</span
              >
              <span class="text-start"
                >Advisor:
                <a
                  class="link-color"
                  href="http://lattes.cnpq.br/9152983185617827"
                  >Dr. Núbia Boechat</a
                ></span
              >
              <span class="text-justify"
                >Research in drug synthesis laboratory focusing on optimization
                of prototypes of non-nucleoside HIV reverse transcriptase
                inhibitors. Developed organic synthesis of new compounds using
                wet lab techniques and IR, GC-MS, HPLC, RMN 1D, 2D
                analysis.</span
              >
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center pr-36 pl-36 pb-24 space-y-10">
          <h3
            class="flex justify-center text-xl text-violet-500 font-semibold tracking-wide antialiased"
          >
            Education
          </h3>
          <div class="flex flex-col space-y-10">
            <div class="flex space-x-8">
              <div class="flex flex-col min-w-56">
                <span class="text-2xl text-end">DSc in Chemistry</span>
                <span class="text-end">March 2019 - September 2023</span>
                <span class="text-end">Rio de Janeiro, Brazil</span>
              </div>
              <div class="flex size-12">
                <!-- <div
                class="after:block after:bg-black after:w-[1px] after:h-80 after:mx-auto after:my-2"
              > -->
                <div
                  class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
                >
                  <AcademicCapIcon class="w-8 h-8" />
                </div>
                <!-- </div> -->
              </div>
              <div class="flex flex-col">
                <span class="text-2xl text-start"
                  >UFRJ - Universidade Federal do Rio de Janeiro</span
                >
                <span class="text-start"
                  >Advisors:
                  <a
                    class="link-color"
                    href="http://lattes.cnpq.br/0780841238637304"
                    >Prof. Dr. Magaly Girão Albuquerque</a
                  >
                  and
                  <a
                    class="link-color"
                    href="http://lattes.cnpq.br/4430323583603846"
                    >Prof. Dr. Camilo Henrique da Silva Lima</a
                  >
                </span>
                <span class="text-justify"
                  >Thesis title: "In silico development of selective human furin
                  inhibitors as broad-spectrum antivirals". The goal of this
                  work was to identify selective, host-directed, broad-spectrum
                  antivirals targeting human profurin using molecular modeling
                  and machine learning techniques. As a product of this work, a
                  3D model of profurin was developed, validated and analysed
                  using comparative modeling and molecular dynamics. This
                  results was published on the
                  <a
                    class="link-color"
                    href="https://www.tandfonline.com/eprint/ASHIAGZUWMFHBSAQWUCD/full?target=10.1080/07391102.2023.2231546"
                    >Journal of Biomolecular Structure and Dynamics</a
                  >. Other results of this work are still being published.
                </span>
              </div>
            </div>

            <div class="flex space-x-8">
              <div class="flex flex-col min-w-56">
                <span class="text-2xl text-end">MSc in Chemistry</span>
                <span class="text-end">March 2017 - March 2019</span>
                <span class="text-end">Rio de Janeiro, Brazil</span>
              </div>
              <div class="flex size-12">
                <!-- <div
                class="after:block after:bg-black after:w-[1px] after:h-80 after:mx-auto after:my-2"
              > -->
                <div
                  class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
                >
                  <AcademicCapIcon class="w-8 h-8" />
                </div>
                <!-- </div> -->
              </div>
              <div class="flex flex-col">
                <span class="text-2xl text-start"
                  >UFRJ - Universidade Federal do Rio de Janeiro</span
                >
                <span class="text-start"
                  >Advisor:
                  <a
                    class="link-color"
                    href="http://lattes.cnpq.br/9152983185617827"
                    >Dr. Núbia Boechat</a
                  ></span
                >
                <span class="text-justify"
                  >Dissertation title: "New isatin derivatives as HIV-1
                  inhibitors". This work aimed the design, synthesis and
                  antiretroviral evaluation of eight new molecules, analogous to
                  EFV, with potential HIV-1 inhibitory activity. The results of
                  the biological evaluation have indicated that all molecules
                  have inhibited both the steps of reverse transcription and
                  virus maturation. Regarding the evaluation in the maturation
                  stage, all molecules showed excellent inhibitory activities.
                  One of the analogues showed a multi-target characteristic
                  inhibition profile, acting both in reverse transcription and
                  in virus maturation stage, inhibiting about 93% in both steps.
                  The results were presented on the
                  <a
                    class="link-color"
                    href="https://proceedings.science/brazmedchem-2019/trabalhos/new-isatin-derivatives-analogues-of-efavirenz-as-hiv-1-inhibitors"
                    >9th Brazilian Symposium on Medicinal Chemistry</a
                  >.
                </span>
              </div>
            </div>

            <div class="flex space-x-8">
              <div class="flex flex-col min-w-56">
                <span class="text-2xl text-end"
                  >Bachelor in Education - Chemistry</span
                >
                <span class="text-end">March 2013 - December 2016</span>
                <span class="text-end">Rio de Janeiro, Brazil</span>
              </div>
              <div class="flex size-12">
                <!-- <div
                class="after:block after:bg-black after:w-[1px] after:h-36 after:mx-auto after:my-2"
              > -->
                <div
                  class="flex items-center justify-center size-12 bg-violet-300 rounded-full"
                >
                  <AcademicCapIcon class="w-8 h-8" />
                </div>
                <!-- </div> -->
              </div>
              <div class="flex flex-col">
                <span class="text-2xl text-start"
                  >IFES - Instituto Federal do Espírito Santo</span
                >
                <span class="text-start"
                  >Advisor:
                  <a
                    class="link-color"
                    href="http://lattes.cnpq.br/3114105343647059"
                    >Prof. Dr. Mauro Cesar Dias</a
                  ></span
                >
                <span class="text-justify"
                  >Undergraduate thesis: "The use of open source computer
                  programs as a learning tool in teaching molecular symmetry".
                  This work focused on the development, analysis of
                  computational models of QP complexes, in the form PtX4 and
                  PtA2B2 and its usage on the teaching of Inorganic Chemistry
                  for undergraduate students.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BriefcaseIcon } from "@heroicons/vue/24/solid";
import { AcademicCapIcon } from "@heroicons/vue/24/solid";

useSeoMeta({
  title: "About me",
  ogTitle: "About me",
  description: "About me section",
  ogDescription: "About me section",
});
</script>

<!-- <template>
    <article class="prose dark:prose-invert max-w-none">
        <ContentDoc path="/about" />
    </article>
</template> -->
