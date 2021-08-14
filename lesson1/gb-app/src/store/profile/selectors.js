import { AUTHORS } from "../../components/constants";

export const selectName = (state) => state.profile.name || AUTHORS.human;