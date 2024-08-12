export interface Career {
  name: string
  preCareer: boolean
  qualification: Qualification
  assignments: Array<Assignment>
  officer: boolean
  skillTables: Array<SkillTable>
  mishaps: Array<Mishap>
  events: Array<Event>
}

export interface Event {
  roll: number
  type: string
  description: string
  // rolls?: Array<Roll>
  // failure?: Array<Fail>
  // success?: Array<Success>
  value?: number
  min?: number
  max?: number
  checkName?: string
  increaseType?: string
  increaseValue?: number
  choices?: Array<Choice>
}

export interface Mishap {
  roll: number
  type: "injury" | "injuryDouble" | "choice" | "test" | "gain"
  testType?: string
  name?: string
  choices?: Array<Choice>
  rollResults?: Array<Result>
  description?: String
}

export interface Choice {
  type: string
  name: string
  value: number
  career: string
  assignment: string
  results: Array<Bonus>
  description: string
}

export interface Result {
  value: number
  type: "stat" | "skill" | "benefit"
  name: string
}

export interface SkillTable {
  basic: boolean
  availability: string
  items: Array<TrainingItem>
}

export interface AvailabilityItem {
  type: "any" | "assignment" | "stat" | "officer"
  name: string
  value: number
}

export interface TrainingItem {
  type: "skill" | "stat"
  name: string
}

export interface Assignment {
  name: string
  survival: StatCheck
  advancement: StatCheck
  ranks: Array<Rank>
}

export interface Rank {
  rank: number
  name: string
  bonus: Bonus
}
export interface StatCheck {
  stat: string
  value: number
}

export interface Bonus {
  type: "none" | "stat" | "skill" | "benefit" | "benefitRoll"
  name?: string
  value?: number
}

export interface DiceModifier {
  type: string
  value: number
}

export interface Qualification {
  stat: string
  value: number
  dms: DiceModifier
}

