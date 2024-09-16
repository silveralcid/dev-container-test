declare global {
    interface Window {
        Telegram: {
            WebApp: {
                ready: () => void;
                MainButton: {
                    setText: (text: string) => void;
                    onClick: (callback: () => void) => void;
                    show: () => void;
                };
                sendData: (data: string) => void;
            };
        };
    }
}

export { };
