import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Award,
  Lightbulb,
  Zap,
  Code,
  LineChart,
} from "lucide-react";
import Image from "next/image";
import HeroHeader from "@/components/hero/HeroHeader";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <HeroHeader
        title="About Our AI Innovation Team"
        subtitle="Learn about our team of AI specialists, engineers, and business strategists dedicated to transforming how businesses operate."
        ctaText="Meet Our Team"
        ctaLink="#leadership-team"
      />

      {/* Header */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-emerald-500">Our</span> Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Making AI practical, accessible, and immediately valuable for
            organizations of all sizes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2021, nonNeuron emerged from a simple observation:
                  businesses were struggling to implement AI effectively, often
                  getting lost in complexity without achieving real results.
                </p>
                <p>
                  Our founders, with backgrounds spanning AI research,
                  enterprise software, and business transformation, came
                  together with a mission to make AI practical, accessible, and
                  immediately valuable for organizations of all sizes.
                </p>
                <p>
                  Today, we're proud to have helped dozens of companies across
                  finance, healthcare, retail, and manufacturing sectors
                  implement AI solutions that deliver measurable ROI and
                  competitive advantage.
                </p>
              </div>
              <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do at nonNeuron.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Lightbulb className="h-10 w-10 text-emerald-600" />}
              title="Innovation"
              description="We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancement."
            />
            <ValueCard
              icon={<Users className="h-10 w-10 text-amber-500" />}
              title="Collaboration"
              description="We believe the best solutions emerge from close partnership with our clients and cross-functional teamwork."
            />
            <ValueCard
              icon={<Award className="h-10 w-10 text-emerald-600" />}
              title="Excellence"
              description="We're committed to delivering exceptional quality in everything we do, from code to customer service."
            />
            <ValueCard
              icon={<Zap className="h-10 w-10 text-amber-500" />}
              title="Agility"
              description="We move quickly and adapt to changing needs, helping our clients stay ahead in a rapidly evolving landscape."
            />
            <ValueCard
              icon={<Code className="h-10 w-10 text-emerald-600" />}
              title="Craftsmanship"
              description="We take pride in building robust, elegant solutions that stand the test of time and deliver lasting value."
            />
            <ValueCard
              icon={<LineChart className="h-10 w-10 text-amber-500" />}
              title="Impact"
              description="We measure our success by the tangible business outcomes and competitive advantages we create for our clients."
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership-team" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experts guiding our mission to transform businesses
              through AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              name="Alex Chen, Ph.D."
              title="Co-Founder & CEO"
              bio="Former AI research lead at Stanford with 15+ years experience in machine learning and business transformation."
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
              name="Sarah Johnson"
              title="Co-Founder & CTO"
              bio="Engineering leader with previous roles at Google AI and Amazon, specializing in scalable AI systems."
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
              name="Michael Rodriguez"
              title="Chief Strategy Officer"
              bio="Former management consultant with expertise in helping enterprises adopt emerging technologies."
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
              name="Emily Tanaka"
              title="VP of Engineering"
              bio="Seasoned engineering leader with a background in building enterprise-grade AI platforms at scale."
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              name="David Okafor"
              title="VP of Product"
              bio="Product visionary with a track record of launching innovative AI products that solve real business problems."
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
              name="Priya Patel"
              title="VP of Client Success"
              bio="Customer experience expert focused on ensuring our clients achieve exceptional results with our solutions."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Let's discuss how our team can help you implement intelligent
            solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 rounded-md transition-all duration-300 hover:scale-105">
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-900 font-bold px-8 py-6 rounded-md transition-all duration-300"
            >
              Learn More About Our Approach
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center font-bold text-2xl mb-4">
              <span className="text-emerald-500">non</span>
              <span className="text-amber-500">neuron</span>
            </div>
            <p className="text-slate-400 mb-4">
              Empowering businesses with intelligent, self-driven AI solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Agentic AI MVPs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Custom AI Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Data Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Workflow Automation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">info@nonneuron.com</li>
              <li className="text-slate-400">+1 (555) 123-4567</li>
              <li className="text-slate-400">
                123 AI Boulevard, Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} nonNeuron. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border-none">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

function TeamMember({
  image,
  name,
  title,
  bio,
}: {
  image: string;
  name: string;
  title: string;
  bio: string;
}) {
  return (
    <Card className="overflow-hidden bg-white dark:bg-slate-800 border-none hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-emerald-600 dark:text-emerald-500 font-medium mb-3">
          {title}
        </p>
        <p className="text-muted-foreground">{bio}</p>
        <div className="mt-4 flex space-x-3">
          <a
            href="#"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>
      </div>
    </Card>
  );
}
