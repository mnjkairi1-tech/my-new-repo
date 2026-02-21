"use client"

import React, { useState, useEffect } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  User,
  Shield,
  Bell,
  Palette,
  Languages,
  Settings,
  CreditCard,
  HelpCircle,
  Info,
  ChevronRight,
  KeyRound,
  Trash2,
  FileClock,
  BarChart3,
  Fingerprint,
  Mail,
  ListFilter,
  BellOff,
  Sun,
  Laptop,
  Type,
  Moon,
  Globe,
  Star,
  RefreshCw,
  Download,
  Cloud,
  Upload,
  MessageSquare,
  LogOut,
  UserCircle,
  Link as LinkIcon,
  GitBranch,
  FileText,
  TrendingUp,
  History,
  Bug,
  ShieldAlert,
  LayoutDashboard,
  Crown,
  X,
  CheckCircle
} from "lucide-react"
import { Switch } from "./ui/switch"
import { Separator } from "./ui/separator"
import { ProfileDetails } from "./settings/profile-details"
import { ChangePassword } from "./settings/change-password"
import { DeleteAccount } from "./settings/delete-account"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog"
import { DataPermissions } from "./settings/data-permissions"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useLanguage } from "@/lib/language"
import { useAuth, useUser, useFirestore, useCollection, useMemoFirebase } from "@/firebase"
import { signOut } from "firebase/auth"
import { Button } from "./ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { collection, query, where, orderBy, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { Card } from "./ui/card"
import { format } from "date-fns"

interface AppNotification {
    id: string;
    userId: string;
    title: string;
    message: string;
    createdAt: any;
    read: boolean;
    type: 'support' | 'bug' | 'general';
}

