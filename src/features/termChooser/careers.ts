export interface Career {
  name: string
  preCareer: boolean
  qualification: Qualification
  assignments: Array<Assignment>
}

export interface SkillTable {
  basic: boolean
  assignment: string
  items: Array<Item>
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
        assignment: "any",
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
        assignment: {
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
        assignment: {
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
        assignment: {
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
        assignment: {
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
        assignment: {
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
    mishaps: {
      1: {
        type: "injury",
        rollType: "double",
      },
      2: {
        type: "choice",
        choices: {
          1: {
            type: "injury",
            results: [
              {
                type: "none",
              },
            ],
          },
          2: {
            type: "choose",
            choices: {
              1: {
                results: null,
              },
              2: {
                results: [
                  {
                    type: "injury",
                    rollType: "double",
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
              },
            },
          },
        },
      },
      3: {
        type: "roll",
        rolltype: "skill",
        name: "Advocate",
        results: {
          2: {
            type: "career",
            name: "Prisoner",
          },
          8: {
            type: "benefit",
          },
        },
      },
      4: {
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
      },
      5: {
        type: "descriptive",
        results:
          "Roll twice on the injury table for a Contact, Ally or family member.",
      },
      6: {
        type: "injury",
        rollType: "normal",
      },
    },
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
