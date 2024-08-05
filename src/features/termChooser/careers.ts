export const careers = [
  {
    name: "Agent",
    preCareer: false,
    qualification: {
      stat: "INT",
      value: 6,
      dms: [
        {
          type: "previous",
          value: 1,
          sign: "negative",
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
        ranks: {
          0: {
            name: "Rookie",
            bonus: {
              type: "none",
            },
          },
          1: {
            rank: 1,
            name: "Corporal",
            bonus: {
              type: "skill",
              name: "Streetwise",
              value: 1,
            },
          },
          2: {
            name: "Sergeant",
            bonus: {
              type: "none",
            },
          },
          3: {
            name: "Detective",
            bonus: {
              type: "none",
            },
          },
          4: {
            name: "Lieutenant",
            bonus: {
              type: "skill",
              name: "Investigate",
              value: 1,
            },
          },
          5: {
            name: "Chief",
            bonus: {
              type: "skill",
              name: "Admin",
              value: 1,
            },
          },
          6: {
            name: "Commissioner",
            bonus: {
              type: "stat",
              name: "SOC",
              value: 1,
            },
          },
        },
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
        ranks: {
          0: {
            name: "-",
            bonus: {
              type: "none",
            },
          },
          1: {
            name: "Agent",
            bonus: {
              type: "skill",
              name: "Deception",
              value: 1,
            },
          },
          2: {
            name: "Field Agent",
            bonus: {
              type: "skill",
              name: "Investigate",
              value: 1,
            },
          },
          3: {
            name: "Field Agent",
            bonus: {
              type: "none",
            },
          },
          4: {
            name: "Special Agent",
            bonus: {
              type: "skill",
              name: "Gun Combat",
              value: 1,
            },
          },
          5: {
            name: "Assistant Director",
            bonus: {
              type: "none",
            },
          },
          6: {
            name: "Director",
            bonus: {
              type: "none",
            },
          },
        },
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
        ranks: {
          0: {
            name: "-",
            bonus: {
              type: "none",
            },
          },
          1: {
            name: "Agent",
            bonus: {
              type: "skill",
              name: "Deception",
              value: 1,
            },
          },
          2: {
            name: "Field Agent",
            bonus: {
              type: "skill",
              name: "Investigate",
              value: 1,
            },
          },
          3: {
            name: "Field Agent",
            bonus: {
              type: "none",
            },
          },
          4: {
            name: "Special Agent",
            bonus: {
              type: "skill",
              name: "Gun Combat",
              value: 1,
            },
          },
          5: {
            name: "Assistant Director",
            bonus: {
              type: "none",
            },
          },
          6: {
            name: "Director",
            bonus: {
              type: "none",
            },
          },
        },
      },
    ],
    skillTables: [
      {
        basic: false,
        assignment: {
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
        assignment: {
          type: "any",
        },
        item: {
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
        roll: false,
        result: 2,
        text: "Severely injured (this is the same as a result of 2 on the injury table).",
      },
      2: {
        type: "choice",
        choices: {
          1: {
            results: [
              {
                type: "none",
              },
            ],
          },
          2: {
            results: [
              {
                type: "injury",
                roll: false,
                result: 2,
              },
              {
                type: "benefit",
                name: "enemy",
              },
              {
                type: "skill",
                name: "any",
              },
            ],
          },
        },
      },
      3: {
        type: "roll",
        rolltype: "skill",
        name: "Advocate",
        value: 8,
        results: {},
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
