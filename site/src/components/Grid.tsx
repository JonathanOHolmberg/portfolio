import React from 'react';

import "@/styles/components/Components/grid.css"

interface Item {
    id: string;
    category: string;
    type: string | null;
    title: string;
    description: string;
    imageUrl: string;
    timestamp: string;
    link: string;
}

interface GridProps {
    items: Item[];
    icon: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ items, icon }) => {
    return (
            <div className="grid">
                {items.map((item, index) => (
                    <li key={index} className={`grid-item ${item?.type === "Featured" ? 'featured' : ''}`}>
                        <img src={item.imageUrl} alt={item.title} />
                        <span className="grid-item-header">
                            <h3><span data-id={item.id}>{item.category}</span>{item.title}</h3>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label="Open in new tab">
                                {icon}
                            </a>
                        </span>
                        <small>{item.description}</small>
                        <small>{item.timestamp}</small>
                    </li>
            )).reverse()}
        </div>
    );
}

export default Grid;