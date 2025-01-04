import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Input,
  SheetTitle,
  SheetDescription,
} from "@rohitgadekar/kimui";
import { Link } from "react-router-dom";
import { GiEagleHead } from "react-icons/gi";

export const Nav = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="px-2 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-2xl">
          <GiEagleHead />
          kimUI
        </div>

        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
              <DialogTitle className="text-xl font-bold text-gray-900">
                Sign Up for Eagles
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600 mb-4">
                Join our community of developers and start building amazing
                projects with KimUI!
              </DialogDescription>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Choose a Password"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled
                  />
                </div>
                <Button
                  type="button"
                  className="w-full py-2 mt-4 bg-primary text-white rounded-md hover:bg-primary-dark"
                >
                  Sign Up
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="" side="top">
              <SheetTitle className="sr-only"></SheetTitle>
                <div>
                  <nav className="flex flex-col gap-4 mt-8">
                    <a
                      href="#features"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Features
                    </a>
                    <a
                      href="#pricing"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Pricing
                    </a>
                    <a
                      href="#testimonials"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Testimonials
                    </a>
                    <a
                      href="/#contact"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Contact
                    </a>
                  </nav>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
