import React from 'react';
import { IconType } from "react-icons";

export interface SectionHeadingProps {
    badge?: string;
    title: React.ReactNode;
    subtitle?: string;
    description?: string;
    center?: boolean;
    linkHref?: string;
    linkText?: string;
    rightContent?: React.ReactNode;
}

export interface BookingFormProps {
    item: any;
    type: string;
    onClose: () => void;
    status?: 'idle' | 'loading' | 'success' | 'error';
    setStatus?: React.Dispatch<React.SetStateAction<'idle' | 'loading' | 'success' | 'error'>>;
}

export type PageBannerProps = {
    title: string | React.ReactNode;
    subtitle?: string;
    badge?: string;
    badgeIcon?: IconType;
    image: string;
    description?: string;
    height?: string;
    overlayOpacity?: string;
    children?: React.ReactNode;
    showBreadcrumbs?: boolean;
};
