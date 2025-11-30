type EventOptions = {
    callback?: () => void;
    props?: Record<string, string | number | boolean>;
};

declare global {
    interface Window {
        plausible: (eventName: string, options?: EventOptions) => void;
    }
}

export const trackEvent = (eventName: string, props?: Record<string, string | number | boolean>) => {
    if (typeof window !== 'undefined' && window.plausible) {
        window.plausible(eventName, { props });
    } else {
        console.log(`[Plausible] Event: ${eventName}`, props);
    }
};
