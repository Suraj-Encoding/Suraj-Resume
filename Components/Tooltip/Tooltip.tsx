"use client";

import React from "react";
import { ToolTip } from '../../Interface/types/tooltip';
import ReactTooltip from 'react-tooltip';
import './Tooltip.css';

// # Tooltip Component
const Tooltip = ({ rank, id, place, offset, text }: ToolTip) => {

    // # Tooltip Logic
    let color;
    let className;
    if (rank == 1) {
        color = "#e8e8e8";
        className = "tooltip";
    }
    else if (rank == 2) {
        color = "#e0e7ff";
        className = "blue-tooltip";
    }
    else if (rank == 3) {
        color = "#d1fae5";
        className = "success-tooltip";
    }
    else {
        color = "#ffe4e6";
        className = "red-tooltip";
    }
    return (
        <>
            {(rank === 1 || rank === 2) ? (
                <ReactTooltip
                    id={id}
                    effect="solid"
                    place={place}
                    offset={offset}
                    arrowColor={color}
                    className={className}
                >
                    {text}
                </ReactTooltip>
            ) : (
                <ReactTooltip
                    id={id}
                    effect="solid"
                    place={place}
                    offset={offset}
                    arrowColor={color}
                    className={className}
                >
                    {rank === 3 ?
                        <>
                            {text} <strong> Detected </strong>
                            <span className="text-indigo-500"> * </span>
                        </>
                        :
                        <>
                            {text} <strong> Required </strong>
                            <span className="text-rose-500"> * </span>
                        </>
                    }
                </ReactTooltip>
            )}
        </>
    );
};

export default Tooltip;
