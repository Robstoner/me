import { MenuColumn } from "@/types/menu-item";
import Link from "next/link";

function FooterSocialLinks() {
  return (
    <div className="flex gap-2 my-2">
      <Link href="https://www.instagram.com/robstoner19" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" />
        </svg>
      </Link>
      <Link
        href="https://www.linkedin.com/in/robert-eduard-schmidt-186170254"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
        </svg>
      </Link>
    </div>
  );
}

export default function Footer({ menus }: { menus: MenuColumn[] }) {
  return (
    <footer>
      <div className="mx-auto px-20 max-w-7xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 mt-2">
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-shrink-0 justify-start">
              <a
                href="/"
                className="ml-2 text-cyan-400 font-bold tracking-wide"
              >
                Schmidt Robert
              </a>
            </div>
            <p className="">Meeting your software development needs.</p>
            <FooterSocialLinks />
          </div>
          {menus.map((menu, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-lg font-medium">{menu.title}</h3>
              {menu.items.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="rounded-md text-sm font-medium transition-all text-cyan-500 hover:text-gray-800 dark:hover-text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="text-xs py-3">
          &copy; Copyright {new Date().getFullYear()} Schmidt Robert. Toate
          drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
