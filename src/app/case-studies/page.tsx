import Navbar from "@/components/navigation/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import HeroHeader from "@/components/hero/HeroHeader";

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <HeroHeader
        title="Case Studies & Success Stories"
        subtitle="Discover how our AI solutions have transformed businesses across industries, delivering measurable results and competitive advantages."
        ctaText="Explore Case Studies"
        ctaLink="#case-studies-grid"
      />

      {/* Header */}
      <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-emerald-500">Real-World</span> Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our solutions have delivered measurable results for
            organizations across industries.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-full">
                Featured Case Study
              </div>
              <h2 className="text-3xl font-bold mb-6">
                How FinTech Leader Automated 85% of Document Processing
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A leading financial services company was struggling with
                  manual document processing that was error-prone,
                  time-consuming, and costly. They needed a solution that could
                  accurately extract data from various document types while
                  maintaining compliance with strict regulatory requirements.
                </p>
                <p>
                  Our team implemented an intelligent document processing
                  solution powered by our agentic AI technology, which could
                  understand context, learn from corrections, and continuously
                  improve its accuracy over time.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <ResultItem
                  metric="85%"
                  text="Reduction in manual document processing"
                />
                <ResultItem metric="93%" text="Accuracy in data extraction" />
                <ResultItem metric="68%" text="Decrease in processing time" />
                <ResultItem metric="$2.4M" text="Annual cost savings" />
              </div>

              <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[500px] order-1 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="FinTech document processing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <Quote className="h-8 w-8 text-emerald-500 mb-2" />
                  <p className="text-lg italic mb-4">
                    "nonNeuron's solution transformed our operations, reducing
                    costs while improving accuracy and compliance."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 mr-3"></div>
                    <div>
                      <div className="font-medium">Sarah Johnson</div>
                      <div className="text-sm text-white/70">
                        CTO, Global Financial Services
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section
        id="case-studies-grid"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Success Stories Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore how our AI solutions have delivered transformative results
              for organizations of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
              title="Healthcare Predictive Analytics"
              category="Healthcare"
              description="Implementing predictive models that improved patient outcomes by 32% while reducing readmission rates."
              results={[
                "32% improvement in patient outcomes",
                "28% reduction in readmission rates",
                "$1.8M annual savings",
              ]}
            />

            <CaseStudyCard
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
              title="Retail Inventory Optimization"
              category="Retail"
              description="AI-driven inventory management that reduced costs by 24% while improving product availability."
              results={[
                "24% reduction in inventory costs",
                "18% improvement in product availability",
                "42% decrease in stockouts",
              ]}
            />

            <CaseStudyCard
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
              title="Manufacturing Quality Control"
              category="Manufacturing"
              description="Computer vision system that automated quality inspection, reducing defects by 76%."
              results={[
                "76% reduction in defect rates",
                "94% inspection accuracy",
                "3.2x increase in inspection speed",
              ]}
            />

            <CaseStudyCard
              image="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=800&q=80"
              title="Insurance Claims Processing"
              category="Insurance"
              description="Intelligent automation that reduced claims processing time from days to minutes."
              results={[
                "95% reduction in processing time",
                "42% improvement in accuracy",
                "$3.4M annual operational savings",
              ]}
            />

            <CaseStudyCard
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              title="Financial Fraud Detection"
              category="Finance"
              description="Advanced AI system that improved fraud detection by 89% while reducing false positives."
              results={[
                "89% improvement in fraud detection",
                "64% reduction in false positives",
                "$5.2M in prevented fraud losses",
              ]}
            />

            <CaseStudyCard
              image="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80"
              title="Logistics Route Optimization"
              category="Logistics"
              description="AI-powered route planning that reduced delivery times and fuel consumption."
              results={[
                "28% reduction in delivery times",
                "32% decrease in fuel consumption",
                "$1.7M annual cost savings",
              ]}
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
            Let's discuss how our AI solutions can address your specific
            challenges and deliver measurable results.
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

function ResultItem({ metric, text }: { metric: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">
        {metric}
      </div>
      <div className="text-muted-foreground">{text}</div>
    </div>
  );
}

function CaseStudyCard({
  image,
  title,
  category,
  description,
  results,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
  results: string[];
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

        <div className="space-y-2 mb-4">
          {results.map((result, index) => (
            <div key={index} className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{result}</span>
            </div>
          ))}
        </div>

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
