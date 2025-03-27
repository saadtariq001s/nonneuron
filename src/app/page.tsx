import Image from "next/image";
import Navbar from "@/components/navigation/Navbar";
import HeroHeader from "@/components/hero/HeroHeader";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  LineChart,
  Lightbulb,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <HeroHeader />

      {/* Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-emerald-600">Intelligent</span> Solutions for{" "}
            <span className="text-amber-500">Modern Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our agentic AI solutions empower your business with intelligent
            automation, data-driven insights, and innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution Card 1 */}
          <SolutionCard
            icon={<Brain className="h-10 w-10 text-emerald-600" />}
            title="Agentic AI MVPs"
            description="Rapidly develop and deploy intelligent AI agents that automate complex tasks and workflows."
          />

          {/* Solution Card 2 */}
          <SolutionCard
            icon={<Cpu className="h-10 w-10 text-amber-500" />}
            title="Custom AI Solutions"
            description="Tailored AI implementations designed to address your specific business challenges."
          />

          {/* Solution Card 3 */}
          <SolutionCard
            icon={<Database className="h-10 w-10 text-emerald-600" />}
            title="Data Analytics & Insights"
            description="Transform your data into actionable intelligence with our advanced analytics solutions."
          />

          {/* Solution Card 4 */}
          <SolutionCard
            icon={<LineChart className="h-10 w-10 text-amber-500" />}
            title="Automation & Workflow"
            description="Streamline operations and boost productivity with intelligent process automation."
          />

          {/* Solution Card 5 */}
          <SolutionCard
            icon={<Lightbulb className="h-10 w-10 text-emerald-600" />}
            title="AI Consulting & Strategy"
            description="Expert guidance on implementing AI technologies to achieve your business goals."
          />

          {/* Solution Card 6 */}
          <SolutionCard
            icon={<Users className="h-10 w-10 text-amber-500" />}
            title="Innovation Workshops"
            description="Collaborative sessions to explore AI opportunities and develop innovative solutions."
          />
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-8 py-6 rounded-md transition-all duration-300 hover:scale-105 group">
            View All Solutions
            <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-amber-500">Success</span> Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across
              industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              title="Financial Services AI Transformation"
              category="Finance"
              description="How we helped a leading financial institution automate 85% of their document processing."
            />

            {/* Case Study 2 */}
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              title="Healthcare Predictive Analytics"
              category="Healthcare"
              description="Implementing predictive models that improved patient outcomes by 32%."
            />

            {/* Case Study 3 */}
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              title="Retail Inventory Optimization"
              category="Retail"
              description="AI-driven inventory management that reduced costs by 24% while improving availability."
            />
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-6 rounded-md transition-all duration-300 hover:scale-105 group">
              Explore All Case Studies
              <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 to-emerald-700 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Let's discuss how our agentic AI solutions can drive innovation and
            growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-6 rounded-md transition-all duration-300 hover:scale-105">
              Schedule a Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-900 font-bold px-8 py-6 rounded-md transition-all duration-300"
            >
              Contact Us
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

// Solution Card Component
function SolutionCard({
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
      <div className="mt-4">
        <a
          href="#"
          className="text-emerald-600 dark:text-emerald-500 font-medium inline-flex items-center group"
        >
          Learn more
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Card>
  );
}

// Case Study Card Component
function CaseStudyCard({
  image,
  title,
  category,
  description,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
}) {
  return (
    <Card className="overflow-hidden bg-white dark:bg-slate-800 border-none hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full">
          {category}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <a
          href="#"
          className="text-amber-600 dark:text-amber-500 font-medium inline-flex items-center group"
        >
          Read case study
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </Card>
  );
}
