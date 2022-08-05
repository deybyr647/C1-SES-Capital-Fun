import {random} from "./Util";
import firestore from "./FirebaseConfig";

class User {
    static types = ["Silver", "Platinum"];

    constructor(name, email, financeGoal) {
        this.name = {
            first: name.first,
            last: name.last
        };
        this.email = email;
        this.financeGoal = financeGoal;
        this.streak = random(0, 10);
        this.totalPoints = random(250, 1000);
        this.communities = this.generateCommunitiesList();
        this.missions = this.generateMissionList();
        this.financeInfo = this.generateFinanceInfo();
    }

    generateCommunitiesList(){
        const communities = new Array(5);
        communities.fill(undefined);
        Object.seal(communities);
        return communities;
    }

    async generateMissionList() {
        const missionCollection = firestore.collection("missions");
        const userMissionList = [];

        try {
            const allMissions = await missionCollection.get();

            for(const mission of allMissions.docs){
                let userMission = {
                    isComplete: false,
                    missionRef: `/missions/${mission.id}`
                }

                userMissionList.push(userMission);
            }

            return userMissionList;

        } catch(err){
            console.error(err);
            return [];
        }
    }

    generateFinanceInfo() {
        return {
            accountNumber: random(1111111111111111, 9999999999999999),
            balance: random(500, 2000) + (random(0, 99) / 100),
            creditScore: random(300, 850),
            type: User.types[random(0, User.types.length - 1)]
        };
    }
}

export default User;