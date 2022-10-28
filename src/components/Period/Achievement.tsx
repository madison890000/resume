import Tag from '../Tag';
import React from 'react';
import StringWithID from '../../models/StringWithID';
import capitalize from '../../utils/capitalize';

interface AchievementProps {
    title: string;
    categories: StringWithID[];
}

const Achievement = ({ title, categories }: AchievementProps) => (
    <li>
        {capitalize(title)}
        <span>
            {categories?.map(c => (
                <Tag key={c.id}>{c.toString()}</Tag>
            ))}
        </span>
    </li>
);

export default Achievement;
