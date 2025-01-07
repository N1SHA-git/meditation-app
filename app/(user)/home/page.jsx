"use client";

import { UiButton } from "@/app/shared/uikit/ui-button";
import { HomePageLayout } from "./ui/home-page-layout";
import { CalmIcon } from "@/public/icons/calm-icon";
import { RelaxIcon } from "@/public/icons/relax-icon";
import { MoodIcon } from "./ui/mood-icon";
import { AnxiousIcon } from "@/public/icons/anxious-icon";
import { FocusIcon } from "@/public/icons/focus-icon";
import { HappinessIcon } from "@/public/icons/happiness-icon";
import { WildIcon } from "@/public/icons/wild-icon";


export default function HomePage() {
  return (
    <HomePageLayout
      button={<UiButton className="py-3 px-10 rounded-3xl">Start meditation</UiButton>}
      calmIcon={<MoodIcon moodIcon={<CalmIcon />} moodName="Calm" />}
      relaxIcon={<MoodIcon moodIcon={<RelaxIcon />} moodName="Relax" />}
      focusIcon={<MoodIcon moodIcon={<FocusIcon />} moodName="Focus" />}
      anxiousIcon={<MoodIcon moodIcon={<AnxiousIcon />} moodName="Anxious" />}
      happinessIcon={<MoodIcon moodIcon={<HappinessIcon />} moodName="Happiness" />}
      wildIcon={<MoodIcon moodIcon={<WildIcon />} moodName="Wild" />}
    />
  );
}
