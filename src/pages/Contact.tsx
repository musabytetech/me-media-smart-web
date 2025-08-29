import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, MessageCircle, MapPin, Clock, CheckCircle, Cake } from 'lucide-react';

const Contact = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+27123456789'; // Replace with actual phone number
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/27123456789', '_blank'); // Replace with actual WhatsApp number
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Contact Mpho's Baking Kitchen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Ready to order fresh baked goods? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Phone Card */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handlePhoneClick}>
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Call Us</CardTitle>
                <CardDescription>
                  Speak directly with our baker
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground font-medium">+27 123 456 789</p>
                <Button variant="outline" className="mt-4" size="sm">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">WhatsApp</CardTitle>
                <CardDescription>
                  Message us for quick orders
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground font-medium">+27 123 456 789</p>
                <Button variant="outline" className="mt-4" size="sm">
                  Message Us
                </Button>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Visit Us</CardTitle>
                <CardDescription>
                  Located in Savannah City
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground font-medium">Savannah City<br />Johannesburg</p>
                <Button variant="outline" className="mt-4" size="sm" disabled>
                  Pickup Only
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Information */}
          <Card className="mb-8 md:mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-xl md:text-2xl">
                <Cake className="mr-3 h-6 w-6 text-primary" />
                Order Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Our Products:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Birthday Cakes (Custom designs)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Fresh Scones & Muffins
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Jam Tarts & Snowball Cakes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      Event Catering (except weddings)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Order Policy:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>100% deposit required</strong> before baking</li>
                    <li>• Fresh baked daily</li>
                    <li>• Pickup only from Savannah City</li>
                    <li>• All events catered (except weddings)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Order Guide */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">How to Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Contact Us</h4>
                      <p className="text-sm text-muted-foreground">Call, WhatsApp or visit with your requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Pay Deposit</h4>
                      <p className="text-sm text-muted-foreground">100% deposit required before we start baking</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Collect Fresh</h4>
                      <p className="text-sm text-muted-foreground">Pick up your order from Savannah City</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl">Important Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-primary/10 rounded">
                    <p className="text-sm font-medium text-primary">
                      100% Deposit Required Before Order
                    </p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• We cater for all events except weddings</li>
                    <li>• All items baked fresh to order</li>
                    <li>• Pickup only from our Savannah City location</li>
                    <li>• Custom cake designs available</li>
                    <li>• Order in advance for best availability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;