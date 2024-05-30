import { IMediaDisplay } from "./IMediaDisplay";

interface ContentSource {
    getContent(): string;
}

export class FactSource implements ContentSource {
    getContent(): string {
        return "Educational content about animal behaviors";
    }
}

export class FunFactSource implements ContentSource {
    getContent(): string {
        return "Fun facts about animal diets";
    }
}

// Media Viewer
export class ContentViewer implements IMediaDisplay {
    private source: ContentSource;

    constructor(source: ContentSource) {
        this.source = source;
    }

    display(): void {
        console.log(`Displaying: ${this.source.getContent()}`);
    }
}