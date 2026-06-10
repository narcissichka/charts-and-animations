import { Badge } from "@/components/ui/Badge";
import { Title } from "@/components/ui/Title";
import { HighlightText } from "@/components/ui/HighlightText";

export const Heading = () => {
  return (
    <>
      <Badge text="Personalized Analysis" />
      <Title
        title={
          <>
            Get your personalised <HighlightText>Qoves plan</HighlightText>
          </>
        }
        subtitle="Understand your facial features and start your glow-up today with a proven action plan, no plastic surgery needed."
      />
    </>
  );
};
