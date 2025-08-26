import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new ways to integrate AI into web solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering high-quality, reliable solutions that exceed expectations.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'We envision a future where every website is intelligent, adaptive, and user-centric.'
    }
  ];

  const teamMembers = [
    {
      name: 'Coming Soon',
      role: 'CEO & Founder',
      image: '/placeholder.svg',
      bio: 'Team bios and photos will be added soon.'
    },
    {
      name: 'Coming Soon',
      role: 'CTO',
      image: '/placeholder.svg',
      bio: 'Team bios and photos will be added soon.'
    },
    {
      name: 'Coming Soon',
      role: 'Lead AI Developer',
      image: '/placeholder.svg',
      bio: 'Team bios and photos will be added soon.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About MeMedia
          </h1>
          <p className="text-xl text-muted-foreground">
            Pioneering the future of intelligent web development
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                MeMedia was founded with a simple yet ambitious vision: to revolutionize how businesses 
                connect with their audiences through intelligent web solutions. In an era where artificial 
                intelligence is reshaping every industry, we recognized the immense potential to transform 
                static websites into dynamic, learning platforms.
              </p>
              
              <p>
                Our journey began when we noticed that traditional web development was falling behind 
                the rapid pace of technological advancement. Websites were still primarily static, 
                one-size-fits-all experiences that failed to adapt to individual users or business needs. 
                We knew there had to be a better way.
              </p>
              
              <p>
                Today, MeMedia stands at the intersection of web development and artificial intelligence, 
                creating solutions that don't just look beautiful, but actually think, learn, and evolve. 
                We're not just building websites – we're crafting intelligent digital experiences that 
                grow smarter with every interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To create intelligent web solutions that transform businesses by seamlessly 
                  integrating artificial intelligence into every aspect of the user experience. 
                  We believe that technology should work for people, not the other way around, 
                  and we're committed to making AI accessible and practical for businesses of all sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the leading agency in AI-powered web development, setting the standard 
                  for intelligent digital experiences. We envision a future where every website 
                  is a smart, adaptive platform that understands its users, anticipates their 
                  needs, and continuously evolves to provide better experiences and outcomes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The brilliant minds behind MeMedia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something intelligent together.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 text-lg px-8 py-3">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;