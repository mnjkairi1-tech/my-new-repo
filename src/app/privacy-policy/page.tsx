
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClubHeader } from '@/components/club-header';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-2xl p-6 pb-24">
        <div className="flex items-center gap-4 mb-8">
            <Link href="/" passHref>
                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                    <ArrowLeft />
                </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">Privacy Policy</h1>
        </div>

        <Card className="bg-card/80 backdrop-blur-xl border-none soft-shadow rounded-[2rem] overflow-hidden">
          <CardContent className="p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-primary" />
                </div>
            </div>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">1. Introduction</h2>
              <p>Welcome to <strong>Ai Atlas</strong>. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our application and tell you about your privacy rights and how the law protects you.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Identity Data:</strong> includes display name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes email address.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this app.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To register you as a new user.</li>
                <li>To manage your account and preferences (starred tools, hearted items).</li>
                <li>To provide community features like group chats and link sharing.</li>
                <li>To improve our website, services, marketing, and customer experiences.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">4. Third-Party Links</h2>
              <p>This app includes links to third-party websites (AI tools). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-foreground">5. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p className="font-bold text-primary">Email: mnjkairi1@gmail.com</p>
            </section>

            <div className="pt-8 text-center border-t border-border/50">
                <p className="text-xs">Last Updated: February 2026</p>
                <p className="text-xs font-black uppercase tracking-widest mt-2">Ai Atlas 2099</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
