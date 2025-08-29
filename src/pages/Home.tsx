import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Cake, Clock, MapPin, Star, Users, Phone } from 'lucide-react';

const Home = () => {
  const specialties = [
    {
      icon: Cake,
      title: 'Birthday Cakes',
      description: 'Custom designed cakes for your special celebrations'
    },
    {
      icon: Star,
      title: 'Fresh Baked Daily',
      description: 'Scones, muffins, jam tarts, and snowball cakes made fresh'
    },
    {
      icon: Users,
      title: 'Event Catering',
      description: 'Catering services for all events (except weddings)'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Mpho's Baking Kitchen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fresh baked goods made with love in Savannah City, Johannesburg
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button size="lg" className="text-lg px-8 py-3">
                View Our Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Place an Order
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fresh baked goods crafted with care for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <specialty.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Bake
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From beautiful birthday cakes to delicious daily treats, we offer a variety of 
                fresh baked goods perfect for any occasion.
              </p>
              <ul className="space-y-4 text-foreground">
                <li className="flex items-center">
                  <Cake className="h-5 w-5 text-primary mr-3" />
                  Custom Birthday Cakes
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-primary mr-3" />
                  Fresh Scones & Muffins
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  Jam Tarts & Snowball Cakes
                </li>
              </ul>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Ready to Order?
              </h3>
              <p className="text-muted-foreground mb-4">
                Browse our full product gallery and place your order today.
              </p>
              <Link to="/products">
                <Button className="w-full mb-4">
                  View All Products
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> 100% deposit required before order processing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Visit Us Today
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 justify-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Location</h3>
              <p className="text-muted-foreground">Savannah City<br />Johannesburg</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Events</h3>
              <p className="text-muted-foreground">All occasions<br />(except weddings)</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground">Fresh Daily</h3>
              <p className="text-muted-foreground">Baked fresh<br />every day</p>
            </div>
          </div>
          
          <Link to="/contact">
            <Button size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;