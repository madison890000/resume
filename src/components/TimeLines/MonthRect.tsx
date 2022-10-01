import React from 'react';

const MonthRect = ({
                       gap = 2,
                       color,
                       index,
                       width = 20,
                   }: {
    index: number;
    width?: number
    color?: string;
    gap?: number;
}) => {
    return (
        <rect width={width} height="10" x={index * (width + gap)} y="5"
              fill={color}></rect>
    )
}

export default MonthRect
