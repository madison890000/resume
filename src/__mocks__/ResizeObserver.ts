class ResizeObserver {
    public callbacks: () => void;

    constructor(e: any) {
        this.callbacks = e;
        e?.();
    }

    observe() {
        // do nothing
    }

    unobserve() {
        // do nothing
    }

    disconnect() {
        // do nothing
    }
}
export default ResizeObserver;
