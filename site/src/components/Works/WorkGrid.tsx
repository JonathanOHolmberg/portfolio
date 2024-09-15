"use client";

import React from 'react';

import Grid from '@/components/Grid';

import { Eye } from '@/components/icons/Eye';

import '@/styles/pages/works.css';

interface Work {
  id: string;
  category: string;
  type: string | null;
  title: string;
  description: string;
  imageUrl: string;
  timestamp: string;
  link: string;
}

const mockWorks: Work[] = [
  {
    id: '01',
    category: "DEV",
    type: "Featured",
    title: "API's",
    description: "A closer look at view API's.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '02',
    category: "DEV",
    type: null,
    title: "A11Y",
    description: "Pareto principle applied to web accessibility.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '03',
    category: "DEV",
    type: null,
    title: "PARALLAX",
    description: "Scroll-based animations.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '04',
    category: "ART",
    type: null,
    title: "TYPOGRAPHY",
    description: "Playing with numbers.",
    imageUrl: "/Zerotofive.svg",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '05',
    category: "ART",
    type: null,
    title: "TYPOGRAPHY",
    description: "Emulating fire.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '06',
    category: "DEV",
    type: null,
    title: "CSS STATE",
    description: "Using CSS to manage UI.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '07',
    category: "WEB",
    type: null,
    title: "HOTKEY TRAINER",
    description: "Develop muscle memory.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
  {
    id: '08',
    category: "WEB",
    type: null,
    title: "STATISTICS",
    description: "Storytelling with data.",
    imageUrl: "https://via.placeholder.com/800x400",
    timestamp: "2023-04-15",
    link: "https://example.com/featured"
  },
];

const WorkGrid: React.FC = () => {
  return (
    <Grid items={mockWorks} icon={<Eye />} />
  );
}

export default WorkGrid;