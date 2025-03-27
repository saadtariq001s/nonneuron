import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  LineChart,
  Lightbulb,
  Users,
  Code,
  BarChart,
  Network,
  Bot,
  Workflow,
  Layers,
} from "lucide-react";
import Image from "next/image";
import HeroHeader from "@/components/hero/HeroHeader";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <HeroHeader
        title="AI Solutions for Modern Businesses"
        subtitle="Explore our comprehensive suite of AI-powered solutions designed to transform your operations, enhance decision-making, and drive innovation."
        ctaText="Find Your Solution"
        ctaLink="#solutions-categories"
      />

      {/* Header */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-emerald-500">Comprehensive</span> AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our wide range of specialized AI solutions tailored to
            your business needs.
          </p>
        </div>
      </section>

      {/* Solutions Categories */}
      <section id="solutions-categories" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SolutionCategory
              icon={<Brain className="h-12 w-12 text-emerald-600" />}
              title="Agentic AI MVPs"
              description="Rapidly develop and deploy intelligent AI agents that automate complex tasks and workflows."
              link="/solutions/agentic-ai"
            />
            <SolutionCategory
              icon={<Database className="h-12 w-12 text-amber-500" />}
              title="Data Analytics & Insights"
              description="Transform your data into actionable intelligence with our advanced analytics solutions."
              link="/solutions/data-analytics"
            />
            <SolutionCategory
              icon={<Workflow className="h-12 w-12 text-emerald-600" />}
              title="Workflow Automation"
              description="Streamline operations and boost productivity with intelligent process automation."
              link="/solutions/workflow-automation"
            />
            <SolutionCategory
              icon={<Cpu className="h-12 w-12 text-amber-500" />}
              title="Custom AI Solutions"
              description="Tailored AI implementations designed to address your specific business challenges."
              link="/solutions/custom-ai"
            />
            <SolutionCategory
              icon={<Lightbulb className="h-12 w-12 text-emerald-600" />}
              title="AI Consulting & Strategy"
              description="Expert guidance on implementing AI technologies to achieve your business goals."
              link="/solutions/ai-consulting"
            />
            <SolutionCategory
              icon={<Users className="h-12 w-12 text-amber-500" />}
              title="Innovation Workshops"
              description="Collaborative sessions to explore AI opportunities and develop innovative solutions."
              link="/solutions/innovation-workshops"
            />
          </div>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full">
                Featured Solution
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Agentic AI Development Platform
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our flagship platform enables businesses to rapidly develop,
                  deploy, and manage autonomous AI agents that can handle
                  complex tasks with minimal human intervention.
                </p>
                <p>
                  Unlike traditional automation tools, our agentic AI solutions
                  can adapt to changing conditions, learn from experience, and
                  make intelligent decisions based on your business rules and
                  objectives.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <FeatureItem text="Autonomous task execution with minimal supervision" />
                <FeatureItem text="Self-improving performance through continuous learning" />
                <FeatureItem text="Seamless integration with existing systems and workflows" />
                <FeatureItem text="Robust security and governance controls" />
                <FeatureItem text="Comprehensive analytics and performance monitoring" />
              </div>

              <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                Learn More About Agentic AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
                alt="Agentic AI Platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-lg font-semibold mb-2">
                    Trusted by industry leaders
                  </div>
                  <div className="flex space-x-6">
                    <div className="w-16 h-8 bg-white/20 rounded backdrop-blur-sm"></div>
                    <div className="w-16 h-8 bg-white/20 rounded backdrop-blur-sm"></div>
                    <div className="w-16 h-8 bg-white/20 rounded backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our full range of AI services designed to address every
              aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DetailedSolution
              icon={<Bot className="h-10 w-10 text-emerald-600" />}
              title="Conversational AI"
              description="Advanced chatbots and virtual assistants that provide natural, context-aware interactions for customer service and internal support."
              features={[
                "Natural language understanding and generation",
                "Multi-channel deployment (web, mobile, messaging)",
                "Seamless handoff to human agents",
                "Continuous learning from interactions",
              ]}
            />

            <DetailedSolution
              icon={<Database className="h-10 w-10 text-amber-500" />}
              title="Predictive Analytics"
              description="Harness the power of your data to forecast trends, anticipate customer needs, and make proactive business decisions."
              features={[
                "Advanced forecasting models",
                "Customer behavior prediction",
                "Risk assessment and mitigation",
                "Demand planning optimization",
              ]}
            />

            <DetailedSolution
              icon={<Workflow className="h-10 w-10 text-emerald-600" />}
              title="Intelligent Document Processing"
              description="Automate the extraction, classification, and processing of information from documents of any format."
              features={[
                "OCR with advanced text recognition",
                "Automated data extraction and validation",
                "Document classification and routing",
                "Compliance and audit trail",
              ]}
            />

            <DetailedSolution
              icon={<Network className="h-10 w-10 text-amber-500" />}
              title="Computer Vision Solutions"
              description="Visual intelligence systems that can analyze images and video to automate inspection, monitoring, and decision-making."
              features={[
                "Object detection and classification",
                "Quality control automation",
                "Visual search capabilities",
                "Real-time video analytics",
              ]}
            />

            <DetailedSolution
              icon={<BarChart className="h-10 w-10 text-emerald-600" />}
              title="Business Intelligence"
              description="Transform complex data into clear visualizations and insights that drive better business decisions."
              features={[
                "Interactive dashboards and reporting",
                "Real-time data visualization",
                "KPI tracking and alerts",
                "Cross-platform accessibility",
              ]}
            />

            <DetailedSolution
              icon={<Layers className="h-10 w-10 text-amber-500" />}
              title="AI Integration Services"
              description="Seamlessly connect AI capabilities with your existing systems and workflows for maximum business impact."
              features={[
                "API development and management",
                "Legacy system integration",
                "Cloud and on-premise deployment",
                "Scalable architecture design",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our AI solutions are tailored to address the unique challenges and
              opportunities across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <IndustryItem name="Financial Services" />
            <IndustryItem name="Healthcare" />
            <IndustryItem name="Retail" />
            <IndustryItem name="Manufacturing" />
            <IndustryItem name="Logistics" />
            <IndustryItem name="Insurance" />
            <IndustryItem name="Telecommunications" />
            <IndustryItem name="Energy" />
            <IndustryItem name="Real Estate" />
            <IndustryItem name="Education" />
            <IndustryItem name="Government" />
            <IndustryItem name="Technology" />
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
            Let's discuss how our AI solutions can address your specific
            challenges and opportunities.
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

function SolutionCategory({
  icon,
  title,
  description,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800 border-none group hover:scale-[1.02]">
      <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-emerald-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <a
        href={link}
        className="text-emerald-600 dark:text-emerald-500 font-medium inline-flex items-center group-hover:text-emerald-500 transition-colors"
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </Card>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-500"></div>
      </div>
      <span className="text-muted-foreground">{text}</span>
    </div>
  );
}

function DetailedSolution({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 border-none">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <ArrowRight className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

function IndustryItem({ name }: { name: string }) {
  return (
    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-emerald-50 dark:hover:bg-slate-700">
      <p className="font-medium">{name}</p>
    </div>
  );
}
