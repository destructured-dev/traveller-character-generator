import type { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../../app/createAppSlice";
import type { AppThunk } from "../../app/store";

export interface Career {
    name: string,
    terms: number
};

export interface Skill {
    name: string,
    rating: number
};

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
  complete: boolean
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

    // TODO: expand to add career to array if not found
    incrementCareerLevel: create.reducer((state, action: PayloadAction<string>) => {
        let foundItem = state.careers.find((career) => career.name === action.payload);
        if(foundItem) {
            foundItem.terms += 1;
        } else {

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

    //TODO: Add reducers for skills

    //TODO: Add reducers for benefits

    toggleDraft: create.reducer(state => {
        state.draft === true ? state.draft = false : state.draft = true;
    }),

    toggleComplete: create.reducer(state => {
        state.complete === true ? state.complete = false : state.complete = true;
    })

  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    
  },
})

// Action creators are generated for each case reducer function.
export const {  } =
  counterSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {  } = counterSlice.selectors

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())

//     if (currentValue % 2 === 1 || currentValue % 2 === -1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }
