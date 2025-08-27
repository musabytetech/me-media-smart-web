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
      content: 'Hello! I\'m MeMedia\'s AI assistant. I can help you learn about our web development services with AI chatbots and booking systems. We offer professional websites starting from R1500 with free demos. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const faqResponses = {
    services: "MeMedia offers professional web development with AI integration:\n\n🌐 **Web Development with AI Chatbot & Booking Systems** - Custom websites with intelligent features (Starting from R1500)\n\nOur websites include:\n• Responsive design for all devices\n• AI-powered chatbots for customer support\n• Booking and scheduling systems\n• Modern UI/UX design\n• Fast loading performance\n\nDelivery: Minimum 7 days depending on complexity\nProcess: Free demo → Payment after approval → Website transfer",
    
    pricing: "Our pricing is simple and transparent:\n\n💰 **Starting from R1500** (depending on complexity)\n\n**Our Process:**\n1. We create a free demo first\n2. Payment only after you're happy with the demo\n3. Website is transferred and out of our hands\n\n**What's included:**\n• Responsive website design\n• AI chatbot integration\n• Booking system (if needed)\n• Mobile-friendly design\n• Fast performance optimization",
    
    process: "Our simple 3-step process:\n\n1. **Free Demo** - We build a demo version first at no cost\n2. **Review & Payment** - You review the demo, and payment is made only when you're satisfied\n3. **Transfer & Handover** - Website is transferred to you and out of our hands\n\n⏱️ **Timeline**: Minimum 7 days depending on complexity\n💡 **No Risk**: You only pay after seeing and approving the demo",
    
    ai: "Our AI integration includes:\n\n🤖 **Smart Chatbots** - 24/7 customer support automation\n📅 **Booking Systems** - Automated appointment scheduling\n💬 **Customer Interaction** - Intelligent responses to common questions\n🔄 **Lead Generation** - Automated contact form processing\n\nAll AI features are integrated seamlessly into your website to enhance user experience and grow your business.",
    
    timeline: "Project timeline:\n\n⚡ **Minimum 7 days** depending on complexity\n\n**Factors affecting timeline:**\n• Website complexity and features\n• Number of pages required\n• AI chatbot customization level\n• Booking system requirements\n• Your feedback and approval speed\n\nWe work efficiently to deliver quality websites as quickly as possible while ensuring everything works perfectly.",
    
    contact: "You can reach us at:\n\n📧 **Email**: memediaweb.co@gmail.com\n💬 **Live Chat**: Available through this chatbot\n⏰ **Response Time**: Within 24 hours\n\n**Important Notes:**\n• We don't have a physical address (online business)\n• We don't offer SEO services\n• Websites are transferred and out of our hands after completion\n• We specialize only in web development with AI chatbots and booking systems\n\nWould you like me to help you get started with a free demo?"
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
      return "Hello! Great to meet you. I'm here to help you learn about MeMedia's web development services with AI chatbots and booking systems. What would you like to know?";
    } else if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! Is there anything else you'd like to know about MeMedia's web development services or how we can help build your website with AI features?";
    } else {
      return "I'd be happy to help! I can tell you about:\n\n• Our web development service with AI chatbots and booking systems\n• Pricing (starting from R1500)\n• Our development process and timeline\n• AI chatbot and booking system features\n• How to get started with a free demo\n\nWhat would you like to know more about? Or would you like me to help you get started with a free demo?";
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
      description: "Please email us at memediaweb.co@gmail.com and we'll get back to you within 24 hours.",
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
                  Ask me about web development services
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
                Email Us
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIChatbot;