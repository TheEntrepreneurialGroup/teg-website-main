import { ApplicationProcess } from "@/components/sections/ApplicationProcess";
import { MemberProcess } from "@/components/sections/MemberProcess";

export default function Page() {
  return (
    <div className="w-full flex-1">
      <MemberProcess />
      <ApplicationProcess />
    </div>
  );
}
