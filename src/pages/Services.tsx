import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Bot, 
  Zap, 
  CheckCircle, 
  Globe, 
  Smartphone, 
  Database, 
  Brain,
  MessageSquare,
  BarChart3,
  Shield,
  Rocket
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'web-app-development',
      icon: Code,
      title: 'Web App Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      longDescription: 'We create powerful, scalable web applications using the latest technologies like React, Node.js, and cloud infrastructure. Our development process focuses on performance, security, and user experience.',
      features: [
        'Custom React/Vue.js Applications',
        'Progressive Web Apps (PWAs)',
        'E-commerce Platforms',
        'Content Management Systems',
        'API Development & Integration',
        'Database Design & Optimization',
        'Cloud Deployment & Scaling',
        'Performance Optimization'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      pricing: 'Starting at $15,000'
    },
    {
      id: 'ai-integration',
      icon: Bot,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      longDescription: 'Transform your business with cutting-edge AI integration. From chatbots to predictive analytics, we implement AI solutions that enhance user experience and drive business growth.',
      features: [
        'Intelligent Chatbots & Virtual Assistants',
        'Machine Learning Model Integration',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automated Content Generation',
        'AI-Powered Recommendations',
        'Voice Recognition & Processing'
      ],
      technologies: ['OpenAI GPT', 'TensorFlow', 'Python', 'Hugging Face', 'LangChain', 'Vector DBs'],
      pricing: 'Starting at $25,000'
    },
    {
      id: 'smart-websites',
      icon: Zap,
      title: 'Smart Business Websites',
      description: 'Intelligent websites that adapt and learn from user behavior to optimize conversions.',
      longDescription: 'Create websites that think and adapt. Our smart websites use AI to personalize content, optimize user journeys, and continuously improve conversion rates based on real user data.',
      features: [
        'Personalized Content Delivery',
        'Dynamic User Experience Optimization',
        'A/B Testing Automation',
        'Behavioral Analytics & Insights',
        'Conversion Rate Optimization',
        'Smart Form Optimization',
        'Intelligent Search & Filtering',
        'Automated SEO Improvements'
      ],
      technologies: ['Next.js', 'Analytics AI', 'Supabase', 'Tailwind CSS', 'Vercel', 'PostHog'],
      pricing: 'Starting at $10,000'
    }
  ];

  const additionalServices = [
    { icon: Globe, title: 'SEO Optimization', description: 'AI-powered SEO strategies' },
    { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform apps' },
    { icon: Database, title: 'Data Analytics', description: 'Business intelligence solutions' },
    { icon: Shield, title: 'Cybersecurity', description: 'AI-enhanced security measures' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Cutting-edge web solutions powered by artificial intelligence
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="h-full">
                    <CardHeader>
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-lg">
                        {service.longDescription}
                      </CardDescription>
                      <div className="pt-2">
                        <Badge variant="secondary" className="text-sm">
                          {service.pricing}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                          <div className="grid sm:grid-cols-2 gap-2">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Link to="/contact">
                          <Button className="w-full">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      Why Choose This Service?
                    </h3>
                    <div className="space-y-4">
                      {service.id === 'web-app-development' && (
                        <>
                          <div className="flex items-start">
                            <Rocket className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Scalable Architecture</h4>
                              <p className="text-sm text-muted-foreground">Built to grow with your business</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <BarChart3 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Performance First</h4>
                              <p className="text-sm text-muted-foreground">Optimized for speed and efficiency</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Shield className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Enterprise Security</h4>
                              <p className="text-sm text-muted-foreground">Bank-level security standards</p>
                            </div>
                          </div>
                        </>
                      )}
                      {service.id === 'ai-integration' && (
                        <>
                          <div className="flex items-start">
                            <Brain className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Cutting-Edge AI</h4>
                              <p className="text-sm text-muted-foreground">Latest GPT and ML models</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <MessageSquare className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Natural Interactions</h4>
                              <p className="text-sm text-muted-foreground">Human-like AI conversations</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <BarChart3 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Business Intelligence</h4>
                              <p className="text-sm text-muted-foreground">Data-driven insights and automation</p>
                            </div>
                          </div>
                        </>
                      )}
                      {service.id === 'smart-websites' && (
                        <>
                          <div className="flex items-start">
                            <Zap className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Self-Optimizing</h4>
                              <p className="text-sm text-muted-foreground">Continuously improves performance</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <BarChart3 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Conversion Focused</h4>
                              <p className="text-sm text-muted-foreground">AI-driven conversion optimization</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Globe className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-foreground">Personalized Experience</h4>
                              <p className="text-sm text-muted-foreground">Unique journey for every user</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive solutions for all your digital needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                  <Link to="/contact">
                    <Button variant="outline" size="sm" className="mt-3">
                      Inquire
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss which service is right for your needs and create a custom solution together.
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button size="lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;