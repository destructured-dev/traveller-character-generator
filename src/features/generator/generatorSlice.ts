import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";

export interface Career {
    name: string,
    terms: number
};

export interface Skill {
    name: string,
    rating: number
};

export interface LogItem {
    id: string,
    term: number,
    type: "skill" | "stat" | "benefit" | "rank"
    name: string,
    from?: number,
    to?: number
}

export interface GeneratorSliceState {
  terms: number,
  name: string,
  currentCareer: string,
  careers: Array<Career>,
  homeSystem: string,
  str: number,
  dex: number,
  end: number,
  edu: number,
  int: number,
  soc: number,
  psi: number,
  skills: Array<Skill>,
  benefits: Array<String>,
  draft: boolean,
  complete: boolean,
  log: Array<LogItem>
};

const initialState: GeneratorSliceState = {
  terms: 0,
  name: '',
  currentCareer: '',
  careers: [],
  homeSystem: '',
  str: 0,
  dex: 0,
  end: 0,
  edu: 0,
  int: 0,
  soc: 0,
  psi: -1,
  skills: [],
  benefits: [],
  draft: false,
  complete: false,
  log: []
};


export const counterSlice = createAppSlice({
  name: "generator",
  initialState,
  reducers: create => ({
    
    incrementTerms: create.reducer(state => {
        state.terms += 1;
    }),
    
    decrementTerms: create.reducer(state => {
        state.terms -= 1;
    }),

    setTerms: create.reducer((state, action:PayloadAction<number>) => {
        state.terms = action.payload;
    }),

    setName: create.reducer((state, action:PayloadAction<string>) => {
        state.name = action.payload;
    }),

    setCurrentCareer: create.reducer((state, action: PayloadAction<string>) => {
        state.currentCareer = action.payload;
    }),

    incrementCareerLevel: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.careers.find((career) => career.name === action.payload);
        if(foundItem) {
            foundItem.terms += 1;
        } else {
            let newCareer = {
                "name": action.payload,
                "terms": 1
            }
           state.careers.push(newCareer) 
        }
    }),

    decrementCareerLevel: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.careers.find((career) => career.name === action.payload);
        if(foundItem) {
            foundItem.terms -= 1;
        }
    }),

    setHomeSystem: create.reducer((state, action: PayloadAction<string>) => {
        state.homeSystem = action.payload;
    }),

    incrementStr: create.reducer(state => {
        state.str += 1;
    }),

    decrementStr: create.reducer(state => {
        state.str -=1;
    }),

    setStr: create.reducer((state, action: PayloadAction<number>) => {
        state.str = action.payload;
    }),

    incrementDex: create.reducer(state => {
        state.dex += 1;
    }),

    decrementDex: create.reducer(state => {
        state.dex -=1;
    }),

    setDex: create.reducer((state, action: PayloadAction<number>) => {
        state.dex = action.payload;
    }),

    incrementEnd: create.reducer(state => {
        state.end += 1;
    }),

    decrementEnd: create.reducer(state => {
        state.end -=1;
    }),

    setEnd: create.reducer((state, action: PayloadAction<number>) => {
        state.end = action.payload;
    }),

    incrementInt: create.reducer(state => {
        state.int += 1;
    }),

    decrementInt: create.reducer(state => {
        state.int -=1;
    }),

    setInt: create.reducer((state, action: PayloadAction<number>) => {
        state.int = action.payload;
    }),

    incrementEdu: create.reducer(state => {
        state.edu += 1;
    }),

    decrementEdu: create.reducer(state => {
        state.edu -=1;
    }),

    setEdu: create.reducer((state, action: PayloadAction<number>) => {
        state.edu = action.payload;
    }),

    incrementSoc: create.reducer(state => {
        state.soc += 1;
    }),

    decrementSoc: create.reducer(state => {
        state.soc -=1;
    }),

    setSoc: create.reducer((state, action: PayloadAction<number>) => {
        state.soc = action.payload;
    }),

    incrementPsi: create.reducer(state => {
        state.psi += 1;
    }),

    decrementPsi: create.reducer(state => {
        state.psi -=1;
    }),

    setPsi: create.reducer((state, action: PayloadAction<number>) => {
        state.psi = action.payload;
    }),

    incrementSkill: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.skills.find((skill) => skill.name === action.payload);
        if(foundItem) {
            foundItem.rating += 1;
        } else {
            let newSkill = {
                "name": action.payload,
                "rating": 0
            };
            state.skills.push(newSkill);
        }
    }),

    decrementSkill: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.skills.find((skill) => skill.name === action.payload);
        if(foundItem) {
            foundItem.rating -= 1;
        };
    }),

    setSkillLevel: create.reducer((state, action: PayloadAction<Skill>) => {
        let foundItem = state.skills.find((skill) => skill.name === action.payload.name);
        if(foundItem) {
            foundItem.rating = action.payload.rating;
        } else {
            let newSkill = {
                "name": action.payload.name,
                "rating": action.payload.rating
            }
            state.skills.push(newSkill);
        }
    }),

    addBenefit: create.reducer((state, action: PayloadAction<string>) => {
       state.benefits.push(action.payload);
    }),

    removeBenefit: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.benefits.find((benefit) => benefit === action.payload);
        if(foundItem) {
            const index = state.benefits.indexOf(foundItem);
            delete state.benefits[index];
        };
    }),

    toggleDraft: create.reducer(state => {
        state.draft === true ? state.draft = false : state.draft = true;
    }),

    toggleComplete: create.reducer(state => {
        state.complete === true ? state.complete = false : state.complete = true;
    }),

    addLogItem: create.reducer((state, action: PayloadAction<LogItem>) => {        
        state.log.push(action.payload);
    }),

    removeLogItem: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.log.find((item) => item.id === action.payload);
        if(foundItem) {
            const index = state.log.indexOf(foundItem);
            delete state.log[index];
        };
    }),

    removeLogItemsByTerm: create.reducer((state, action: PayloadAction<number>) =>{
        let foundItems = state.log.filter(item => item.term === action.payload)
        for(let i = 0;i<foundItems.length;i++) {
            let logIndex = state.log.indexOf(foundItems[i]);
            delete state.log[logIndex];
        }
    })

    

  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectTerms: generator => generator.terms,
    selectName: generator => generator.name,
    selectCurrentCareer: generator => generator.currentCareer,
    selectCareerLevel: (generator, careerName) => {
        const foundItem = generator.careers.find((career) => career === careerName);
        if (foundItem) {
            foundItem.terms
        }
    },
    selectCareers: generator => generator.careers,
    selectHomeSystem: generator => generator.homeSystem,
    selectStr: generator => generator.str,
    selectDex: generator => generator.dex,
    selectEnd: generator => generator.end,
    selectInt: generator => generator.int,
    selectEdu: generator => generator.edu,
    selectSoc: generator => generator.soc,
    selectPsi: generator => generator.psi,
    selectSkillLevel: (generator, skillName) => {
        const foundItem = generator.skills.find((skill) => skill === skillName);
        if (foundItem) {
            foundItem.rating
        }
    },
    selectSkillExists: (generator, skillName) => {
        const foundItem = generator.skills.find((skill) => skill === skillName);
        if (foundItem) {
            true;
        } else {
            false;
        }
    },
    selectSkills: generator => generator.skills,
    selectBenefitExists: (generator, benefitName) => {
        const foundItem = generator.benefits.find((benefit) => benefit === benefitName);
        if (foundItem) {
            true;
        } else {
            false;
        }
    },
    selectBenefits: generator => generator.benefits,
    selectDraft: generator => generator.draft,
    selectComplete: generator => generator.complete,
    selectLog: generator => generator.log,
    selectLogTerm: (generator, term:number) => {
        generator.log.filter(item => item.term === term )        
    }
  },
})

