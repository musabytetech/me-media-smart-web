import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { MessageCircle, Send, Bot, User, Loader2, Mail, X } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m MeMedia\'s AI assistant. I can help you learn about our services, pricing, and answer any questions about web development and AI integration. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const faqResponses = {
    services: "MeMedia offers three main services:\n\n🚀 **Web App Development** - Custom applications with modern tech stack (Starting at $15,000)\n\n🤖 **AI Integration** - Chatbots, ML models, and intelligent features (Starting at $25,000)\n\n⚡ **Smart Business Websites** - AI-powered websites that optimize themselves (Starting at $10,000)\n\nWould you like to know more about any specific service?",
    
    pricing: "Our pricing varies by service:\n\n• **Smart Websites**: Starting at $10,000\n• **Web Apps**: Starting at $15,000  \n• **AI Integration**: Starting at $25,000\n\nPricing depends on complexity, features, and timeline. We offer free consultations to provide accurate quotes for your specific needs.",
    
    process: "Our development process:\n\n1. **Discovery** - We understand your needs and goals\n2. **Planning** - Create detailed project roadmap\n3. **Design** - UI/UX design and prototyping\n4. **Development** - Agile development with regular updates\n5. **Testing** - Comprehensive quality assurance\n6. **Launch** - Deployment and go-live support\n7. **Support** - Ongoing maintenance and updates",
    
    ai: "Our AI capabilities include:\n\n🤖 **Chatbots & Virtual Assistants** - Like this one!\n🧠 **Machine Learning Integration** - Predictive analytics and recommendations\n💬 **Natural Language Processing** - Understanding and generating human language\n👁️ **Computer Vision** - Image and video analysis\n📊 **Intelligent Analytics** - AI-powered business insights\n\nWe use cutting-edge models like GPT, custom ML models, and enterprise AI solutions.",
    
    timeline: "Project timelines typically are:\n\n• **Smart Website**: 4-8 weeks\n• **Web Application**: 8-16 weeks\n• **AI Integration**: 6-12 weeks\n\nTimelines depend on complexity, features, and your feedback speed. We work in agile sprints with regular check-ins to keep projects on track.",
    
    contact: "You can reach us through:\n\n📧 **Email**: hello@memedia.com\n💬 **Contact Form**: Fill out the form on this page\n📍 **Location**: San Francisco, CA\n⏰ **Response Time**: Within 24 hours\n\nWould you like me to connect you with our team for a detailed consultation?"
  };

  const getAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do') || message.includes('offer')) {
      return faqResponses.services;
    } else if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return faqResponses.pricing;
    } else if (message.includes('process') || message.includes('how do you work') || message.includes('methodology')) {
      return faqResponses.process;
    } else if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('machine learning')) {
      return faqResponses.ai;
    } else if (message.includes('timeline') || message.includes('how long') || message.includes('duration')) {
      return faqResponses.timeline;
    } else if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return faqResponses.contact;
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you. I'm here to help you learn about MeMedia's intelligent web solutions. What would you like to know about our services?";
    } else if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! Is there anything else you'd like to know about MeMedia's services or how we can help your business?";
    } else {
      return "I'd be happy to help! I can tell you about:\n\n• Our services (Web Apps, AI Integration, Smart Websites)\n• Pricing and timelines\n• Our development process\n• AI capabilities\n• How to contact our team\n\nWhat would you like to know more about? Or would you like me to connect you with our team for a detailed consultation?";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);

    // Simulate thinking delay
    setTimeout(async () => {
      const aiResponse = getAIResponse(userMessage.content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setLoading(false);

      // Log interaction to database
      try {
        await supabase.from('chatbot_interactions').insert({
          session_id: sessionId,
          user_message: userMessage.content,
          bot_response: aiResponse
        });
      } catch (error) {
        console.error('Error logging interaction:', error);
      }
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const connectToHuman = () => {
    toast({
      title: "Connecting to Team",
      description: "Please fill out the contact form above and we'll get back to you within 24 hours.",
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          AI Assistant
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]">
      <Card className="h-full flex flex-col shadow-xl">
        <CardHeader className="flex-shrink-0 bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <div>
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-sm">
                  Ask me about MeMedia's services
                </CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-2'
                        : 'bg-muted text-foreground mr-2'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.role === 'assistant' && (
                        <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      {message.role === 'user' && (
                        <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="text-sm whitespace-pre-line">
                        {message.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground rounded-lg p-3 mr-2">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4" />
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="border-t p-4 space-y-3">
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={loading || !inputMessage.trim()}
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-accent text-xs"
                onClick={() => setInputMessage("What services do you offer?")}
              >
                Services
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-accent text-xs"
                onClick={() => setInputMessage("What are your pricing rates?")}
              >
                Pricing
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={connectToHuman}
                className="text-xs"
              >
                <Mail className="h-3 w-3 mr-1" />
                Contact Team
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;