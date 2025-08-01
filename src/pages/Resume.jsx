import { GithubIcon, LinkIcon } from "lucide-react"
import { educationData, projectsData, servicesData, socialLinks, workExperienceData } from "../config/constants"

const Section = ({ children, title }) => {
  return (
    <section>
      <Title bordered={true}>{title}</Title>
      {children}
    </section>
  )
}

const Title = ({ children, bordered = false }) => {
  return <h2 className={`pb-2 font-semibold ${bordered && "mb-2 border-dark/20 border-b-2"}`}>{children}</h2>
}

const Resume = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-4 py-4">
      <div className="print:hidden">
        <button
          className="rounded-2xl bg-dark px-8 py-4 font-medium text-light"
          onClick={() => window.print()}
          type="button"
        >
          Save as PDF
        </button>
      </div>
      <div className="space-y-4 px-4 text-sm">
        <header className="space-y-2 text-center">
          <h1 className="font-bold tracking-wider">Harsh Dabas</h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {[
              {
                href: "https://iamharshdabas.vercel.app",
                name: "Portfolio",
              },
              ...socialLinks,
            ].map((link) => (
              <a
                className="flex items-center gap-1 hover:underline"
                href={link.href}
                key={link.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.name}
                <LinkIcon className="size-3.5" />
              </a>
            ))}
          </div>
        </header>

        <Section title="Work Experience">
          <div className="space-y-4">
            {workExperienceData.map((exp) => (
              <div key={exp.company}>
                <div className="flex justify-between">
                  <p className="font-semibold">{exp.company}</p>
                  <p>{exp.duration}</p>
                </div>
                <p className="italic">{exp.position}</p>
                <ul className="list-inside list-disc">
                  {exp.description.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {servicesData.map((service) => (
              <div key={service.title}>
                <h3 className="font-semibold">{service.title}</h3>
                <ul className="list-inside list-disc">
                  {service.items.map((item) => (
                    <li key={item.title}>
                      {item.title} <span className="text-dark/60">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Projects">
          <div className="space-y-4">
            {projectsData.map((project) => (
              <div key={project.id}>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-semibold">
                    <a href={project.preview || project.href} rel="noopener noreferrer" target="_blank">
                      {project.name}
                    </a>
                    <a href={project.preview || project.href} rel="noopener noreferrer" target="_blank">
                      <LinkIcon className="size-3.5" />
                    </a>
                    <a href={project.href} rel="noopener noreferrer" target="_blank">
                      <GithubIcon className="size-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.frameworks.map((framework) => (
                      <span key={framework.id}>{framework.name}</span>
                    ))}
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Education">
          <p className="font-semibold">{educationData.university}</p>
          <p>{educationData.degree}</p>
        </Section>
      </div>
    </div>
  )
}

export default Resume
