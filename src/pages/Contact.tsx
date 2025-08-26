import ContactForm from '@/components/ContactForm';
import AIChatbot from '@/components/AIChatbot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageSquare, Bot } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to transform your web presence? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  We'd love to hear about your project and discuss how our AI-powered 
                  web solutions can help transform your business. Reach out through any 
                  of these channels.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <CardTitle className="text-lg">Email</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">hello@memedia.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-primary mr-3" />
                      <CardTitle className="text-lg">Live Chat</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Available 24/7</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Try our AI assistant for instant answers
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <CardTitle className="text-lg">Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Serving clients worldwide
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-3" />
                      <CardTitle className="text-lg">Business Hours</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Monday - Friday: 9 AM - 6 PM PST</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Emergency support available 24/7
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* AI Assistant Callout */}
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <div className="flex items-center">
                    <Bot className="h-5 w-5 text-primary mr-3" />
                    <CardTitle className="text-lg">Try Our AI Assistant</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Get instant answers to frequently asked questions about our services, 
                    pricing, and process. Our AI assistant is available 24/7 to help.
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span className="bg-background px-2 py-1 rounded">Services & Pricing</span>
                    <span className="bg-background px-2 py-1 rounded">Project Timelines</span>
                    <span className="bg-background px-2 py-1 rounded">AI Capabilities</span>
                    <span className="bg-background px-2 py-1 rounded">Development Process</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What services do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We specialize in AI-powered web development, including custom web applications, 
                  AI integration services, and smart business websites that adapt to user behavior.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much do projects cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our projects start from $10,000 for smart websites, $15,000 for web applications, 
                  and $25,000 for AI integration. Final pricing depends on your specific requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long do projects take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Typical timelines range from 4-8 weeks for websites, 8-16 weeks for web applications, 
                  and 6-12 weeks for AI integration projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you work with international clients?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We work with clients worldwide. We're based in San Francisco but serve 
                  businesses globally through remote collaboration and communication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of San Francisco's tech scene
            </p>
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              MeMedia Headquarters
            </h3>
            <p className="text-muted-foreground mb-4">
              San Francisco, California<br />
              United States
            </p>
            <p className="text-sm text-muted-foreground">
              Interactive map integration available upon request
            </p>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Contact;