"use client";

import React from 'react';
import { ToolTip } from '@/Interface/types/tooltip';
import Tooltip from './Tooltip';

// # Create Tooltip Component
const createTooltip = ({ show, id, place, offset, text, rank = 4 }: ToolTip, index: number) => (
    show ? < Tooltip key={index} rank={rank} id={id} place={place} offset={offset} text={text} /> : null
);

export default createTooltip;
