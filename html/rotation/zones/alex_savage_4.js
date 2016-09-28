(function () {
    var manipulator = {
        fightId: "A4S",
        bossName: "Manipulator",
        minHP: 10000,
        startLog: "The Manipulator uses Hydrothermal Missile",
        phases: [
            {
                title: "Phase 1 (right hindleg)",
                shortName: "P1",
                phaseIdx: 1,
                loop: true,
                loopSeconds: 90,
                // Need multiple legs here?
                endLog: "The right hindleg is shattered",
                rotation: [
                    { name: "Hydrothermal Missile", time: 0 },
                    { name: "Discoid", time: 5 },
                    { name: "Seed of the Sky", time: 10 },
                    { name: "Seed of the Sky", time: 15 },
                    { name: "Hydrothermal Missile", time: 17 },
                    { name: "(stun)", time: 22 },
                    { name: "Perpetual Ray", time: 27 },
                    { name: "Quarantine", time: 35 },
                    { name: "Hydrothermal Missile", time: 42 },
                    { name: "Discoid", time: 45 },
                    { name: "Seed of the Sky", time: 50 },
                    { name: "Seed of the Sky / stun", time: 55 },
                    { name: "Perpetual Ray", time: 59 },
                    { name: "(leg dead?)", time: 75 },
                    { name: "Hydrothermal Missile", time: 75 },
                ],
            },
            {
                title: "Phase 2 (left hindleg)",
                shortName: "P2",
                phaseIdx: 2,
                loop: true,
                loopOffset: -22, // ?
                loopSeconds: 137, // ?
                endLog: "The left hindleg is shattered",
                rotation: [
                    { name: "Mortal Revolution #1", time: -2 },
                    { name: "Quarantine", time: 5 },
                    { name: "Carnage", time: 15 },
                    { name: "Hydrothermal Missile", time: 21 },
                    { name: "(stun)", time: 22 },
                    { name: "Perpetual Ray", time: 28 },
                    { name: "Carnage", time: 38 },
                    { name: "Seed of the Sky + Missile", time: 45 },
                    { name: "Quarantine", time: 53 },
                    { name: "(stun)", time: 60 },
                    { name: "Perpetual Ray", time: 65 },
                    { name: "Hydrothermal Missile", time: 73 },
                    { name: "Carnage", time: 75 },
                    { name: "Seed of the Sky", time: 83 },
                    { name: "(leg dead?)", time: 98 },
                    { name: "Hydrothermal Missile", time: 98 },
                ],
            },
            {
                title: "Phase 3 (left foreleg)",
                shortName: "P3",
                phaseIdx: 3,
                loopOffset: -22, // ?
                loop: false,
                endLog: "The left foreleg is shattered",
                rotation: [
                    { name: "Mortal Revolution #2", time: -2 },
                    { name: "Hydrothermal Missile", time: 3 },
                    { name: "Carnage", time: 6 },
                    { name: "(dolls)", time: 17 },
                    { name: "Kaltstrahl", time: 25 },
                    { name: "(stun)", time: 27 },
                    { name: "Ray + Kalt", time: 33 },
                    { name: "Seed + Kalt", time: 41 },
                    { name: "Hydrothermal Missile", time: 42 },
                    { name: "Carnage", time: 46 },
                    { name: "Wirbelwind", time: 48 },
                    { name: "(stun)", time: 55 },
                    { name: "Perpetual Ray", time: 61 },
                    { name: "(leg dead?)", time: 86 },
                    { name: "(dolls)", time: 86 },
                    { name: "Kaltstrahl", time: 94 },
                    { name: "Seed of the Sky", time: 98 },
                    { name: "Carnage", time: 100 },
                    { name: "Kaltstrahl", time: 102 },
                    { name: "Seed of the Sky", time: 108 },
                    { name: "Kaltstrahl", time: 110 },
                    { name: "Wirble + stun", time: 117 },
                    { name: "Perpetual Ray", time: 123 },
                ],
            },
            {
                title: "Phase 4 (right foreleg)",
                shortName: "P4",
                phaseIdx: 4,
                loop: true,
                loopOffset: -22, // ?
                loopSeconds: 127, // ?
                endLog: "The right foreleg is shattered",
                rotation: [
                    { name: "Mortal Revolution #3", time: -2 },
                    { name: "Judgement Nisi", time: 2 },
                    { name: "(dolls)", time: 14 },
                    { name: "(stun)", time: 17 },
                    { name: "Perpetual Ray", time: 21 },
                    { name: "Kaltstrahl", time: 22 },
                    { name: "Seed of the Sky", time: 29 },
                    { name: "Kaltstrahl", time: 30 },
                    { name: "Missile + Kalt", time: 39 },
                    { name: "Wirbelwind", time: 46 },
                    { name: "Discoid", time: 47 },
                    { name: "Seed of the Sky", time: 56 },
                    { name: "Seed of the Sky", time: 61 },
                    { name: "Hydrothermal Missile", time: 66 },
                    { name: "(dolls)", time: 77 },
                    { name: "(stun)", time: 81 },
                    { name: "Perpetual Ray", time: 85 },
                    { name: "Kaltstrahl", time: 86 },
                    { name: "Missile + Kalt", time: 95 },
                    { name: "Discoid", time: 96 },
                    { name: "Kaltstrahl", time: 103 },
                    { name: "Seed of the Sky", time: 106 },
                    { name: "Wirbelwind", time: 109 },
                    { name: "Seed of the Sky", time: 111 },
                    { name: "Hydrothermal Missile", time: 120 },
                    { name: "(leg dead?)", time: 125 },
                ],
            },
            {
                title: "Phase 5 (manipulator)",
                shortName: "P5",
                loopOffset: -22,
		loop: true,
                loopSeconds: 127, // ?
                phaseIdx: 5,
                rotation: [
                    { name: "Mortal Revolution #4", time: -2 },
                    { name: "Carnage Zero", time: 5 },
                    { name: "Discoid", time: 14 },
                    { name: "Seed of the Sky", time: 25 },
                    { name: "Hydrothermal Missile", time: 30 },
                    { name: "Carnage Zero", time: 32 },
                    { name: "Royal Pentacle", time: 45 },
                    { name: "Hydrothermal Missile", time: 60 },
                    { name: "Carnage", time: 75 },
                    { name: "(dolls)", time: 90 },
                    { name: "Hydrothermal Missile", time: 92 },
                    { name: "Carnage Zero / Seed", time: 94 },
                    { name: "Kahlstrahl", time: 98 },
                    { name: "Kahlstrahl", time: 106 },
                    { name: "Carnage Zero", time: 110 },
                    { name: "Kahlstrahl", time: 114 },
                    { name: "Wirbelwind", time: 122 },
                    { name: "Hydrothermal Missile", time: 123},
                ],
            },
        ],
    };

    var AlexanderSavageTurn4 = function () {
        BaseTickable.apply(this, arguments);
        this.zoneFilter = "Alexander - The Burden Of The Father (Savage)";
        this.bosses = [manipulator];
    };
    AlexanderSavageTurn4.prototype = new BaseTickable;
    cb.updateRegistrar.register(new AlexanderSavageTurn4());
})();