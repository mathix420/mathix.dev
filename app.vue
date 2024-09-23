<script setup lang="ts">
const title = "Arnaud Gissinger";
const description = "Arnaud Gissinger is a French Software Architect, ex-42 and ex-founder of Peach. Passionate about Open Source, Web Development, Design, and Entrepreneurship. He did his first program at 10, sold his first software at 15, and launched his first startup at 19.";
const smallDescription = "Arnaud Gissinger is a French Passionate Software Architect, previously 42 Student and founder.";
const url = useSiteConfig().url;

// Disabled because of bundle size in Vercel edge
// defineOgImageComponent("Mathix");

useSchemaOrg([
  definePerson({
    name: title,
    image: "/android-chrome-512x512.png",
    sameAs: [
      "https://github.com/mathix420",
      "https://www.linkedin.com/in/agissing/",
      "https://bento.me/agissing",
      "https://www.polywork.com/agissing/",
      "https://posts.cv/mathix",
      "https://read.cv/mathix",
      "https://stackoverflow.com/users/9799292/mathix420",
    ],
  }),
]);

useHead({
  script: [
    {
      "src": "https://cloud.umami.is/script.js",
      "data-website-id": "0e6f097f-7dbc-44d2-9843-5e0e09a290a8",
      "defer": true,
    },
  ],
});

