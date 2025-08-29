import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { MessageCircle, Send, Bot, User, Loader2, Mail, X, Maximize2, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
    services: "MeMedia specializes in web development with AI integration:\n\n🌐 **Web Development with AI Chatbot & Booking Systems** - Starting from R1500 (depending on complexity)\n\n**What we offer:**\n• Responsive design for all devices\n• AI-powered chatbots for customer support\n• Booking and scheduling systems\n• Modern UI/UX design\n• Fast loading performance\n\n**Important:**\n• We offer only ONE service - web development with AI chatbot and booking systems\n• We don't offer SEO services\n• No physical location (online business only)\n• Delivery: Minimum 7 days depending on complexity",
    
    pricing: "Our transparent pricing:\n\n💰 **Starting from R1500** (depending on complexity)\n\n**Our Process:**\n1. FREE demo created first\n2. Payment ONLY after you approve the demo\n3. Website transferred and out of our hands\n\n**Timeline:** Minimum 7 days depending on complexity\n**Contact:** memediaweb.co@gmail.com | WhatsApp: +27 67 899 8480",
    
    process: "Our risk-free 3-step process:\n\n1. **FREE Demo** - We build a demo at no cost\n2. **Approve & Pay** - Payment only when you're satisfied\n3. **Transfer** - Website handed over and out of our hands\n\n⏱️ **Timeline**: Minimum 7 days (complexity dependent)\n💡 **Zero Risk**: Pay only after demo approval\n📞 **Support**: We respond within 12 hours, open 24/6 (Sundays close earlier)",
    
    ai: "Our AI integration features:\n\n🤖 **Smart Chatbots** - 24/7 automated customer support\n📅 **Booking Systems** - Intelligent appointment scheduling\n💬 **Customer Service** - Automated responses to queries\n🔄 **Lead Management** - Smart contact processing\n\nAll seamlessly integrated into your website for enhanced user experience.",
    
    timeline: "Development timeline:\n\n⚡ **Minimum 7 days** (depends on complexity)\n\n**Timeline factors:**\n• Website complexity and features\n• AI chatbot customization needs\n• Booking system requirements\n• Client feedback speed\n\n**Availability:** 24/6 (Sundays close earlier)\n**Response Time:** Within 12 hours",
    
    contact: "Contact MeMedia:\n\n📧 **Email**: memediaweb.co@gmail.com\n📱 **WhatsApp**: +27 67 899 8480\n💬 **This Chat**: Available now\n\n⏰ **Response Time**: Within 12 hours\n🕐 **Available**: 24/6 (Sundays close earlier)\n\n**Key Points:**\n• No physical location (online business)\n• No SEO services offered\n• Websites transferred after completion\n• Single service: Web development with AI chatbots & booking systems\n\nReady for a free demo?"
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
    <div className={`fixed z-50 transition-all duration-300 ${
      isFullscreen 
        ? 'inset-0 m-0' 
        : 'bottom-6 right-6 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]'
    }`}>
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
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
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