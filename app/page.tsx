import { Spacer } from "@/components/ui/Spacer/Spacer";
import { FacialAnalysis } from "@/features/banner/components/FacialAnalysis/FacialAnalysis";
import { QovesPlan } from "@/features/banner/components/QovesPlan/QovesPlan";
import { DesktopOnly } from "@/features/functional/components/DesktopOnly/DesktopOnly";

export default function Home() {
  return (
    <main className="">
      <DesktopOnly>
        <QovesPlan />
      </DesktopOnly>
      <FacialAnalysis />
      <Spacer className="fullHeight"/>
    </main>
  );
}
