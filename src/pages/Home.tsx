import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bot, Code, Zap, Star, MessageSquare, Mail, MapPin } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web App Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: Bot,
      title: 'AI Integration', 
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.'
    },
    {
      icon: Zap,
      title: 'Smart Business Websites',
      description: 'Intelligent websites that adapt and learn from user behavior to optimize conversions.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'MeMedia transformed our online presence with their intelligent web solutions. The AI integration has boosted our conversions by 40%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Co.',
      content: 'The team at MeMedia delivered beyond our expectations. Their smart business website adapts to our customers perfectly.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      company: 'Innovation Labs',
      content: 'Outstanding work! The AI-powered features they implemented have revolutionized how we interact with our users.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            MeMedia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't just build websites — we make them intelligent.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-lg px-8 py-3">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge web solutions powered by artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <Link to="/services">
                    <Button variant="outline" className="mt-4">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                AI-Powered Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our cutting-edge AI integration transforms ordinary websites into intelligent, 
                adaptive platforms that learn and evolve with your users' needs.
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-center">
                  <Bot className="h-5 w-5 text-primary mr-3" />
                  Smart chatbots and virtual assistants
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-3" />
                  Automated content personalization
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-primary mr-3" />
                  Intelligent user behavior analytics
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Experience Our AI Assistant
              </h3>
              <p className="text-muted-foreground mb-4">
                Try our intelligent chatbot to see how AI can enhance user interactions on your website.
              </p>
              <Link to="/contact">
                <Button className="w-full">
                  Try AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your web presence with intelligent solutions.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Email Us</h3>
              <p className="text-muted-foreground">hello@memedia.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Live Chat</h3>
              <p className="text-muted-foreground">Available 24/7</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
          
          <Link to="/contact">
            <Button size="lg">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;