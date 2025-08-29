import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageCircle, Clock, Globe } from 'lucide-react';
import AIChatbot from '@/components/AIChatbot';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:memediaweb.co@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27678998480', '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground px-2">
              Ready to build your intelligent website? Contact us directly!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Contact MeMedia</CardTitle>
                  <CardDescription>
                    Choose your preferred way to reach us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 md:space-y-4">
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full h-12 md:h-16 text-sm md:text-lg flex-col sm:flex-row py-2 px-3"
                    variant="default"
                  >
                    <Mail className="mb-1 sm:mb-0 sm:mr-3 h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-center">memediaweb.co@gmail.com</span>
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full h-12 md:h-16 text-sm md:text-lg flex-col sm:flex-row py-2 px-3"
                    variant="outline"
                  >
                    <MessageCircle className="mb-1 sm:mb-0 sm:mr-3 h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-center">+27 67 899 8480</span>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 md:h-5 md:w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Response within 12 hours</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Available 24/6 (Sundays close earlier)</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 md:h-5 md:w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">Online business - No physical location</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Our Process</CardTitle>
                  <CardDescription>How we work with you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">FREE Demo</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">We create your website demo at no cost</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">Approve & Pay</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">Payment only when you're satisfied with demo</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-medium text-sm md:text-base">Transfer</h4>
                        <p className="text-xs md:text-sm text-muted-foreground">Website transferred and out of our hands</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl">Service Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm md:text-base"><strong>Service:</strong> Web development with AI chatbot & booking systems</p>
                  <p className="text-sm md:text-base"><strong>Pricing:</strong> Starting from R1500 (complexity dependent)</p>
                  <p className="text-sm md:text-base"><strong>Timeline:</strong> Minimum 7 days</p>
                  <p className="text-sm md:text-base"><strong>Note:</strong> We don't offer SEO services</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <AIChatbot />
    </div>
  );
};

export default Contact;