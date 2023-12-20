// actions.ts
export const SET_SELECTED_OPTION = 'SET_SELECTED_OPTION';

export interface SetSelectedOptionAction {
  type: typeof SET_SELECTED_OPTION;
  payload: string;
}

export const setSelectedOption = (option: string): SetSelectedOptionAction => ({
  type: SET_SELECTED_OPTION,
  payload: option,
});
