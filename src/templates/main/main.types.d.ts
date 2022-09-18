import { IProfileProps } from "../../fragments/profile/profile.types";
import { ITextPanelProps } from "../../fragments/text-panel/text-panel.types";
import { IShowcaseProps } from "../../fragments/showcase/showcase.types";

export interface IMainProps {
  profile: IProfileProps;
  aboutMe: ITextPanelProps;
  techShowcase: IShowcaseProps;
  langShowcase: IShowcaseProps;
}
