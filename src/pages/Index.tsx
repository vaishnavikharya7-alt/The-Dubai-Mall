import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Users, TrendingUp, Globe, Play, Calendar, Mail, ChevronDown, Plus, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import heroImg from "@/assets/hero-dubai.jpg";
import retailImg from "@/assets/retail.jpg";
import luxuryImg from "@/assets/luxury.jpg";
import diningImg from "@/assets/dining.jpg";
import aquariumImg from "@/assets/aquarium.jpg";
import iceImg from "@/assets/icerink.jpg";
import vrImg from "@/assets/vr.jpg";
import eventsImg from "@/assets/events.jpg";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "why", label: "Why" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "attractions", label: "Attractions" },
  { id: "events", label: "Events" },
  { id: "partner", label: "Partner" },
];