export class AnimalInfoFactory {
    private static infoCache: {[species: string]: string} = {};

    static getAnimalInfo(species: string): string {
        if (!this.infoCache[species]) {
            this.infoCache[species] = `Fascinating facts about ${species}`;
            console.log(`Creating info panel for: ${species}`);
        }
        return this.infoCache[species];
    }
}