import { Spacer } from "@/components/ui/Spacer";
import { FacialAnalysis } from "@/features/banner/components/FacialAnalysis";
import { QovesPlan } from "@/features/banner/components/QovesPlan";
import { DesktopOnly } from "@/features/functional/components/DesktopOnly";

export default function Home() {
  return (
    <main className="">
      <DesktopOnly>
        <QovesPlan />
      </DesktopOnly>
      <FacialAnalysis />
      <Spacer className="fullHeight" />
    </main>
  );
}
