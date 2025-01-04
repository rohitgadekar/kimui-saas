import { Code2, Zap, Shield, Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@rohitgadekar/kimui";

const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description:
      "Build and deploy applications with unprecedented speed and efficiency.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Modern Stack",
    description:
      "Leverage the latest technologies and frameworks for optimal development.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure by Default",
    description:
      "Enterprise-grade security built into every layer of your application.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Beautiful UI",
    description:
      "Create stunning user interfaces with our pre-built components.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground">
            Everything you need to build modern applications, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 px-4 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
