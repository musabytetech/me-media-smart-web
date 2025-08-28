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
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to build your intelligent website? Contact us directly!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact MeMedia</CardTitle>
                  <CardDescription>
                    Choose your preferred way to reach us
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleEmailClick}
                    className="w-full h-16 text-lg"
                    variant="default"
                  >
                    <Mail className="mr-3 h-6 w-6" />
                    Email: memediaweb.co@gmail.com
                  </Button>
                  
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full h-16 text-lg"
                    variant="outline"
                  >
                    <MessageCircle className="mr-3 h-6 w-6" />
                    WhatsApp: +27 67 899 8480
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>Response within 12 hours</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-primary mr-3" />
                    <span>Available 24/6 (Sundays close earlier)</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-primary mr-3" />
                    <span>Online business - No physical location</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Process</CardTitle>
                  <CardDescription>How we work with you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                      <div>
                        <h4 className="font-medium">FREE Demo</h4>
                        <p className="text-sm text-muted-foreground">We create your website demo at no cost</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                      <div>
                        <h4 className="font-medium">Approve & Pay</h4>
                        <p className="text-sm text-muted-foreground">Payment only when you're satisfied with demo</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                      <div>
                        <h4 className="font-medium">Transfer</h4>
                        <p className="text-sm text-muted-foreground">Website transferred and out of our hands</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Service Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Service:</strong> Web development with AI chatbot & booking systems</p>
                  <p><strong>Pricing:</strong> Starting from R1500 (complexity dependent)</p>
                  <p><strong>Timeline:</strong> Minimum 7 days</p>
                  <p><strong>Note:</strong> We don't offer SEO services</p>
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