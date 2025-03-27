"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Send,
  ChevronDown,
  Check,
  Sparkles,
  Zap,
  BarChart,
} from "lucide-react";
import AIAnimation from "./AIAnimation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface HeroHeaderProps {
  className?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

interface QuizQuestion {
  question: string;
  options: string[];
  results: string[];
}

export default function HeroHeader({
  className = "",
  title = "Agentic AI for the Future",
  subtitle = "Empowering businesses with intelligent, self-driven AI MVPs and innovative solutions.",
  ctaText = "Explore Solutions",
  ctaLink = "/solutions",
}: HeroHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollIndicator, setScrollIndicator] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [animatedElements, setAnimatedElements] = useState(false);

  const quizQuestions: QuizQuestion[] = [
    {
      question: "What is your primary business challenge?",
      options: [
        "Automating repetitive tasks",
        "Gaining insights from data",
        "Building new AI-powered products",
        "Improving customer experience",
      ],
      results: [
        "Workflow Automation",
        "Data Analytics",
        "AI Product Development",
        "Customer Experience AI",
      ],
    },
    {
      question: "What stage is your AI journey?",
      options: [
        "Just starting to explore AI",
        "Piloting initial AI projects",
        "Scaling existing AI solutions",
        "Looking to innovate with cutting-edge AI",
      ],
      results: [
        "AI Strategy Consulting",
        "AI MVP Development",
        "Enterprise AI Solutions",
        "Advanced AI Research",
      ],
    },
    {
      question: "What's your timeline for implementation?",
      options: [
        "Immediate (1-2 months)",
        "Short-term (3-6 months)",
        "Medium-term (6-12 months)",
        "Long-term strategic initiative",
      ],
      results: [
        "Rapid AI Deployment",
        "Agile AI Development",
        "Comprehensive AI Solutions",
        "AI Transformation",
      ],
    },
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);

    // Trigger animated elements after a short delay
    const elementsTimer = setTimeout(() => {
      setAnimatedElements(true);
    }, 500);

    // Hide scroll indicator after 5 seconds
    const scrollTimer = setTimeout(() => {
      setScrollIndicator(false);
    }, 5000);

    return () => {
      clearTimeout(scrollTimer);
      clearTimeout(elementsTimer);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log("Email submitted:", email);
      setSubmitted(true);
      setEmail("");

      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      // Calculate result
      const resultIndex = Math.floor(Math.random() * selectedAnswers.length);
      const questionIndex = selectedAnswers[resultIndex];
      setQuizResult(quizQuestions[resultIndex].results[questionIndex]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizResult(null);
    setShowQuiz(false);
  };

  return (
    <section
      className={cn(
        "relative w-full h-[700px] overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900",
        className,
      )}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <AIAnimation
          color1="hsl(var(--primary))" // primary color
          color2="hsl(var(--accent))" // accent color
          color3="#3b82f6" // blue accent
          particleCount={150}
          speed={1.0}
        />
      </div>

      {/* Geometric Accent Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top right circle */}
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl animate-float"></div>

        {/* Bottom left circle */}
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-accent/10 to-accent/5 blur-3xl animate-float stagger-3"></div>

        {/* Center accent */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 blur-3xl animate-pulse-soft"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {!showQuiz && !quizResult && (
          <div
            className={cn(
              "text-center",
              isVisible ? "animate-slide-up-fade" : "opacity-0 translate-y-10",
            )}
          >
            {/* Headline with animated elements */}
            <div className="mb-8 relative">
              {/* Logo with glow effect */}
              <div className="inline-block relative mb-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight inline-flex flex-wrap justify-center">
                  <span className="text-primary mr-2 relative">
                    non
                    <span className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10"></span>
                  </span>
                  <span className="text-accent relative">
                    neuron
                    <span className="absolute inset-0 bg-accent/20 blur-xl rounded-full -z-10"></span>
                  </span>
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 rounded-full blur-xl -z-10 animate-pulse-soft"></div>
              </div>

              {/* Main title with animated underline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-white relative">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80 animate-gradient-shift">
                  {title}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse-soft"></span>
              </h2>
            </div>

            {/* Subheadline with fade-in animation */}
            <p
              className={cn(
                "text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10",
                animatedElements
                  ? "animate-slide-up-fade stagger-1"
                  : "opacity-0",
              )}
            >
              {subtitle}
            </p>

            {/* Feature Icons */}
            <div
              className={cn(
                "flex justify-center gap-8 mb-10",
                animatedElements
                  ? "animate-slide-up-fade stagger-2"
                  : "opacity-0",
              )}
            >
              <FeatureIcon
                icon={<Zap className="h-6 w-6 text-primary" />}
                text="Intelligent Automation"
              />
              <FeatureIcon
                icon={<BarChart className="h-6 w-6 text-accent" />}
                text="Data-Driven Insights"
              />
              <FeatureIcon
                icon={<Sparkles className="h-6 w-6 text-primary" />}
                text="Innovative Solutions"
              />
            </div>

            {/* Interactive Elements Container */}
            <div
              className={cn(
                "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 max-w-3xl mx-auto",
                animatedElements
                  ? "animate-slide-up-fade stagger-3"
                  : "opacity-0",
              )}
            >
              {/* Find Your Solution Button */}
              <Button
                onClick={startQuiz}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full md:w-auto border border-primary/30 backdrop-blur-sm"
              >
                Find Your Ideal Solution
                <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
              </Button>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg group w-full md:w-auto"
              >
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 inline-block transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              {/* Email Signup Form */}
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative w-full md:w-auto flex-1 max-w-md transition-all duration-300 hover:shadow-md rounded-md overflow-hidden group"
              >
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow py-6 px-4 bg-white/10 backdrop-blur-sm border-primary/30 text-white placeholder:text-white/50 focus-visible:ring-primary"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-l-none group-hover:bg-primary/90"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>

                {/* Success message */}
                {submitted && (
                  <div className="absolute inset-0 flex items-center justify-center bg-primary text-primary-foreground font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Sparkles className="h-5 w-5 mr-2 animate-pulse-soft" />
                    Thank you! We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

        {/* Interactive Quiz */}
        {showQuiz && !quizResult && (
          <div className="bg-card/90 backdrop-blur-md p-8 rounded-xl border border-primary/20 w-full max-w-2xl animate-in fade-in zoom-in duration-300 shadow-xl shadow-primary/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-card-foreground">
                Solution Finder <span className="text-primary">AI</span>
              </h3>
              <div className="flex gap-2">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full",
                      index === currentQuestion
                        ? "bg-primary"
                        : index < currentQuestion
                          ? "bg-accent"
                          : "bg-foreground/30",
                    )}
                  />
                ))}
              </div>
            </div>

            <h4 className="text-xl font-semibold text-card-foreground mb-6">
              {quizQuestions[currentQuestion].question}
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={cn(
                    "justify-start text-left p-4 h-auto border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300",
                    selectedAnswers[currentQuestion] === index &&
                      "bg-primary/20 border-primary",
                  )}
                  onClick={() => handleAnswerSelect(index)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full border flex items-center justify-center",
                        selectedAnswers[currentQuestion] === index
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-foreground/30",
                      )}
                    >
                      {selectedAnswers[currentQuestion] === index && (
                        <Check className="w-4 h-4" />
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </Button>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                variant="ghost"
                onClick={resetQuiz}
                className="text-foreground/70 hover:text-foreground"
              >
                Cancel
              </Button>
              <div className="text-sm text-foreground/50">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </div>
            </div>
          </div>
        )}

        {/* Quiz Result */}
        {quizResult && (
          <div className="bg-card/90 backdrop-blur-md p-8 rounded-xl border border-primary/20 w-full max-w-2xl animate-in fade-in zoom-in duration-300 shadow-xl shadow-primary/10">
            <div className="text-center">
              <div className="inline-block p-3 bg-primary/20 rounded-full mb-4">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Your Ideal Solution
              </h3>
              <div className="text-3xl font-bold text-primary mb-6">
                {quizResult}
              </div>
              <p className="text-foreground/70 mb-8">
                Based on your needs, we recommend our {quizResult} service. Our
                team of experts will help you implement this solution to
                transform your business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="/contact">Schedule a Consultation</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/30 text-foreground hover:bg-primary/10"
                  onClick={resetQuiz}
                >
                  Start Over
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        {scrollIndicator && !showQuiz && !quizResult && (
          <div
            className={cn(
              "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70 cursor-pointer transition-opacity duration-500 hover:text-white",
              scrollIndicator ? "opacity-100" : "opacity-0",
            )}
            onClick={scrollToContent}
          >
            <span className="text-sm mb-2 font-medium">Discover More</span>
            <div className="relative">
              <ChevronDown className="h-6 w-6 animate-bounce" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10"></div>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-10"></div>
      </div>
    </section>
  );
}

// Feature Icon Component
function FeatureIcon({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
        {text}
      </span>
    </div>
  );
}
