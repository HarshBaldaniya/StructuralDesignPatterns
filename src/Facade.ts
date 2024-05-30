import { IMediaDisplay } from "./IMediaDisplay";

class HabitatVideo implements IMediaDisplay {
    display(): void {
        console.log("Displaying habitat overview...");
    }
}

class AnimalSounds implements IMediaDisplay {
    display(): void {
        console.log("Playing ambient animal sounds...");
    }
}

// Facade to simplify media control
export class HabitatFacade implements IMediaDisplay {
    private video: HabitatVideo;
    private sounds: AnimalSounds;

    constructor() {
        this.video = new HabitatVideo();
        this.sounds = new AnimalSounds();
    }

    display(): void {
        this.video.display();
        this.sounds.display();
    }
}