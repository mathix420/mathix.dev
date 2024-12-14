<script setup lang="ts">
import settings from "~~/settings";

const url = useSiteConfig().url;

const links = [
  {
    name: "Github",
    link: "https://github.com/mathix420",
    icon: "simple-icons:github",
  },
  {
    name: "Bento",
    link: "https://bento.me/agissing",
    icon: "simple-icons:bento",
  },
  {
    name: "Bluesky",
    link: "https://bsky.app/profile/mathix.dev",
    icon: "simple-icons:bluesky",
  },
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/9799292/mathix420?tab=profile",
    icon: "simple-icons:stackoverflow",
  },
  {
    name: "Matrix",
    link: "https://matrix.to/#/@mathix:beeper.com",
    icon: "simple-icons:matrix",
  },
  {
    name: "Linkedin",
    link: "https://linkedin.com/in/agissing",
    icon: "simple-icons:linkedin",
  },
  {
    name: "Email",
    link: "mailto:agissing@student.42.fr",
    icon: "simple-icons:gmail",
  },
];

useSeoMeta({
  title: settings.name,
  titleTemplate: "",
  description: settings.description,
  ogTitle: settings.name,
  ogDescription: settings.smallDescription,
  ogUrl: url,
  twitterTitle: settings.name,
  twitterDescription: settings.description,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <main class="mx-auto min-h-dvh max-w-4xl px-5 py-10 selection:bg-accent/30 sm:px-10 sm:py-20">
    <header>
      <h1 class="text-2xl font-black sm:text-4xl">
        Hi! 👋<br>
        I'm <NuxtImg
          format="webp"
          src="/android-chrome-192x192.png"
          height="40"
          width="40"
          alt="Arnaud Gissinger"
          class="inline size-7 rounded-full object-cover sm:size-10"
        /> Arnaud,
      </h1>

      <p class="pt-10 text-4xl font-black sm:text-6xl">
        Most of the time<br>I <span class="text-accent">imagine</span>,
        <span class="text-accent">build</span>, <span class="text-accent">break</span> and <span class="text-accent">fix</span> stuff!
      </p>
    </header>

    <!-- About Me -->
    <section class="pt-14 sm:pt-28">
      <h2 class="text-2xl font-black sm:text-4xl">
        About Me
      </h2>
      <p class="mt-5 text-lg sm:text-xl">
        I'm a French <span class="text-accent">Software Architect</span>, ex<NuxtLink
          to="https://42.fr/en/the-program/innovative-learning/"
          target="_blank"
          class="text-accent hover:underline"
        >
          42 Student
        </NuxtLink>
        and ex-founder of <span class="text-accent">Peach</span>.

        <br>

        Passionate about <span class="text-accent">Open Source</span>,
        <span class="text-accent">Web Development</span>,
        <span class="text-accent">Design</span>, and
        <span class="text-accent">Entrepreneurship</span>.

        <br>
        Did my first program at 10, sold my first software at 14, and launched my first startup at 19.
      </p>
    </section>

    <!-- Links -->
    <section class="py-5 sm:pt-20">
      <div class="mt-5 flex flex-wrap justify-evenly gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.name"
          :data-umami-event="`${link.name} Link`"
          :title="link.name"
          :to="link.link"
          target="_blank"
          external
        >
          <Icon
            :name="link.icon"
            class="size-7 sm:size-8"
          />
        </NuxtLink>
      </div>
    </section>

    <!-- Timeline -->
    <section class="pt-10 sm:pt-20">
      <h2 class="text-2xl font-black sm:text-4xl">
        Timeline
      </h2>

      <div class="mt-5 flex flex-col gap-10 sm:gap-20">
        <TimelineItem
          link="https://contrat-ia.com"
          date="2024"
          name="Peach"
        >
          <template #title>
            Building <span class="text-accent">@Contrat-IA</span>
          </template>
          <template #description>
            A tool to write contracts in seconds not days. You can create contracts using only your voice.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2020-2024"
          name="Peach"
        >
          <template #title>
            Technical Founder <span class="text-accent">@Peach</span>
          </template>
          <template #description>
            Built and scaled streaming platform handling 500k MAU at peak.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2024"
          name="FTWA"
          link="https://ftwa.mathix.dev"
          :images="[
            {
              src: '/images/ftwa/0.png',
              height: 176,
              width: 312,
            },
            {
              src: '/images/ftwa/1.png',
              height: 176,
              width: 313,
            },
            {
              src: '/images/ftwa/2.png',
              height: 176,
              width: 313,
            },
            {
              src: '/images/ftwa/3.png',
              height: 176,
              width: 313,
            },
          ]"
        >
          <template #title>
            Free The Web Apps <CornerArrow class="mb-2" />
          </template>
          <template #description>
            Transform any website into a native-like app in seconds.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2023"
          name="Blaze"
          link="https://github.com/pulsar-inc/blaze"
        >
          <template #title>
            Blaze <CornerArrow class="mb-2" />
          </template>
          <template #description>
            Get structured data out of LLMs. This was done before
            <NuxtLink
              class="underline decoration-white/75 decoration-dashed decoration-1 underline-offset-1 hover:text-white hover:decoration-white"
              target="_blank"
              external
              to="https://github.com/microsoft/TypeChat"
            >
              Microsoft's TypeChat</NuxtLink>, <NuxtLink
              class="underline decoration-white/75 decoration-dashed decoration-1 underline-offset-1 hover:text-white hover:decoration-white"
              target="_blank"
              external
              to="https://openai.com/index/introducing-structured-outputs-in-the-api/"
            >
              OpenAI's structured output</NuxtLink>, and before
            <NuxtLink
              class="underline decoration-white/75 decoration-dashed decoration-1 underline-offset-1 hover:text-white hover:decoration-white"
              target="_blank"
              external
              to="https://dottxt-ai.github.io/outlines/latest/"
            >
              dottxt-ai's outline project ($12M funding)</NuxtLink>.
          </template>
        </TimelineItem>

        <TimelineItem
          name="Synergys"
          date="2023"
        >
          <template #title>
            Solution Architect Freelance <span class="text-accent">@Synergys Technologies</span>
          </template>
          <template #description>
            Built a custom e-commerce solution tailored to their industry needs.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2023"
          name="Vuito"
          link="https://vuito.vercel.app/"
          :images="[
            {
              src: '/images/vuito/1.jpg',
              height: 176,
              width: 282,
            },
            {
              src: '/images/vuito/2.png',
              height: 176,
              width: 294,
            },
            {
              src: '/images/vuito/3.png',
              height: 176,
              width: 282,
            },
          ]"
        >
          <template #title>
            Vuito <CornerArrow class="mb-2" />
          </template>
          <template #description>
            Intuitive, lightweight, isomorphic, template-based validation library.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2021"
          name="Adlin"
          link="https://www.adlin-science.com/"
        >
          <template #title>
            IT Architect Consultant <span class="text-accent">@Adlin-Science</span>
          </template>
          <template #description>
            Consulted on the development of a robust and secure on-premise
            platform to facilitate collaboration among research institutes.
            Using only open-source technologies.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2020"
          name="Fermat"
          link="https://mac17.ch/"
        >
          <template #title>
            Solution Architect Freelance <span class="text-accent">@Fermat</span>
          </template>
          <template #description>
            Built a custom invoicing and field reports solution powered by AI.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2019"
          name="Pylone"
          link="https://github.com/mathix420/pylone"
        >
          <template #title>
            Pylone <CornerArrow class="mb-2" />
          </template>
          <template #description>
            Super simple AWS serverless deployment utility.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2019"
          name="Dropcontact"
          link="https://dropcontact.com/"
          :images="[
            {
              src: '/images/stationf/1.jpg',
              height: 176,
              width: 264,
            },
            {
              src: '/images/stationf/2.jpg',
              height: 176,
              width: 301,
            },
            {
              src: '/images/stationf/3.jpg',
              height: 176,
              width: 300,
            },
            {
              src: '/images/stationf/4.jpg',
              height: 176,
              width: 264,
            },
          ]"
        >
          <template #title>
            Backend Developer <span class="text-accent">@dropcontact</span>
          </template>
          <template #description>
            In charge of transitioning from monolithic to scalable and low cost
            architecture on AWS.
          </template>
        </TimelineItem>

        <TimelineItem
          date="2018"
          name="42"
          link="https://42.fr/en/the-program/innovative-learning/"
          :images="[
            {
              src: '/images/42/1.png',
              height: 176,
              width: 313,
            },
            {
              src: '/images/42/2.jpg',
              height: 176,
              width: 432,
            },
            {
              src: '/images/42/3.jpg',
              height: 176,
              width: 264,
            },
          ]"
        >
          <template #title>
            Joined <span class="text-accent">@42 School</span>
          </template>
          <template #description>
            Finished 7 out of 1000 during the selection pool for the Paris campus.
          </template>
        </TimelineItem>

        <TimelineItem
          name="HS"
          date="2015-2018"
        >
          <template #title>
            High School
          </template>
          <template #description>
            I studied electronics and mechanics.
          </template>
        </TimelineItem>

        <TimelineItem
          name="Sold Software"
          date="2015"
        >
          <template #title>
            Sold my first software
          </template>
          <template #description>
            A cash register software, also built in VisualBasic.
          </template>
        </TimelineItem>

        <TimelineItem
          name="First Software"
          date="2011"
        >
          <template #title>
            My first program
          </template>
          <template #description>
            A calculator in VisualBasic.
          </template>
        </TimelineItem>

        <TimelineItem
          name="Born"
          date="2000"
        >
          <template #title>
            I'm born
          </template>
          <template #description>
            Yes, I'm a millennial, sorry.
          </template>
        </TimelineItem>
      </div>
    </section>

    <AppFooter />
  </main>
</template>
