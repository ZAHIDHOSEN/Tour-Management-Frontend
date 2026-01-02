

import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button} from "@/components/ui/button";
import Logo from "@/assets/icons/Logo";

interface Hero12Props {
  className?: string;
}

export default function HeroSection ({ className }: Hero12Props)  {
  return (
    <section className={cn("relative overflow-hidden py-8", className)}>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
             <Logo></Logo>
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                Explore the Adventure of {" "}
                <span className="text-primary">Bangladesh</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
                Get Started
              </Button>
              <Button variant="outline" className="group">
                Learn more{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <div className="mt-20 flex flex-col items-center gap-5">
              <p className="font-medium text-muted-foreground lg:text-left">
               Explore the buity
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


