import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Bot, 
  CheckCircle, 
  MessageSquare,
  Calendar,
  Rocket
} from 'lucide-react';

const Services = () => {
  const service = {
    id: 'web-development-ai',
    icon: Code,
    title: 'Web Development with AI Chatbot & Booking Systems',
    description: 'Professional websites with intelligent features to grow your business.',
    longDescription: 'We create modern, responsive websites with integrated AI chatbots for customer support and booking systems for appointment scheduling. Our websites are built with the latest technologies and delivered with a minimum of 7 days depending on complexity.',
    features: [
      'Responsive Website Design',
      'AI-Powered Chatbot Integration', 
      'Booking & Scheduling System',
      'Mobile-Friendly Design',
      'Fast Loading Performance',
      'Contact Forms & Lead Generation',
      'Modern UI/UX Design',
      'Cross-Browser Compatibility'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'AI Integration'],
    pricing: 'Starting from R1500'
  };

  const features = [
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: '24/7 automated customer support and information gathering'
    },
    {
      icon: Calendar,
      title: 'Booking System',
      description: 'Automated appointment scheduling and calendar management'
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Minimum 7 days delivery depending on project complexity'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Professional web development with AI integration starting from R1500
          </p>
        </div>
      </section>

      {/* Main Service */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
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
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Key Features
                </h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <feature.icon className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Our Process
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-3">1</span>
                    <span className="text-sm">Free demo development</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-3">2</span>
                    <span className="text-sm">Payment after client approval</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs flex items-center justify-center mr-3">3</span>
                    <span className="text-sm">Website transfer & handover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Important Information
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-foreground">What We Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Web development with AI chatbot
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Booking systems integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Free demo before payment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    Minimum 7 days delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-foreground">What We Don't Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SEO services</li>
                  <li>• Ongoing website maintenance</li>
                  <li>• Website hosting services</li>
                  <li>• Post-transfer support</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Websites are transferred and out of our hands after completion.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Your Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free demo. Payment only after you're happy with the result!
          </p>
          <div className="space-x-4">
            <Link to="/contact">
              <Button size="lg">
                Get Free Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;