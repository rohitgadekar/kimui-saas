import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@rohitgadekar/kimui";
import { Check } from "lucide-react";
const plans = [
  {
    name: "Hobby",
    price: "Free",
    description: "Perfect for side projects and learning",
    features: [
      "Up to 3 projects",
      "Basic components",
      "Community support",
      "1GB storage",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    description: "For professional developers and teams",
    features: [
      "Unlimited projects",
      "Advanced components",
      "Priority support",
      "10GB storage",
      "Custom domains",
      "Analytics",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations and companies",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "24/7 support",
      "Unlimited storage",
      "SLA",
      "Dedicated account manager",
    ],
  },
];

export const Pricing = () => {
  return (
    <div id='pricing' className="px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground">
          Choose the perfect plan for your needs. No hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mx-4">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col justify-between ${
              plan.popular ? "border-primary shadow-lg" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>
              <CardDescription className="mt-4">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="">
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