// Action creators are generated for each case reducer function.
export const { 
    incrementTerms, 
    decrementTerms, 
    setTerms, 
    setName, 
    setCurrentCareer, 
    incrementCareerLevel, 
    decrementCareerLevel, 
    setHomeSystem, 
    incrementStr, 
    decrementStr, 
    setStr, 
    incrementDex, 
    decrementDex, 
    setDex, 
    incrementEnd, 
    decrementEnd, 
    setEnd, 
    incrementInt, 
    decrementInt, 
    setInt, 
    incrementEdu, 
    decrementEdu, 
    setEdu, 
    incrementSoc, 
    decrementSoc, 
    setSoc,  
    incrementPsi, 
    decrementPsi, 
    setPsi, 
    incrementSkill, 
    decrementSkill, 
    setSkillLevel, 
    addBenefit, 
    removeBenefit, 
    toggleDraft, 
    toggleComplete, 
    addLogItem,
    removeLogItem,
    removeLogItemsByTerm
} = counterSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { 
    selectTerms, 
    selectCurrentCareer, 
    selectCareerLevel,
    selectCareers,
    selectHomeSystem,
    selectStr,
    selectDex,
    selectEnd,
    selectInt,
    selectEdu,
    selectSoc,
    selectPsi,
    selectSkillLevel,
    selectSkillExists,
    selectSkills,
    selectBenefitExists,
    selectBenefits,
    selectDraft,
    selectComplete,
    selectLog,
    selectLogTerm
} = counterSlice.selectors


