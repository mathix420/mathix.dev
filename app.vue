<template>
  <Html class="bg-charcoal text-white">
    <Head>
      <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <Meta property="og:image" content="https://images.unsplash.com/photo-1547658718-1cdaa0852790?ixlib=rb-1.2.1&amp;amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;amp;auto=format&amp;amp;fit=crop&amp;amp;w=700&amp;amp;q=80" />
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content="Arnaud Gissinger's portfolio" />
      <Meta name="description" content="Arnaud Gissinger is a French Software Architect, ex-42 and ex-founder of Peach. Passionate about Open Source, Web Development, Design, and Entrepreneurship. He did his first program at 10, sold his first software at 15, and launched his first startup at 19." />
      <Title>Arnaud Gissinger</Title>
    </Head>
    <Body>
      <main class="min-h-dvh max-w-4xl mx-auto px-5 py-10 sm:px-10 sm:py-20 selection:bg-accent/30">
        <header>
          <h1 class="text-2xl sm:text-4xl font-black">
            Hi! 👋<br>
            I'm <NuxtImg src="/me.jpg" height="40" width="40" alt="Arnaud Gissinger" class="size-7 sm:size-10 inline rounded-full" /> Arnaud,
          </h1>

          <p class="pt-10 text-4xl sm:text-6xl font-black">
            I <span class="text-accent">imagine</span> stuff,
            <br>then <span class="text-accent">build</span> stuff,
            <br>then <span class="text-accent">break</span> stuff,
            <br>to finally <span class="text-accent">fix</span> stuff!
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
              target="_blank" class="text-accent hover:underline"
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
            Did my first program at 10, sold my first software at 15, and launched my first startup at 19.
          </p>
        </section>

        <!-- Links -->
        <section class="py-5 sm:pt-20">
          <div class="mt-5 flex justify-evenly">
            <NuxtLink to="https://github.com/mathix420" target="_blank">
              <Icon name="simple-icons:github" class="size-7 sm:size-10" />
            </NuxtLink>
            <NuxtLink to="https://bento.me/agissing" target="_blank">
              <Icon name="simple-icons:bento" class="size-7 sm:size-10" />
            </NuxtLink>
            <NuxtLink to="https://stackoverflow.com/users/9799292/mathix420?tab=profile" target="_blank">
              <Icon name="simple-icons:stackoverflow" class="size-7 sm:size-10" />
            </NuxtLink>
            <NuxtLink to="https://matrix.to/#/@mathix:beeper.com" target="_blank">
              <Icon name="simple-icons:matrix" class="size-7 sm:size-10" />
            </NuxtLink>
            <NuxtLink to="https://linkedin.com/in/agissing" target="_blank">
              <Icon name="simple-icons:linkedin" class="size-7 sm:size-10" />
            </NuxtLink>
            <NuxtLink to="mailto:agissing@student.42.fr" target="_blank">
              <Icon name="ic:round-email" class="size-7 sm:size-10" />
            </NuxtLink>
          </div>
        </section>

        <!-- Timeline -->
        <section class="pt-10 sm:pt-20">
          <h2 class="text-2xl sm:text-4xl font-black">
            Timeline
          </h2>

          <div class="flex flex-col gap-10 mt-5 sm:gap-20">
            <TimelineItem date="2020-2024">
              <template #title>
                <span class="line-through">Failed</span> Technical Founder <span class="text-accent">@Peach</span>
              </template>
              <template #description>
                Built and scaled streaming platform handling 1M monthly users at peak.
              </template>
            </TimelineItem>

            <TimelineItem date="2024" link="https://github.com/mathix420/free-the-web-apps">
              <template #title>
                Free The Web Apps <CornerArrow class="mb-2" />
              </template>
              <template #description>
                Unleash the true power of web apps instead of waiting for native Linux apps.
              </template>
              <template #images>
                <NuxtImg height="176" loading="lazy" src="/images/ftwa/1.png" alt="Free The Web Apps" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/ftwa/2.png" alt="Free The Web Apps" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/ftwa/3.png" alt="Free The Web Apps" class="h-44 rounded-xl" />
              </template>
            </TimelineItem>

            <TimelineItem date="2023" link="https://github.com/pulsar-inc/blaze">
              <template #title>
                Blaze <CornerArrow class="mb-2" />
              </template>
              <template #description>
                Get structured data out of LLMs.
              </template>
            </TimelineItem>

            <TimelineItem date="2023">
              <template #title>
                Solution Architect Freelance <span class="text-accent">@Synergys Technologies</span>
              </template>
              <template #description>
                Built a custom e commerce solution tailored to their industry needs.
              </template>
            </TimelineItem>

            <TimelineItem date="2023" link="https://vuito.vercel.app/">
              <template #title>
                Vuito <CornerArrow class="mb-2" />
              </template>
              <template #description>
                Simple, lightweight, isomorphic, template-based validation library.
              </template>
              <template #images>
                <NuxtImg height="176" loading="lazy" src="/images/vuito/1.jpg" alt="Vuito" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/vuito/2.png" alt="Vuito" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/vuito/3.png" alt="Vuito" class="h-44 rounded-xl" />
              </template>
            </TimelineItem>

            <TimelineItem date="2021" link="https://www.adlin-science.com/">
              <template #title>
                IT Architect Consultant <span class="text-accent">@Adlin-Science</span>
              </template>
              <template #description>
                Consulted on the development of a robust and secure on-premise
                platform to facilitate collaboration among research institutes.
                Using only open-source technologies.
              </template>
            </TimelineItem>

            <TimelineItem date="2020" link="https://mac17.ch/">
              <template #title>
                Solution Architect Freelance <span class="text-accent">@Fermat</span>
              </template>
              <template #description>
                Built a custom invoicing and field reports solution powered by AI.
              </template>
            </TimelineItem>

            <TimelineItem date="2019" link="https://github.com/mathix420/pylone">
              <template #title>
                Pylone <CornerArrow class="mb-2" />
              </template>
              <template #description>
                Super simple AWS serverless deployment utility.
              </template>
            </TimelineItem>

            <TimelineItem date="2019" link="https://dropcontact.com/">
              <template #title>
                Backend Developer <span class="text-accent">@dropcontact</span>
              </template>
              <template #description>
                In charge of transitioning from monolithic to scalable and low cost
                architecture on AWS.
              </template>
              <template #images>
                <NuxtImg height="176" loading="lazy" src="/images/stationf/1.jpg" alt="Station F" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/stationf/3.jpg" alt="Station F" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/stationf/2.jpg" alt="Station F" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/stationf/4.jpg" alt="Station F" class="h-44 rounded-xl" />
              </template>
            </TimelineItem>

            <TimelineItem date="2018" link="https://42.fr/en/the-program/innovative-learning/">
              <template #title>
                Joined <span class="text-accent">@42 School</span>
              </template>
              <template #images>
                <NuxtImg height="176" loading="lazy" src="/images/42/1.png" alt="42 School" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/42/2.jpg" alt="42 School" class="h-44 rounded-xl" />
                <NuxtImg height="176" loading="lazy" src="/images/42/3.jpg" alt="42 School" class="h-44 rounded-xl" />
              </template>
            </TimelineItem>
          </div>
        </section>

        <footer class="mt-32 sm:mt-64 flex flex-col items-center gap-5 text-white/30 hover:text-white transition-colors duration-1000">
          <Signature class="h-14 sm:h-28 w-fit" />
          <p class="text-center">
            By Arnaud Gissinger in 2024.
          </p>
        </footer>
      </main>
    </Body>
  </Html>
</template>
