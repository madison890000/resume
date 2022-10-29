import React from 'react';

const MonthRect = ({ gap, color, index, width }: { index: number; width: number; color?: string; gap: number }) => {
    return <rect width={width} height="10" x={index * (width + gap)} y="5" fill={color} />;
};

export default MonthRect;
