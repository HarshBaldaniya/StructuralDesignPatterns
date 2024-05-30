import { IMediaDisplay } from "./IMediaDisplay";

export class BasicDisplay implements IMediaDisplay {
    display(): void {
        console.log("Displaying basic info...");
    }
}

// Decorator for additional features
export class InfoDecorator implements IMediaDisplay {
    protected inner: IMediaDisplay;

    constructor(display: IMediaDisplay) {
        this.inner = display;
    }

    display(): void {
        this.inner.display();
        console.log("Adding interactive quiz about the display...");
    }
}