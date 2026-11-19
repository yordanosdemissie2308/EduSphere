import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  LayoutDashboard,
  Library,
  MessageSquare,
  Plus,
  UserCheck,
  Users,
} from "lucide-react";
import type { Role } from "./types";

export const roleNav: Record<Role, { label: string; icon: LucideIcon }[]> = {
  "School Admin": [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Students", icon: GraduationCap },
    { label: "Teachers & Staff", icon: Users },
    { label: "Admissions", icon: UserCheck },
    { label: "Classes & Sections", icon: BookOpen },
    { label: "Attendance", icon: ClipboardCheck },
    { label: "Examinations", icon: FileText },
    { label: "Timetable", icon: CalendarDays },
    { label: "Finance & Fees", icon: CreditCard },
    { label: "Learning", icon: Library },
    { label: "Communication", icon: MessageSquare },
    { label: "Reports", icon: BarChart3 },
  ],
  Teacher: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Classes", icon: BookOpen },
    { label: "My Students", icon: Users },
    { label: "Attendance", icon: ClipboardCheck },
    { label: "Assignments", icon: FileText },
    { label: "Learning Materials", icon: Library },
    { label: "Grade Management", icon: BarChart3 },
    { label: "Timetable", icon: CalendarDays },
    { label: "Messages", icon: MessageSquare },
  ],
  Student: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Courses", icon: BookOpen },
    { label: "Learning Materials", icon: Library },
    { label: "Assignments", icon: FileText },
    { label: "My Results", icon: BarChart3 },
    { label: "Attendance", icon: ClipboardCheck },
    { label: "Timetable", icon: CalendarDays },
    { label: "Messages", icon: MessageSquare },
  ],
  Parent: [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "My Children", icon: Users },
    { label: "Academic Performance", icon: BarChart3 },
    { label: "Attendance", icon: ClipboardCheck },
    { label: "Assignments", icon: FileText },
    { label: "School Fees", icon: CreditCard },
    { label: "Announcements", icon: Bell },
    { label: "Messages", icon: MessageSquare },
  ],
  "Super Admin": [
    { label: "Overview", icon: LayoutDashboard },
    { label: "Schools", icon: Home },
    { label: "School Registration", icon: Plus },
    { label: "Subscriptions", icon: CreditCard },
    { label: "Platform Users", icon: Users },
    { label: "Payments", icon: CreditCard },
    { label: "Reports & Analytics", icon: BarChart3 },
    { label: "Support", icon: MessageSquare },
  ],
};

export const roleNames: Record<Role, string> = {
  "School Admin": "Meron Assefa",
  Teacher: "Samrawit Bekele",
  Student: "Liya Tesfaye",
  Parent: "Tesfaye Bekele",
  "Super Admin": "Dawit Getachew",
};

export const students = [
  { name: "Liya Tesfaye", id: "ST-24018", grade: "Grade 10 • A", parent: "Tesfaye Bekele", attendance: "96%", status: "Active", initials: "LT" },
  { name: "Nathan Yohannes", id: "ST-24024", grade: "Grade 8 • B", parent: "Yohannes Tadesse", attendance: "93%", status: "Active", initials: "NY" },
  { name: "Hana Dawit", id: "ST-24031", grade: "Grade 12 • A", parent: "Dawit Meles", attendance: "98%", status: "Active", initials: "HD" },
  { name: "Kaleb Samuel", id: "ST-24042", grade: "Grade 6 • C", parent: "Samuel Girma", attendance: "89%", status: "Review", initials: "KS" },
  { name: "Mahi Solomon", id: "ST-24051", grade: "Grade 9 • A", parent: "Solomon Abebe", attendance: "95%", status: "Active", initials: "MS" },
];
