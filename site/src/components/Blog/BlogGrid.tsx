import React from 'react';

import Grid from '@/components/Grid';
import { Eye } from '../icons/Eye';


interface Blog {
    id: string;
    category: string;
    type: string | null;
    title: string;
    description: string;
    imageUrl: string;
    timestamp: string;
    link: string;
}
const mockBlogs: Blog[] = [
        {
          id: '01',
          category: "SITE",
          type: "Featured",
          title: "Introduction.",
          description: "This is the featured project that takes up the full width.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '02',
          category: "SITE",
          type: null,
          title: "Setup",
          description: "This is the featured project that takes up the full width.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '03',
          category: "SITE",
          type: null,
          title: "Stack",
          description: "This is the featured project that takes up the full width.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '04',
          category: "SITE",
          type: null,
          title: "Design",
          description: "This is the featured project that takes up the full width.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '05',
          category: "SITE",
          type: null,
          title: "Build",
          description: "This is the featured project that takes up the full width.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '06',
          category: "DEV",
          type: null,
          title: "API",
          description: "A closer look at IntersectionObserver, ResizeObserver and the View Transition API.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '07',
          category: "DEV",
          type: null,
          title: "ANIMATIONS",
          description: "The good, the bad and the ugly.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
          id: '08',
          category: "DESIGN",
          type: null,
          title: "ORDER",
          description: "Making the CSS and HTML choices.",
          imageUrl: "https://via.placeholder.com/800x400",
          timestamp: "2023-04-15",
          link: "https://example.com/featured"
        },
        {
            id: '09',
            category: "DESIGN",
            type: null,
            title: "CHAOS",
            description: "Making the CSS and HTML choices.",
            imageUrl: "https://via.placeholder.com/800x400",
            timestamp: "2023-04-15",
            link: "https://example.com/featured"
          },
      ];

const BlogGrid: React.FC = () => {
    return (
        <>
            <Grid items={mockBlogs} icon={<Eye />}/>
        </>
    );
}
export default BlogGrid ;