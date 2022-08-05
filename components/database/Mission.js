import { random } from "./Util";
import { firestore } from "./FirebaseConfig";

class Mission {
    static types = ["Silver", "Platinum"];

    constructor(description) {
        this.description = description;
        this.points = random(500, 1500);
        this.type = Mission.types[random(0, Mission.types.length - 1)];
    }

    static toFirestore(mission) {
        return {
            description: mission.description,
            points: mission.points,
            type: mission.type
        }
    }
}