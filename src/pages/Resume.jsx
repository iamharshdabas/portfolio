import { educationData, projectsData, servicesData, workExperienceData } from "../config/constants"

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
      <div className="space-y-4 px-4 text-sm" id="resume-content">
        <header className="space-y-2 text-center">
          <div className="flex items-center justify-between gap-2">
            <h1 className="font-bold tracking-wider">Harsh Dabas</h1>
            <h2 className="font-bold tracking-wider">New Delhi, India</h2>
          </div>
          <div className="flex justify-between gap-x-4 gap-y-1">
            {[
              {
                subName: "iamharshdabas.vercel.app",
                href: "https://iamharshdabas.vercel.app",
                name: "Portfolio",
              },
              {
                subName: "iamharshdabas@gmail.com",
                href: "mailto:iamharshdabas@gmail.com",
                name: "E-Mail",
              },
              {
                subName: "github.com/iamharshdabas",
                href: "https://github.com/iamharshdabas",
                name: "Github",
              },
            ].map((link) => (
              <a href={link.href} rel="noopener noreferrer" target="_blank" key={link.name}>
                <span className="font-semibold">{link.name}: </span>
                {link.subName}
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
                  <a
                    className="underline underline-offset-2"
                    href={project.preview || project.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.name}
                  </a>
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
      <style global jsx>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #resume-content,
          #resume-content * {
            visibility: visible;
            font-family: "Roboto", sans-serif;
            color: black;
            background: white;
            text-shadow: none;
            box-shadow: none;
            -webkit-print-color-adjust: exact;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 1.5rem;
            margin: 0;
          }
          #resume-content a {
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  )
}

export default Resume
