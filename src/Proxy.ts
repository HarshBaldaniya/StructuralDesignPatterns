import { IMediaDisplay } from "./IMediaDisplay";

// Real Media Player
class ExclusiveVideoPlayer implements IMediaDisplay {
    display(): void {
        console.log("Displaying exclusive video: Dancing Lemurs");
    }
}

// Proxy to check if it's night time
export class NightTimeVideoProxy implements IMediaDisplay {
    private realPlayer: ExclusiveVideoPlayer;

    constructor() {
        this.realPlayer = new ExclusiveVideoPlayer();
    }

    display(): void {
        console.log("Checking if it's night time to show nocturnal animals...");
        this.realPlayer.display();
    }
} 