import { VideoAdapter } from "./Adapter";
import { NightTimeVideoProxy } from "./Proxy";
import { AnimalInfoFactory } from "./Flyweight";
import { HabitatFacade } from "./Facade";
import { ContentViewer, FactSource } from "./Bridge";
import { InfoDecorator, BasicDisplay } from "./Decorator";

// console.log("Adapter Pattern:");
// new VideoAdapter().display();

// console.log("\nProxy Pattern:");
// new NightTimeVideoProxy().display();

// console.log("\nFlyweight Pattern:");
// console.log(AnimalInfoFactory.getAnimalInfo("Giraffe"));
// console.log(AnimalInfoFactory.getAnimalInfo("Penguin"));

console.log("\nFacade Pattern:");
new HabitatFacade().display();

// console.log("\nBridge Pattern:");
// new ContentViewer(new FactSource()).display();

// console.log("\nDecorator Pattern:");
// new InfoDecorator(new BasicDisplay()).display();