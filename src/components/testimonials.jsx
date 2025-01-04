import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardHeader,
} from "@rohitgadekar/kimui";

const testimonials = [
  {
    quote:
      "KimUI is a developer's dream come true. The simplicity and versatility of the components make creating stunning applications a breeze.",
    author: "Anna Martinez",
    role: "Senior Frontend Developer",
    avatar:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The Eagles team has outdone themselves with KimUI. The library strikes the perfect balance between design and functionality.",
    author: "Ethan Brown",
    role: "Full Stack Developer",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "KimUI is much more than a component library. It's a comprehensive toolkit that empowers developers to deliver polished products faster.",
    author: "Olivia Green",
    role: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "We’ve standardized all our projects on KimUI, thanks to its outstanding support for scalability and its aesthetic, modern designs.",
    author: "James Carter",
    role: "Tech Lead",
    avatar:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "With KimUI, we’re building faster and delivering exceptional user experiences. Kudos to Eagles for such a fantastic innovation.",
    author: "Liam White",
    role: "Head of Development",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
  },
  {
    quote:
      "KimUI has set a new benchmark for component libraries. It's clear that the Eagles team understands the needs of modern developers.",
    author: "Ava Walker",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80",
  },
];


export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Loved by Developers</h2>
          <p className="text-muted-foreground">
            See what our users have to say about their experience with Bolt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 px-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <blockquote className="text-lg mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
