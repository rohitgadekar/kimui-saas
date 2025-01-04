import { Github, Twitter, Linkedin } from "lucide-react";
import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className=" py-8 px-4">
        <div className="flex flex-wrap items-center justify-around gap-8">
          <div className="">
            <div className="font-bold text-xl mb-4">kimUI</div>
            <p className="text-muted-foreground">
              Building the future of web development, one component at a time.
            </p>
            <p className="text-muted-foreground inline-block">
              Powered by Eagles
            </p>
            <span className="text-muted-foreground flex flex-row gap-2 text-sm items-center">
              <FaRegCopyright size={12} /> 2025
            </span>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <div className="font-semibold mb-4">Product</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Changelog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4">Company</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-semibold mb-4">Legal</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
