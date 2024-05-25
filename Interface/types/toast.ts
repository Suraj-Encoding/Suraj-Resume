import { Theme } from 'react-toastify';

// # Toast Type
export interface Toast {
    className: string;
    style: { color: string };
    theme: Theme;
}