import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { 
  Loader2, 
  LogOut, 
  Mail, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Eye,
  Calendar,
  Phone,
  ExternalLink,
  Settings
} from 'lucide-react';
import type { User } from '@supabase/supabase-js';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status: string;
  created_at: string;
}

interface ChatbotInteraction {
  id: string;
  session_id: string;
  user_message: string;
  bot_response: string;
  created_at: string;
}

interface AnalyticsData {
  page_path: string;
  count: number;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [chatbotInteractions, setChatbotInteractions] = useState<ChatbotInteraction[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminAccess();
    loadDashboardData();
  }, []);

  const checkAdminAccess = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        navigate('/admin');
        return;
      }

      // Check admin privileges
      const { data: adminUser } = await supabase
        .from('admin_users')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (!adminUser) {
        toast({
          title: "Access Denied",
          description: "You don't have admin privileges.",
          variant: "destructive"
        });
        navigate('/admin');
        return;
      }

      setUser(session.user);
    } catch (error) {
      console.error('Error checking admin access:', error);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const loadDashboardData = async () => {
    try {
      // Load contact submissions
      const { data: contacts, error: contactsError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (contactsError) throw contactsError;
      setContactSubmissions(contacts || []);

      // Load chatbot interactions
      const { data: interactions, error: interactionsError } = await supabase
        .from('chatbot_interactions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (interactionsError) throw interactionsError;
      setChatbotInteractions(interactions || []);

      // Load analytics (simplified)
      const { data: analyticsData, error: analyticsError } = await supabase
        .from('website_analytics')
        .select('page_path')
        .order('created_at', { ascending: false })
        .limit(1000);

      if (analyticsError) throw analyticsError;
      
      // Process analytics data
      const pageViews = (analyticsData || []).reduce((acc: Record<string, number>, item) => {
        acc[item.page_path] = (acc[item.page_path] || 0) + 1;
        return acc;
      }, {});

      const processedAnalytics = Object.entries(pageViews)
        .map(([page_path, count]) => ({ page_path, count }))
        .sort((a, b) => b.count - a.count);

      setAnalytics(processedAnalytics);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data.",
        variant: "destructive"
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setContactSubmissions(prev => 
        prev.map(contact => 
          contact.id === id ? { ...contact, status } : contact
        )
      );

      toast({
        title: "Status Updated",
        description: `Contact marked as ${status}.`,
      });
    } catch (error) {
      console.error('Error updating contact status:', error);
      toast({
        title: "Error",
        description: "Failed to update contact status.",
        variant: "destructive"
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">MeMedia Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.email}
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contactSubmissions.length}</div>
              <p className="text-xs text-muted-foreground">
                All time submissions
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chat Interactions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{chatbotInteractions.length}</div>
              <p className="text-xs text-muted-foreground">
                AI assistant conversations
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Contacts</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {contactSubmissions.filter(c => c.status === 'new').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Pending responses
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {analytics.reduce((sum, item) => sum + item.count, 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Total page views
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList>
            <TabsTrigger value="contacts">Contact Submissions</TabsTrigger>
            <TabsTrigger value="chatbot">Chatbot Analytics</TabsTrigger>
            <TabsTrigger value="analytics">Website Analytics</TabsTrigger>
            <TabsTrigger value="content">Content Management</TabsTrigger>
          </TabsList>

          {/* Contact Submissions */}
          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>
                  Manage and respond to customer inquiries
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactSubmissions.map((contact) => (
                    <Card key={contact.id} className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-foreground">{contact.name}</h4>
                          <div className="flex items-center text-sm text-muted-foreground space-x-4">
                            <span className="flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {contact.email}
                            </span>
                            {contact.phone && (
                              <span className="flex items-center">
                                <Phone className="h-3 w-3 mr-1" />
                                {contact.phone}
                              </span>
                            )}
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formatDate(contact.created_at)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={
                              contact.status === 'new' ? 'default' :
                              contact.status === 'read' ? 'secondary' : 'outline'
                            }
                          >
                            {contact.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{contact.message}</p>
                      
                      <div className="flex space-x-2">
                        {contact.status === 'new' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateContactStatus(contact.id, 'read')}
                          >
                            <Eye className="h-3 w-3 mr-1" />
                            Mark as Read
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.open(`mailto:${contact.email}`)}
                        >
                          <Mail className="h-3 w-3 mr-1" />
                          Reply
                        </Button>
                        {contact.status !== 'replied' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateContactStatus(contact.id, 'replied')}
                          >
                            Mark as Replied
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                  
                  {contactSubmissions.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No contact submissions yet.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Chatbot Analytics */}
          <TabsContent value="chatbot" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Chatbot Interactions</CardTitle>
                <CardDescription>
                  Recent conversations with the AI assistant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chatbotInteractions.slice(0, 20).map((interaction) => (
                    <Card key={interaction.id} className="p-4">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <Badge variant="outline" className="text-xs">
                            Session: {interaction.session_id}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {formatDate(interaction.created_at)}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="bg-muted/50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">User:</p>
                            <p className="text-sm text-muted-foreground">{interaction.user_message}</p>
                          </div>
                          
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <p className="text-sm font-medium text-foreground mb-1">AI Assistant:</p>
                            <p className="text-sm text-muted-foreground">{interaction.bot_response}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {chatbotInteractions.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No chatbot interactions yet.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Website Traffic</CardTitle>
                <CardDescription>
                  Page views and user engagement metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analytics.map((page, index) => (
                    <div key={page.page_path} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-foreground">{page.page_path}</span>
                      </div>
                      <Badge variant="secondary">
                        {page.count} views
                      </Badge>
                    </div>
                  ))}
                  
                  {analytics.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No analytics data available yet.
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>
                  Manage website content and pages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8">
                    <Settings className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Content Management System
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Advanced content management features are coming soon. 
                      You'll be able to edit page content, manage blog posts, and update site information.
                    </p>
                    <Button variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Go to Website
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;