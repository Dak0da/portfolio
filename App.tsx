const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

const researchArticleUrl =
  "https://newsroom.unl.edu/announce/cse/20226/107573";

type Experience = {
  period: string;
  title: string;
  organization: string;
  bullets: readonly string[];
  linkLabel?: string;
  linkHref?: string;
};

const skillGroups = [
  {
    title: "Technical Skills",
    items: [
      "Programming Languages: Python, Java, JavaScript, C, C#, SQL",
      "Tools and Technologies: Git, Unix/Linux, Visual Studio Code, Eclipse IDE, LaTeX, Microsoft Excel, Word, and PowerPoint",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "Proficient in object-oriented design and development and S.O.L.I.D principles",
      "Familiar with iDesign Architecture and Unit Testing",
      "Familiar with large-scale software development, design techniques, software life cycle, and pragmatic aspects of software systems",
      "Exposed to software testing, maintaining legacy code, team collaboration, technical communication, and ethical computing",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Dedicated Computer Science student with a strong foundation in software development, problem-solving, and team collaboration",
      "Great with people, an effective communicator, and a quick learner",
    ],
  },
] as const;

const experiences: readonly Experience[] = [
  {
    period: "Summer 2025 - Present",
    title: "UCARE Researcher",
    organization: "University of Nebraska-Lincoln",
    bullets: ["UCARE undergraduate researcher.", "Article about the research:"],
    linkLabel: "View article",
    linkHref: researchArticleUrl,
  },
  {
    period: "Summer 2024 - Present",
    title: "Senior Leader, Chair of Hiring Subcommittee",
    organization: "School of Computing Learning Assistant Program, University of Nebraska-Lincoln",
    bullets: [
      "Led the Hiring Subcommittee in selecting and onboarding new Learning Assistants, ensuring the program's high standards.",
      "Collaborated with faculty and other subcommittees to enhance program strategies, training, and course support.",
      "Course liaison for Computer Science 101 and 155A and attended regular meetings with course instructors to improve student performance.",
      "Improved coordination and communication within the program while maintaining high levels of course success and integrity.",
    ],
  },
  {
    period: "Spring 2023 - Spring 2024",
    title: "Learning Assistant",
    organization: "School of Computing Learning Assistant Program, University of Nebraska-Lincoln",
    bullets: [
      "Assisted first-year students with understanding programming concepts and completing coding assignments in CSCE 155-A.",
      "Conducted office hours, led lab sessions, and graded assignments, enhancing students' grasp of computer science fundamentals.",
      "Developed materials and provided individualized support to foster students' problem-solving skills.",
    ],
  },
  {
    period: "August 2020 - Summer 2024",
    title: "Center Store Associate",
    organization: "Family Fare (SpartanNash), Auburn, NE",
    bullets: [
      "Worked across multiple roles including cleaner, cashier, fruit cutter, stocker, and Frozen/Dairy department manager.",
      "Managed inventory, shipments, and stocking as the Frozen/Dairy department manager.",
      "Demonstrated adaptability, problem solving, and a strong focus on customer service and customer satisfaction.",
    ],
  },
  {
    period: "Summer 2024",
    title: "Volunteer Counselor",
    organization: "Camp Kesem, University of Nebraska-Lincoln",
    bullets: [
      "Supervised and mentored six 6-year-old boys with a co-counselor for four days.",
      "Facilitated activities and provided emotional support to children impacted by a parent's cancer.",
      "Helped create a supportive environment to enhance children's self-esteem and coping skills.",
    ],
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0f766e]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-['Georgia','Times_New_Roman',serif] text-3xl leading-tight text-[#193534] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-7 text-[#456160] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#193534]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[-5rem] h-56 w-56 rounded-full bg-[#ffd7c2]/50 blur-3xl" />
        <div className="absolute right-[-4rem] top-24 h-64 w-64 rounded-full bg-[#bfe6dd]/50 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:rgba(246,240,231,0.9)] backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#top"
              className="inline-flex items-center gap-3 text-sm font-semibold text-[#193534]"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-white/70 font-['Georgia','Times_New_Roman',serif] text-lg shadow-[0_12px_30px_rgba(25,53,52,0.08)]">
                DO
              </span>
              <span>
                Dakoda Oden
                <span className="block text-xs font-normal text-[#5d7271]">
                  Portfolio
                </span>
              </span>
            </a>

            <div className="rounded-full border border-[#0f766e]/20 bg-[#e7f7f3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f766e]">
              Seeking internships
            </div>
          </div>

          <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 text-sm text-[#456160]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-transparent px-4 py-2 transition hover:border-[color:var(--line)] hover:bg-white/70 hover:text-[#193534]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main
        id="top"
        className="relative mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 lg:px-8"
      >
        <section className="rounded-[2rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.74)] p-6 shadow-[0_24px_60px_rgba(25,53,52,0.1)] backdrop-blur sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#b85d35]">
            Computer Science Student
          </p>
          <h1 className="mt-4 font-['Georgia','Times_New_Roman',serif] text-4xl leading-tight text-[#193534] sm:text-5xl">
            Dakoda Oden
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#456160] sm:text-lg">
            I am a Computer Science student at the University of
            Nebraska-Lincoln seeking a software engineering internship to apply
            and enhance my technical skills in a dynamic environment.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-full bg-[#193534] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
            >
              View experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[color:var(--line)] bg-white/70 px-5 py-3 text-sm font-semibold text-[#193534] transition hover:-translate-y-0.5 hover:border-[#0f766e]/30 hover:bg-[#e7f7f3]"
            >
              Contact
            </a>
          </div>
        </section>

        <section id="about" className="mt-14 scroll-mt-28">
          <SectionHeading
            eyebrow="About"
            title="Simple overview"
            description="This portfolio is focused on my education, relevant skills, and experience."
          />
        </section>

        <section id="education" className="mt-14 scroll-mt-28">
          <SectionHeading eyebrow="Education" title="University of Nebraska-Lincoln" />

          <article className="mt-6 rounded-[1.75rem] border border-[color:var(--line)] bg-[color:rgba(255,248,241,0.78)] p-6 shadow-[0_16px_35px_rgba(25,53,52,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(25,53,52,0.12)]">
            <h3 className="font-['Georgia','Times_New_Roman',serif] text-2xl text-[#193534]">
              Bachelor of Science in Computer Science
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#456160]">
              University of Nebraska-Lincoln, College of Engineering
            </p>
            <p className="mt-2 text-sm leading-7 text-[#456160]">
              Expected December 2026
            </p>
            <p className="mt-2 text-sm leading-7 text-[#456160]">
              Recipient of Dean&apos;s List and Nebraska Achievement
              Scholarship
            </p>
          </article>
        </section>

        <section id="skills" className="mt-14 scroll-mt-28">
          <SectionHeading
            eyebrow="Skills"
            title="Relevant skills from my resume"
          />

          <div className="mt-6 grid gap-4">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.74)] p-6 shadow-[0_16px_35px_rgba(25,53,52,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(25,53,52,0.12)]"
              >
                <h3 className="font-['Georgia','Times_New_Roman',serif] text-2xl text-[#193534]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#456160]">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-14 scroll-mt-28">
          <SectionHeading
            eyebrow="Experience"
            title="Experience from my resume"
          />

          <div className="mt-6 grid gap-4">
            {experiences.map((item) => (
              <article
                key={`${item.title}-${item.period}`}
                className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:rgba(255,255,255,0.74)] p-6 shadow-[0_16px_35px_rgba(25,53,52,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(25,53,52,0.12)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-['Georgia','Times_New_Roman',serif] text-2xl text-[#193534]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#456160]">
                      {item.organization}
                    </p>
                  </div>
                  <span className="rounded-full bg-[#e7f7f3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                    {item.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[#456160]">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-[color:var(--line)] bg-white/70 px-4 py-3"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>

                {item.linkHref ? (
                  <a
                    href={item.linkHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex rounded-full bg-[#193534] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0f766e]"
                  >
                    {item.linkLabel}
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-14 scroll-mt-28">
          <SectionHeading eyebrow="Contact" title="Contact information" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:rgba(255,248,241,0.78)] p-6 shadow-[0_16px_35px_rgba(25,53,52,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(25,53,52,0.12)]">
              <h3 className="font-['Georgia','Times_New_Roman',serif] text-2xl text-[#193534]">
                Phone
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#456160]">
                (402) 414-7185
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[color:var(--line)] bg-[color:rgba(255,248,241,0.78)] p-6 shadow-[0_16px_35px_rgba(25,53,52,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(25,53,52,0.12)]">
              <h3 className="font-['Georgia','Times_New_Roman',serif] text-2xl text-[#193534]">
                Gmail
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#456160]">
                dakodaoden@gmail.com
              </p>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
