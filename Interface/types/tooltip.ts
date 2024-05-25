import { Place, Offset } from 'react-tooltip';

// # Tooltip Type
export interface ToolTip {
    show?: boolean;
    rank?: number;
    id: string;
    place: Place;
    offset: Offset;
    text: string;
}
