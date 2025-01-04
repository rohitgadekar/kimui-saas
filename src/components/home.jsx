import React from "react";
import { Button } from "@rohitgadekar/kimui";
import { Testimonials } from "./testimonials";
import { Features } from "./features";
import { Contact } from "./contact";
import { Pricing } from "./pricing";
export const Home = () => {
  return (
    <>
      <section className="pt-24 md:pt-32 pb-16 ">
        <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build Faster with Modern Development Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Experience lightning-fast development with our cutting-edge tools
            and components. Build production-ready applications in record time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
          <div className="w-full aspect-video rounded-lg bg-muted mt-8 overflow-hidden">
            <img
              src={
                "/banner.jpg"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <Pricing />
      </section>

      <section>
        <Testimonials />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
};
