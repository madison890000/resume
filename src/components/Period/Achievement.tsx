import Tag from '../Tag';
import React from 'react';

interface AchievementProps {
    title: string;
    categories: string[];
}

const Achievement = ({ title, categories }: AchievementProps) => (
    <li>
        {title}
        <span>
            {categories?.map(c => (
                <Tag>{c}</Tag>
            ))}
        </span>
    </li>
);

export default Achievement;
