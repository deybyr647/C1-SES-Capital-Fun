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
        this.lastLogin = this.generateTimestamp();
    }

    generateCommunitiesList() {
        const communities = new Array(5);
        communities.fill(undefined);
        Object.seal(communities);
        return communities;
    }

    generateMissionList() {
        const missionCollection = firestore.collection("missions");
        let userMissionList = [];

        missionCollection.get()
            .then(snapshot => {
                snapshot.forEach(mission => {
                    let userMission = {
                        isComplete: false,
                        missionRef: `/missions/${mission.id}`
                    }

                    userMissionList.push(userMission);
                })

                //console.log(userMissionList);
            })
            .catch(error => {
                console.error("An error occurred...", error);
            });

        return userMissionList;
    }

    generateFinanceInfo() {
        return {
            accountNumber: random(1111111111111111, 9999999999999999),
            balance: random(500, 2000) + (random(0, 99) / 100),
            creditScore: random(300, 850),
            type: User.types[random(0, User.types.length - 1)]
        };
    }

    generateTimestamp() {
        let timestamp = Date.now();
        return new Date(timestamp).toString();
    }
}

export default User;