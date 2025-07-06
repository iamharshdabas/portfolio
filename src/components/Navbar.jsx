import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { useRef } from "react"
import { FlowingMenu } from "./FlowingMenu"

const items = [
  {
    image: "https://picsum.photos/600/400?random=1",
    link: "home",
    text: "home",
  },
  {
    image: "https://picsum.photos/600/400?random=2",
    link: "services",
    text: "services",
  },
  {
    image: "https://picsum.photos/600/400?random=3",
    link: "about",
    text: "about",
  },
  {
    image: "https://picsum.photos/600/400?random=4",
    link: "work",
    text: "work",
  },
  {
    image: "https://picsum.photos/600/400?random=5",
    link: "contact",
    text: "contact",
  },
]

export const Navbar = () => {
  const navRef = useRef(null)

  return (
    <nav
      className="fixed right-0 z-50 flex size-full flex-col justify-between gap-8 bg-black px-8 py-24 font-display text-white/80 uppercase md:w-1/2"
      ref={navRef}
    >
      <div className="flex flex-col gap-y-4">
        <FlowingMenu items={items} />
      </div>
      <div className="flex gap-8 p-4">
        <a className="transition-all duration-300 hover:text-white" href="mailto:iamharshdabas@gmail.com">
          <MailIcon className="size-5 md:size-6 lg:size-7" />
        </a>
        <a className="transition-all duration-300 hover:text-white" href="https://github.com/iamharshdabas">
          <GithubIcon className="size-5 md:size-6 lg:size-7" />
        </a>
        <a
          className="transition-all duration-300 hover:text-white"
          href="https://www.linkedin.com/in/harsh-dabas-454848300/"
        >
          <LinkedinIcon className="size-5 md:size-6 lg:size-7" />
        </a>
        <a className="transition-all duration-300 hover:text-white" href="https://www.instagram.com/iamharshdabas">
          <InstagramIcon className="size-5 md:size-6 lg:size-7" />
        </a>
      </div>
    </nav>
  )
}
