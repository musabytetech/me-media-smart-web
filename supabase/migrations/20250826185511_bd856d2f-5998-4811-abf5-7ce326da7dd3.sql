-- Create contact form submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Create admin users table for authentication
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chatbot interactions table for analytics
CREATE TABLE public.chatbot_interactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_message TEXT NOT NULL,
  bot_response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create website analytics table
CREATE TABLE public.website_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  user_agent TEXT,
  ip_address INET,
  referrer TEXT,
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create content management table
CREATE TABLE public.content_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_name TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chatbot_interactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.website_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_pages ENABLE ROW LEVEL SECURITY;

-- Create policies for contact submissions (public can insert, admins can view/manage)
CREATE POLICY "Anyone can create contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Admins can update contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Create policies for admin users
CREATE POLICY "Admins can view admin users" 
ON public.admin_users 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Super admins can manage admin users" 
ON public.admin_users 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid() AND role = 'super_admin'
  )
);

-- Create policies for chatbot interactions (public can insert, admins can view)
CREATE POLICY "Anyone can create chatbot interactions" 
ON public.chatbot_interactions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view chatbot interactions" 
ON public.chatbot_interactions 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Create policies for website analytics (public can insert, admins can view)
CREATE POLICY "Anyone can create analytics entries" 
ON public.website_analytics 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view analytics" 
ON public.website_analytics 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Create policies for content pages (admins can manage, public can view)
CREATE POLICY "Anyone can view content pages" 
ON public.content_pages 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage content pages" 
ON public.content_pages 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE user_id = auth.uid()
  )
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_users_updated_at
BEFORE UPDATE ON public.admin_users
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_pages_updated_at
BEFORE UPDATE ON public.content_pages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default content pages
INSERT INTO public.content_pages (page_name, title, content) VALUES 
('home', 'MeMedia - Intelligent Web Solutions', '{"hero_title": "MeMedia", "hero_subtitle": "We don''t just build websites — we make them intelligent.", "hero_cta": "Get Started"}'),
('about', 'About MeMedia', '{"title": "About MeMedia", "mission": "Our mission is to create intelligent web solutions that transform businesses.", "vision": "To be the leading agency in AI-powered web development."}'),
('services', 'Our Services', '{"title": "Our Services", "services": [{"name": "Web App Development", "description": "Custom web applications built with modern technologies"}, {"name": "AI Integration", "description": "Seamlessly integrate AI capabilities into your existing systems"}, {"name": "Smart Business Websites", "description": "Intelligent websites that adapt and learn from user behavior"}]}');