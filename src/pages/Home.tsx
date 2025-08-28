import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Bot, Code, CheckCircle, Zap, MessageSquare, Mail, MessageCircle } from 'lucide-react';
import meMediaLogo from '@/assets/memedia-logo.png';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development with AI',
      description: 'Custom websites with intelligent chatbots and booking systems built with modern technologies.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src={meMediaLogo} 
              alt="MeMedia Logo" 
              className="h-32 w-auto mx-auto mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            MeMedia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We don't just build websites — we make them intelligent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="text-lg px-8 py-3">
                Get Started
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = 'mailto:memediaweb.co@gmail.com'}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://wa.me/27678998480', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
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
              Professional web development starting from R1500
            </p>
          </div>

          <div className="grid justify-center">
            <Card className="text-center hover:shadow-lg transition-shadow max-w-md">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Web Development with AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  Custom websites with intelligent chatbots and booking systems built with modern technologies.
                </CardDescription>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">Starting from R1500</span>
                  <p className="text-sm text-muted-foreground">depending on complexity</p>
                </div>
                <Link to="/services">
                  <Button variant="outline" className="mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
                Our websites include intelligent chatbots and booking systems that enhance user experience 
                and help grow your business with automated customer service and appointment scheduling.
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-center">
                  <Bot className="h-5 w-5 text-primary mr-3" />
                  Smart chatbots for customer support
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-3" />
                  Automated booking and scheduling systems
                </li>
                <li className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-primary mr-3" />
                  24/7 customer interaction capabilities
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

      {/* Contact Info Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your web development needs. Starting from R1500 depending on complexity.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Email Us</h3>
              <p className="text-muted-foreground">memediaweb.co@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircle className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">WhatsApp</h3>
              <p className="text-muted-foreground">+27 67 899 8480</p>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Live Chat</h3>
              <p className="text-muted-foreground">Available 24/6</p>
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