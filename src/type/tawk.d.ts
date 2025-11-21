declare global {
    interface Window {
        Tawk_API?: {
            hideWidget: () => void;
            showWidget: () => void;
            maximize: () => void;
            minimize: () => void;
            toggle: () => void;
            setAttributes: (attributes: Record<string, any>, callback?: (error: any) => void) => void;
            onLoad?: () => void;
            onStatusChange?: (status: string) => void;
        };
        Tawk_LoadStart?: Date;
    }
}

export {};