const LanguageSelector = () => {
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
    }
    
    return (
        <div className="p-2">
            <Select onValueChange={handleLanguageChange} value={language}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="zh">Mandarin Chinese</SelectItem>
                    <SelectItem value="hi">Hindi</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="ar">Arabic</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

const FontSizeSelector = () => {
    const [fontSize, setFontSize] = React.useState('medium');
    const { t } = useLanguage();

    React.useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('font-size-small', 'font-size-medium', 'font-size-large');
        root.classList.add(`font-size-${fontSize}`);
    }, [fontSize]);

    return (
        <div className="p-2 space-y-2">
            <RadioGroup defaultValue="medium" onValueChange={setFontSize}>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="font-small" />
                    <Label htmlFor="font-small">{t('settings.appearance.fontSize.small')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="font-medium" />
                    <Label htmlFor="font-medium">{t('settings.appearance.fontSize.medium')}</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="font-large" />
                    <Label htmlFor="font-large">{t('settings.appearance.fontSize.large')}</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export function SettingsPage() {
    const { t } = useLanguage();
    const auth = useAuth();
    const { user } = useUser();
    const firestore = useFirestore();
    const [analyticsEnabled, setAnalyticsEnabled] = React.useState(false);
    const [pushEnabled, setPushEnabled] = React.useState(false);
    const [emailEnabled, setEmailEnabled] = React.useState(true);
    const [muteAll, setMuteAll] = React.useState(false);

    const isOwner = user?.email === 'mnjkairi1@gmail.com';

    const notificationsQuery = useMemoFirebase(() => {
        if (!firestore || !user) return null;
        return query(
            collection(firestore, 'notifications'), 
            where('userId', '==', user.uid),
            orderBy('createdAt', 'desc')
        );
    }, [firestore, user]);

    const { data: notifications } = useCollection<AppNotification>(notificationsQuery);
    const unreadCount = notifications?.filter(n => !n.read).length || 0;

    const handleSignOut = () => {
        signOut(auth);
    };

    const markAsRead = async (id: string) => {
        if (!firestore) return;
        await updateDoc(doc(firestore, 'notifications', id), { read: true });
    };

    const deleteNotification = async (id: string) => {
        if (!firestore) return;
        await deleteDoc(doc(firestore, 'notifications', id));
    };

    const baseConfig = [
      {
        title: t('settings.account.title'),
        icon: User,
        options: [
          { label: t('settings.account.profile'), icon: UserCircle, component: <ProfileDetails /> },
          { label: t('settings.account.password'), icon: KeyRound, component: <ChangePassword /> },
          { label: t('settings.account.delete'), icon: Trash2, color: "text-red-500", component: <DeleteAccount />, isDialog: true },
        ],
      },
      {
        title: t('settings.privacy.title'),
        icon: Shield,
        options: [
          { label: t('settings.privacy.permissions'), icon: Shield, component: <DataPermissions /> },
        ],
      },
      {
        title: t('settings.notifications.title'),
        icon: Bell,
        options: [
          { label: t('settings.notifications.push'), icon: Bell, control: "switch" },
          { label: t('settings.notifications.email'), icon: Mail, control: "switch", checked: true },
          { label: t('settings.notifications.mute'), icon: BellOff, control: "switch" },
        ],
      },
      {
        title: t('settings.appearance.title'),
        icon: Palette,
        options: [
          { label: t('settings.appearance.theme.title'), icon: Palette, href: '/ui-themes' },
          { label: t('settings.appearance.fontSize.title'), icon: Type, component: 'font' },
        ],
      },
      {
        title: t('settings.language.title'),
        icon: Languages,
        options: [
          { label: t('settings.language.app'), icon: Globe, component: 'language' },
        ],
      },
      {
        title: t('settings.preferences.title'),
        icon: Settings,
        options: [
          { label: t('settings.preferences.autoUpdate'), icon: RefreshCw, control: "switch", checked: true },
        ],
      },
      {
        title: t('settings.billing.title'),
        icon: CreditCard,
        options: [
          { label: t('settings.billing.plans'), icon: TrendingUp, href: '/subscription/plans' },
          { label: t('settings.billing.history'), icon: History },
        ],
      },
      {
        title: t('settings.support.title'),
        icon: HelpCircle,
        options: [
          { label: t('settings.support.contact'), icon: MessageSquare, href: '/support/contact' },
          { label: t('settings.support.report'), icon: Bug, href: '/support/report-bug' },
        ],
      },
      {
        title: t('settings.about.title'),
        icon: Info,
        options: [
          { label: t('settings.about.version'), icon: GitBranch, value: "1.0.0" },
          { label: t('settings.about.terms'), icon: FileText, isDialog: true, component: (
            <div className="text-sm text-muted-foreground max-h-[400px] overflow-y-auto">
              <h3 className="font-bold text-lg text-foreground mb-2">Terms of Service</h3>
              <p className="mb-4">By using All AI Tools in One Website, you agree to follow these basic rules.</p>
              <p className="mb-4">This website is made to help people discover and explore AI tools. We do our best to keep the information useful, but we do not guarantee that every tool listed will always work or be accurate.</p>
              <h4 className="font-semibold text-md text-foreground mb-2">User accounts & community</h4>
              <p className="mb-2">If you create an account or interact in the community:</p>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>Be respectful to others</li>
                <li>Do not post illegal, harmful, or misleading content</li>
                <li>Do not spam or misuse the platform</li>
              </ul>
              <p className="mb-4">We reserve the right to remove content or suspend accounts that break these rules.</p>
              <h4 className="font-semibold text-md text-foreground mb-2">AI tools listing</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>We do not own or run the AI tools listed on this website.</li>
                <li>We only share information and links for convenience. Using any tool is your own decision and responsibility.</li>
              </ul>
              <h4 className="font-semibold text-md text-foreground mb-2">Ads</h4>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>This website shows ads to support running costs.</li>
                <li>We are not responsible for products or services shown in advertisements.</li>
              </ul>
              <p>We may update these terms in the future. Continued use of the website means you accept the updated terms.</p>
            </div>
          ) },
          { label: t('settings.about.privacy'), icon: Shield, isDialog: true, component: (
            <div className="text-sm text-muted-foreground max-h-[400px] overflow-y-auto">
                <h3 className="font-bold text-lg text-foreground mb-2">Privacy Policy</h3>
                <p className="mb-4">At All AI Tools in One Website, we respect your privacy and take it seriously. This page explains what kind of information we collect and why we collect it.</p>
                <p className="mb-4">When you visit or use our website, some basic information like your browser type, device, IP address, and pages you visit may be collected automatically. This helps us understand how the website is used and how we can improve it.</p>
                <p className="mb-4">If you create an account or use community features, we may ask for basic details like your name or email address. This information is only used to manage your account and provide a better experience on the website.</p>
                <p className="mb-4">We do not sell, trade, or share your personal information with anyone for profit.</p>
                <h4 className="font-semibold text-md text-foreground mb-2">Cookies</h4>
                <p className="mb-4">Our website uses cookies to remember user preferences and improve performance. Google AdSense may also use cookies to show ads that are more relevant to you. You can disable cookies from your browser settings if you prefer.</p>
                <h4 className="font-semibold text-md text-foreground mb-2">Google Ads</h4>
                <p className="mb-4">We use Google AdSense to display ads. Google may use cookies and similar technologies to show ads based on your interests and previous visits to websites. You can manage or turn off personalized ads from Google Ads settings.</p>
                <h4 className="font-semibold text-md text-foreground mb-2">Third-party links</h4>
                <p className="mb-4">Our website lists and links to many third-party AI tools. We do not control these websites, so their privacy practices may be different. Please check their privacy policies separately.</p>
                <p>By using this website, you agree to this Privacy Policy. This policy may be updated whenever needed.</p>
            </div>
          ) },
           { label: "Disclaimer", icon: Info, isDialog: true, component: (
            <div className="text-sm text-muted-foreground max-h-[400px] overflow-y-auto">
                <h3 className="font-bold text-lg text-foreground mb-2">Disclaimer</h3>
                <p className="mb-4">All content on All AI Tools in One Website is shared for general information only.</p>
                <p className="mb-4">We do not promise results, earnings, accuracy, or performance of any AI tool listed here.</p>
                <p className="mb-4">Some tools may change, stop working, or require payment.</p>
                <p className="mb-4">Please use your own judgement before using any AI tool.</p>
                <p>We are not responsible for any loss, damage, or issues caused by using third-party tools or information from this website.</p>
            </div>
           )},
           { label: "Affiliate Disclosure", icon: LinkIcon, isDialog: true, component: (
            <div className="text-sm text-muted-foreground max-h-[400px] overflow-y-auto">
                <h3 className="font-bold text-lg text-foreground mb-2">Affiliate Disclosure</h3>
                <p className="mb-4">Some links on All AI Tools in One Website may be affiliate links.</p>
                <p className="mb-4">This means we may earn a small commission if you sign up or purchase through those links — at no extra cost to you.</p>
                <p className="mb-4">These commissions help us keep the website running and add more useful tools.</p>
                <p>We try to list tools honestly and do not promote anything just for money.</p>
            </div>
           )},
        ],
      },
    ];

    const ownerConfig = isOwner ? [
        {
            title: "Owner Portal",
            icon: ShieldAlert,
            options: [
                { label: "Admin Dashboard", icon: LayoutDashboard, color: "text-primary font-bold", href: "/admin" },
            ]
        }
    ] : [];

    const settingsConfig = [...ownerConfig, ...baseConfig];

    const handleToggle = (label: string, checked: boolean) => {
        switch (label) {
            case t('settings.privacy.analytics'):
              setAnalyticsEnabled(checked);
              break;
            case t('settings.notifications.push'):
              setPushEnabled(checked);
              break;
            case t('settings.notifications.email'):
              setEmailEnabled(checked);
              break;
            case t('settings.notifications.mute'):
              setMuteAll(checked);
              if (checked) {
                setPushEnabled(false);
                setEmailEnabled(false);
              }
              break;
            default:
              break;
          }
      };

  return (
    <div className="p-4 animate-fade-in-up pb-24">
       <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                        <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                        <AvatarFallback>{user?.displayName?.charAt(0) || user?.email?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {isOwner && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full p-1 shadow-md border-2 border-white">
                            <Crown className="w-4 h-4 fill-current" />
                        </div>
                    )}
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold">{user?.displayName || 'Community Member'}</h1>
                        {isOwner && <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px] h-5 px-1.5 uppercase font-black">Owner</Badge>}
                    </div>
                    <p className="text-muted-foreground">{user?.email}</p>
                </div>
            </div>
            
            <div className="relative">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 bg-white/50 backdrop-blur-sm shadow-sm transition-transform active:scale-95">
                            <Bell className="w-6 h-6 text-foreground" />
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-sm rounded-3xl h-[70vh] flex flex-col">
                        <DialogHeader>
                            <DialogTitle>Notifications</DialogTitle>
                        </DialogHeader>
                        <div className="flex-grow overflow-y-auto space-y-3 py-2">
                            {notifications?.length === 0 ? (
                                <div className="text-center py-12 text-muted-foreground">
                                    <Bell className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>No notifications yet.</p>
                                </div>
                            ) : (
                                notifications?.map((n) => (
                                    <Card key={n.id} className={`p-4 rounded-2xl border-none shadow-sm relative group ${!n.read ? 'bg-primary/5' : 'bg-secondary/20'}`}>
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className={`font-bold text-sm ${!n.read ? 'text-primary' : 'text-foreground'}`}>{n.title}</h4>
                                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {!n.read && (
                                                    <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => markAsRead(n.id)}>
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    </Button>
                                                )}
                                                <button onClick={() => deleteNotification(n.id)} className="text-muted-foreground hover:text-destructive">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-xs leading-relaxed text-muted-foreground">{n.message}</p>
                                        <p className="text-[9px] text-muted-foreground/60 mt-2 font-medium">
                                            {n.createdAt?.toDate ? format(n.createdAt.toDate(), 'MMM d, p') : 'Just now'}
                                        </p>
                                    </Card>
                                ))
                            )}
                        </div>
                    </DialogContent>
                </Dialog>
                {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground border-2 border-white shadow-sm animate-in zoom-in-50 duration-300 pointer-events-none">
                        {unreadCount}
                    </span>
                )}
            </div>
        </div>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
        {settingsConfig.map((category, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-b-0 mb-3 bg-card/80 backdrop-blur-sm rounded-3xl px-4 soft-shadow">
            <AccordionTrigger className="py-4 hover:no-underline">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${isOwner && index === 0 ? 'bg-primary/10' : 'bg-gradient-to-br from-lavender to-soft-blue'} flex items-center justify-center`}>
                    <category.icon className={`w-7 h-7 ${isOwner && index === 0 ? 'text-primary' : 'text-primary'}`} />
                </div>
                <span className="font-semibold text-lg text-foreground">{category.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-1">
              {category.options.map((option, i) => {
                let componentToRender;
                if (option.component === 'font') {
                    componentToRender = <FontSizeSelector />;
                } else if (option.component === 'language') {
                    componentToRender = <LanguageSelector />;
                } else {
                    componentToRender = option.component;
                }

                const isSwitch = option.control === 'switch';
                let isChecked;
                switch (option.label) {
                    case t('settings.privacy.analytics'):
                        isChecked = analyticsEnabled;
                        break;
                    case t('settings.notifications.push'):
                        isChecked = pushEnabled && !muteAll;
                        break;
                    case t('settings.notifications.email'):
                        isChecked = emailEnabled && !muteAll;
                        break;
                    case t('settings.notifications.mute'):
                        isChecked = muteAll;
                        break;
                    default:
                        isChecked = option.checked;
                        break;
                }
                
                const itemContent = (
                    <SettingItem 
                        option={option} 
                        isChecked={isSwitch ? isChecked : undefined}
                        onToggle={isSwitch ? (checked) => handleToggle(option.label, checked) : undefined}
                    />
                );

                if (option.href) {
                  return (
                    <div key={i}>
                      <Link href={option.href} className="block">
                        {itemContent}
                      </Link>
                      {i < category.options.length - 1 && <Separator className="bg-border/50"/>}
                    </div>
                  );
                }


                return (
                    <div key={i}>
                    {option.isDialog ? (
                        <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <button className="w-full">
                                <SettingItem option={option} />
                            </button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                            <AlertDialogTitle>{option.label}</AlertDialogTitle>
                            </AlertDialogHeader>
                            {componentToRender}
                             <AlertDialogFooter className="mt-4">
                              <AlertDialogCancel>Close</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                        </AlertDialog>
                    ) : componentToRender ? (
                        <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value={`option-${i}`} className="border-b-0">
                            <AccordionTrigger className="hover:no-underline">
                            <SettingItem option={option} />
                            </AccordionTrigger>
                            <AccordionContent className="pb-4">
                                {componentToRender}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    ) : (
                        <>
                        {itemContent}
                        {i < category.options.length - 1 && <Separator className="bg-border/50"/>}
                        </>
                    )}
                    </div>
              )})}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
        <div className="mt-8">
            <Button variant="outline" className="w-full bg-card/80" onClick={handleSignOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
        </div>
    </div>
  )
}

const SettingItem = ({ option, onToggle, isChecked }: { option: any; onToggle?: (checked: boolean) => void; isChecked?: boolean }) => (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <option.icon className={`w-6 h-6 text-muted-foreground ${option.color || ""}`} />
        <span className={`text-base ${option.color || "text-foreground"}`}>{option.label}</span>
      </div>
      <div className="flex items-center gap-3">
        {option.value && <span className="text-base text-muted-foreground">{option.value}</span>}
        {option.control === "switch" ? (
          <Switch defaultChecked={option.checked} onCheckedChange={onToggle} checked={isChecked} />
        ) : (
           (option.isDialog || option.component || option.href) && <ChevronRight className="w-5 h-5 text-muted-foreground" />
        )}
      </div>
    </div>
  );
