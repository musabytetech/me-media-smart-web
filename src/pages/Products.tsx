import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Cake, Cookie, Coffee, Heart, Star } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Birthday Cakes',
      icon: Cake,
      description: 'Custom designed birthday cakes for all ages. Made to order with your choice of flavors and decorations.',
      features: ['Custom designs', 'Various flavors', 'All ages', 'Made to order'],
      popular: true
    },
    {
      id: 2,
      name: 'Fresh Scones',
      icon: Cookie,
      description: 'Light, fluffy scones baked fresh daily. Perfect for breakfast or afternoon tea.',
      features: ['Baked daily', 'Light & fluffy', 'Traditional recipe', 'Perfect for tea time'],
      popular: false
    },
    {
      id: 3,
      name: 'Delicious Muffins',
      icon: Coffee,
      description: 'Soft, moist muffins in various flavors. A perfect treat for any time of day.',
      features: ['Various flavors', 'Soft & moist', 'Fresh ingredients', 'Daily favorites'],
      popular: true
    },
    {
      id: 4,
      name: 'Jam Tarts',
      icon: Heart,
      description: 'Traditional jam tarts with buttery pastry and quality jam. A classic favorite.',
      features: ['Buttery pastry', 'Quality jam', 'Traditional recipe', 'Classic favorite'],
      popular: false
    },
    {
      id: 5,
      name: 'Snowball Cakes',
      icon: Star,
      description: 'Delightful snowball cakes covered in coconut. A unique and tasty treat.',
      features: ['Coconut coating', 'Unique recipe', 'Soft sponge', 'Delightful taste'],
      popular: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Fresh baked goods made with love and the finest ingredients
          </p>
          <Link to="/contact">
            <Button size="lg">
              Place Your Order
            </Button>
          </Link>
        </div>
      </section>

      {/* Products Gallery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="relative hover:shadow-lg transition-shadow">
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <product.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Information */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Order
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to get your fresh baked goods
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle className="text-lg">Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get in touch with your order details and requirements
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle className="text-lg">Pay Deposit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  100% deposit required before we start baking your order
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle className="text-lg">Collect Fresh</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pick up your fresh baked goods at our Savannah City location
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
              Important Order Policy
            </h3>
            <div className="space-y-3 text-center">
              <p className="text-muted-foreground">
                <strong>100% deposit required</strong> before order processing begins
              </p>
              <p className="text-sm text-muted-foreground">
                We cater for all events except weddings
              </p>
              <p className="text-sm text-muted-foreground">
                Located in Savannah City, Johannesburg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today to place your order for fresh baked goods
          </p>
          <Link to="/contact">
            <Button size="lg">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;