export const careers = [
  {
    name: "Agent",
    preCareer: false,
    qualification: {
      stat: "INT",
      value: 6,
      dms: [
        {
          type: "previousCareer",
          value: -1,
        },
      ],
    },
    officer: false,
    assignments: [
      {
        name: "Law Enforcement",
        survival: {
          stat: "END",
          value: 6,
        },
        advancement: {
          stat: "INT",
          value: 6,
        },
        ranks: [
          {
            rank: 0,
            name: "Rookie",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 1,
            name: "Corporal",
            bonus: {
              type: "skill",
              name: "Streetwise",
              value: 1,
            },
          },
          {
            rank: 2,
            name: "Sergeant",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 3,
            name: "Detective",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 4,
            name: "Lieutenant",
            bonus: {
              type: "skill",
              name: "Investigate",
              value: 1,
            },
          },
          {
            rank: 5,
            name: "Chief",
            bonus: {
              type: "skill",
              name: "Admin",
              value: 1,
            },
          },
          {
            rank: 6,
            name: "Commissioner",
            bonus: {
              type: "stat",
              name: "SOC",
              value: 1,
            },
          },
        ],
      },
      {
        name: "Intelligence",
        survival: {
          stat: "INT",
          value: 7,
        },
        advancement: {
          stat: "INT",
          value: 5,
        },
        ranks: [
          {
            rank: 0,
            name: "-",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 1,
            name: "Agent",
            bonus: {
              type: "skill",
              name: "Deception",
              value: 1,
            },
          },
          {
            rank: 2,
            name: "Field Agent",
            bonus: {
              type: "skill",
              name: "Investigate",
              value: 1,
            },
          },
          {
            rank: 3,
            name: "Field Agent",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 4,
            name: "Special Agent",
            bonus: {
              type: "skill",
              name: "Gun Combat",
              value: 1,
            },
          },
          {
            rank: 5,
            name: "Assistant Director",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 6,
            name: "Director",
            bonus: {
              type: "none",
            },
          },
        ],
      },
      {
        name: "Corporate",
        survival: {
          stat: "INT",
          value: 5,
        },
        advancement: {
          stat: "INT",
          value: 7,
        },
        ranks: [
          {
            rank: 0,
            name: "-",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 1,
            name: "Agent",
            bonus: {
              type: "skill",
              name: "Deception",
              value: 1,
            },
          },
          {
            rank: 2,
            name: "Field Agent",
            bonus: {
              type: "skill",
              name: "Investigate",
              value: 1,
            },
          },
          {
            rank: 3,
            name: "Field Agent",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 4,
            name: "Special Agent",
            bonus: {
              type: "skill",
              name: "Gun Combat",
              value: 1,
            },
          },
          {
            rank: 5,
            name: "Assistant Director",
            bonus: {
              type: "none",
            },
          },
          {
            rank: 6,
            name: "Director",
            bonus: {
              type: "none",
            },
          },
        ],
      },
    ],
    skillTables: [
      {
        basic: false,
        availability: {
          type: "any",
        },
        items: {
          1: {
            type: "skill",
            name: "Gun Combat",
          },
          2: {
            type: "stat",
            name: "DEX",
          },
          3: {
            type: "stat",
            name: "END",
          },
          4: {
            type: "skill",
            name: "Melee",
          },
          5: {
            type: "stat",
            name: "INT",
          },
          6: {
            type: "skill",
            name: "Athletics",
          },
        },
      },
      {
        basic: true,
        availability: {
          type: "any",
        },
        items: {
          1: {
            type: "skill",
            name: "Streetwise",
          },
          2: {
            type: "skill",
            name: "Drive",
          },
          3: {
            type: "skill",
            name: "Investigate",
          },
          4: {
            type: "skill",
            name: "Flyer",
          },
          5: {
            type: "skill",
            name: "Recon",
          },
          6: {
            type: "skill",
            name: "Gun Combat",
          },
        },
      },
      {
        availability: {
          type: "stat",
          name: "EDU",
          value: 8,
        },
        item: {
          1: {
            type: "skill",
            name: "Advocate",
          },
          2: {
            type: "skill",
            name: "Language",
          },
          3: {
            type: "skill",
            name: "Explosives",
          },
          4: {
            type: "skill",
            name: "Medic",
          },
          5: {
            type: "skill",
            name: "Vacc Suit",
          },
          6: {
            type: "skill",
            name: "Electronics",
          },
        },
      },
      {
        availability: {
          type: "assignment",
          name: "law enforcement",
        },
        item: {
          1: {
            type: "skill",
            name: "Investigate",
          },
          2: {
            type: "skill",
            name: "Recon",
          },
          3: {
            type: "skill",
            name: "Streetwise",
          },
          4: {
            type: "skill",
            name: "Stealth",
          },
          5: {
            type: "skill",
            name: "Melee",
          },
          6: {
            type: "skill",
            name: "Advocate",
          },
        },
      },
      {
        availability: {
          type: "assignment",
          name: "intelligence",
        },
        item: {
          1: {
            type: "skill",
            name: "Investigate",
          },
          2: {
            type: "skill",
            name: "Recon",
          },
          3: {
            type: "skill",
            name: "Electronics (comms)",
          },
          4: {
            type: "skill",
            name: "Stealth",
          },
          5: {
            type: "skill",
            name: "Persuade",
          },
          6: {
            type: "skill",
            name: "Deception",
          },
        },
      },
      {
        availability: {
          type: "assignment",
          name: "corporate",
        },
        item: {
          1: {
            type: "skill",
            name: "Investigate",
          },
          2: {
            type: "skill",
            name: "Electronics (computers)",
          },
          3: {
            type: "skill",
            name: "Stealth",
          },
          4: {
            type: "skill",
            name: "Carouse",
          },
          5: {
            type: "skill",
            name: "Deception",
          },
          6: {
            type: "skill",
            name: "Streetwise",
          },
        },
      },
    ],
    mishaps: [
      {
        roll: 1,
        type: "injuryDouble",
        description: "Severely injured.",
      },
      {
        roll: 2,
        type: "choice",
        choices: [
          {
            results: [
              {
                type: null,
              },
            ],
            description:
              "Accept the deal and leave Agent without further consequence.",
          },
          {
            results: [
              {
                type: "injuryDouble",
              },
              {
                type: "benefit",
                name: "Enemy",
              },
              {
                type: "skill",
                name: "Any",
              },
            ],
            description: "",
          },
        ],
        description:
          "A criminal or other figure under investigation offers you a deal. Accept and leave this career without further penalty (though without gaining a Benefit). Refuse and you must roll twice on the injury table and take the lower result. You gain an Enemy and one level in any skill you choose.",
      },
      {
        roll: 3,
        type: "test",
        testType: "skill",
        name: "Advocate",
        rollResults: [
          {
            value: 8,
            type: "benefit",
          },
          {
            value: 3,
            type: null,
          },
          {
            value: 2,
            type: "career",
            name: "Prisoner",
          },
        ],
        description:
          "An investigation goes critically wrong or leads to the top, ruining your career. Roll Advocate 8+. If you succeed, you may keep the Benefit roll from this term. If you roll 2, you must take the Prisoner career in your next term.",
      },
      {
        roll: 4,
        type: "gain",
        results: [
          {
            type: "benefit",
            name: "Enemy",
          },
          {
            type: "skill",
            name: "Deception",
            value: 1,
          },
        ],
        description:
          "You learn something you should not know and people want to kill you for it. Gain an Enemy and Deception 1",
      },
      {
        roll: 5,
        type: null,
        description:
          "You work ends up coming home with you and someone gets hurt. Choose on of your Contacts, Allies or family members and roll twice on the injury table for them, taking the lower result.",
      },
      {
        roll: 6,
        type: "injury",
        description: "Injured. Roll on the injury table.",
      },
    ],
    events: [
      {
        roll: 2,
        type: "mishap",
        description:
          "Disaster! Roll on the Mishap table, but you are not ejected from this career.",
      },
      {
        roll: 3,
        type: "rollChoice",
        rolls: [
          {
            skill: "Investigate",
            success: 8,
          },
          {
            skill: "Streetwise",
            success: 8,
          },
        ],
        failure: "mishap",
        success: {
          type: "skill",
          choices: ["Deception", "Jack-of-all-Trades", "Persuade", "Tactics"],
        },
        description:
          "An investigation takes on a dangerous turn. Roll Investigate 8+ or Streetwise 8+. If you fail, roll on the Mishap table. If you succeed, increase one of these skills by one level: Deception, Jack-of-all-Trades, Persuade or Tactics.",
      },
      {
        roll: 4,
        type: "benefitDM",
        value: 1,
        description:
          "You complete a mission for your superiouds and are suitably rewarded. Gain DM+1 to any one Benefit roll from this career.",
      },
      {
        roll: 5,
        type: "benefitVariable",
        name: "Contact",
        min: 1,
        max: 3,
        description: "You establish a network of contacts. Gain D3 contacts.",
      },
      {
        roll: 6,
        type: "checkStatForIncrease",
        checkName: "EDU",
        value: 8,
        increaseType: "skillKnown",
        increaseValue: 1,
        description:
          "You are given advanced training in a specialist field. Roll EDU 8+ to increase any one skill you already have by one level.",
      },
      {
        roll: 7,
        type: "lifeEvent",
        description: "Life Event. Roll on the Life Events table.",
      },
      {
        roll: 8,
        type: "skillTest",
        name: "Deception",
        value: 8,
        failure: [
          {
            type: "foreignMishapRollChoice",
            choices: ["Rogue", "Citizen"],
          },
        ],
        success: [
          {
            type: "foreignEventRollChoice",
            choices: ["Rogue", "Citizen"],
          },
          {
            type: "foreignSkillRollChoice",
            choices: [
              {
                career: "Rogue",
                assignments: ["Thief", "Enforcer", "Pirate"],
              },
              {
                career: "Citizen",
                assignments: ["Corporate", "Worker", "Colonist"],
              },
            ],
          },
        ],
        description:
          "You go undercover to investigate an enemy. Roll Deception 8+. If you succeed, roll immediately on the ROgue or Citizen Events table and make one roll on any specialist skil table for that career. If you fail, roll immediately on the Rogue or Citizen Mishap Table.",
      },
      {
        roll: 9,
        type: "advancementDM",
        value: 2,
        description:
          "You go above and beyond the call of duty. Gain DM+2 to your next advancement roll.",
      },
      {
        roll: 10,
        type: "skillChoice",
        choices: [
          {
            name: "Drive",
            value: 1,
          },
          {
            name: "Flyer",
            value: 1,
          },
          {
            name: "Pilot",
            value: 1,
          },
          {
            name: "Gunner",
            value: 1,
          },
        ],
        description:
          "You are given specialist training in vehicles. Either increase Investigate by one level or DM+4 to an advancement roll thanks to their aid.",
      },
      {
        roll: 11,
        type: "openChoice",
        choices: [
          {
            type: "skill",
            name: "any",
          },
          {
            type: "advancementDM",
            value: 4,
          },
        ],
        description:
          "You are befriended by a senior agent. Either increase Investigate by one level or DM+4 to an advancement roll thanks to their aid.",
      },
      {
        roll: 12,
        type: "promotion",
        description:
          "Your efforts uncover a major conspiracy against your employers. You are automatically promoted.",
      },
    ],
  },

  // Citizen: {},
  // Drifter: {},
  // Entertainer: {},
  // Marine: {},
  // Merchant: {},
  // "Military Academy": {},
  // Navy: {},
  // Noble: {},
  // Psion: {},
  // Rogue: {},
  // Scholar: {},
  // Scout: {},
  // University: {},
]