useSeoMeta({
  title,
  description,
  ogImage: `${url}og.png`,
  ogTitle: title,
  ogDescription: smallDescription,
  ogUrl: url,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${url}og.png`,
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Html
    class="bg-charcoal text-white"
    lang="en-US"
  >
    <Head>
      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
    <Body>
      <main class="min-h-dvh max-w-4xl mx-auto px-5 py-10 sm:px-10 sm:py-20 selection:bg-accent/30">
        <header>
          <h1 class="text-2xl sm:text-4xl font-black">
            Hi! 👋<br>
            I'm <NuxtImg
              format="webp"
              src="/android-chrome-192x192.png"
              height="40"
              width="40"
              alt="Arnaud Gissinger"
              class="size-7 sm:size-10 inline rounded-full object-cover"
            /> Arnaud,
          </h1>

          <p class="pt-10 text-4xl sm:text-6xl font-black">
            Most of the time<br>I <span class="text-accent">imagine</span>,
            <span class="text-accent">build</span>, <span class="text-accent">break</span> and <span class="text-accent">fix</span> stuff!
          </p>
        </header>

        <!-- About Me -->
        <section class="pt-14 sm:pt-28">
          <h2 class="text-2xl sm:text-4xl font-black">
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
          <div class="mt-5 flex justify-evenly">
            <NuxtLink
              data-umami-event="Github Link"
              aria-label="github"
              to="https://github.com/mathix420"
              target="_blank"
            >
              <Icon
                name="simple-icons:github"
                class="size-7 sm:size-10"
              />
            </NuxtLink>
            <NuxtLink
              data-umami-event="Bento Link"
              aria-label="bento"
              to="https://bento.me/agissing"
              target="_blank"
            >
              <Icon
                name="simple-icons:bento"
                class="size-7 sm:size-10"
              />
            </NuxtLink>
            <NuxtLink
              data-umami-event="Stackoverflow Link"
              aria-label="stackoverflow"
              to="https://stackoverflow.com/users/9799292/mathix420?tab=profile"
              target="_blank"
            >
              <Icon
                name="simple-icons:stackoverflow"
                class="size-7 sm:size-10"
              />
            </NuxtLink>
            <NuxtLink
              data-umami-event="Matrix Link"
              aria-label="matrix"
              to="https://matrix.to/#/@mathix:beeper.com"
              target="_blank"
            >
              <Icon
                name="simple-icons:matrix"
                class="size-7 sm:size-10"
              />
            </NuxtLink>
            <NuxtLink
              data-umami-event="Linkedin Link"
              aria-label="linkedin"
              to="https://linkedin.com/in/agissing"
              target="_blank"
            >
              <Icon
                name="simple-icons:linkedin"
                class="size-7 sm:size-10"
              />
            </NuxtLink>
            <NuxtLink
              data-umami-event="Email Link"
              aria-label="email"
              to="mailto:agissing@student.42.fr"
              target="_blank"
            >
              <Icon
                name="ic:round-email"
                class="size-7 sm:size-10"
              />
            </NuxtLink>
          </div>
        </section>

        <!-- Timeline -->
        <section class="pt-10 sm:pt-20">
          <h2 class="text-2xl sm:text-4xl font-black">
            Timeline
          </h2>

          <div class="flex flex-col gap-10 mt-5 sm:gap-20">
            <TimelineItem
              date="2020-2024"
              name="Peach"
            >
              <template #title>
                <span class="line-through">Failed</span> Technical Founder <span class="text-accent">@Peach</span>
              </template>
              <template #description>
                Built and scaled streaming platform handling 500k users/week at peak.
              </template>
            </TimelineItem>

            <TimelineItem
              date="2024"
              name="FTWA"
              link="https://github.com/mathix420/free-the-web-apps"
            >
              <template #title>
                Free The Web Apps <CornerArrow class="mb-2" />
              </template>
              <template #description>
                Unleash the true power of web apps instead of waiting for native Linux apps.
              </template>
              <template #images>
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/ftwa/1.png"
                  alt="Free The Web Apps"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/ftwa/2.png"
                  alt="Free The Web Apps"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/ftwa/3.png"
                  alt="Free The Web Apps"
                  class="h-44 rounded-xl"
                />
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
                Get structured data out of LLMs.
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
                Built a custom e commerce solution tailored to their industry needs.
              </template>
            </TimelineItem>

            <TimelineItem
              date="2023"
              name="Vuito"
              link="https://vuito.vercel.app/"
            >
              <template #title>
                Vuito <CornerArrow class="mb-2" />
              </template>
              <template #description>
                Simple, lightweight, isomorphic, template-based validation library.
              </template>
              <template #images>
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/vuito/1.jpg"
                  alt="Vuito"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/vuito/2.png"
                  alt="Vuito"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/vuito/3.png"
                  alt="Vuito"
                  class="h-44 rounded-xl"
                />
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
            >
              <template #title>
                Backend Developer <span class="text-accent">@dropcontact</span>
              </template>
              <template #description>
                In charge of transitioning from monolithic to scalable and low cost
                architecture on AWS.
              </template>
              <template #images>
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/stationf/1.jpg"
                  alt="Station F"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/stationf/3.jpg"
                  alt="Station F"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/stationf/2.jpg"
                  alt="Station F"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/stationf/4.jpg"
                  alt="Station F"
                  class="h-44 rounded-xl"
                />
              </template>
            </TimelineItem>

            <TimelineItem
              date="2018"
              name="42"
              link="https://42.fr/en/the-program/innovative-learning/"
            >
              <template #title>
                Joined <span class="text-accent">@42 School</span>
              </template>
              <template #description>
                Finished 7 out of 1000 during the selection pool for the Paris campus.
              </template>
              <template #images>
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/42/1.png"
                  alt="42 School"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/42/2.jpg"
                  alt="42 School"
                  class="h-44 rounded-xl"
                />
                <NuxtImg
                  format="webp"
                  height="176"
                  loading="lazy"
                  src="/images/42/3.jpg"
                  alt="42 School"
                  class="h-44 rounded-xl"
                />
              </template>
            </TimelineItem>

            <TimelineItem

              name="HS"
              date="2015-2018"
            >
              <template #title>
                High School
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

        <footer class="mt-32 flex flex-col items-center gap-5 text-white/25 hover:text-white transition-colors duration-1000">
          <Signature class="h-14 sm:h-28 w-fit" />
          <p class="text-center">
            By Arnaud Gissinger in 2024.
          </p>
        </footer>
      </main>
    </Body>
  </Html>
</template>
