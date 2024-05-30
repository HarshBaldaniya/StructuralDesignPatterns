import { IMediaDisplay } from "./IMediaDisplay";

// Legacy Video System
class LegacyVideoSystem {
    playOldVideo(description: string): void {
        console.log(`Playing classic video: ${description}`);
    }
}

// Adapter for new displays
export class VideoAdapter implements IMediaDisplay {
    private oldVideoSystem: LegacyVideoSystem;

    constructor() {
        this.oldVideoSystem = new LegacyVideoSystem();
    }

    display(): void {
        this.oldVideoSystem.playOldVideo("Sneezing Panda");
    }
}