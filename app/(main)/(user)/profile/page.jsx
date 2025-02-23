import { ProfileHead } from "./ui/profile-head";
import { ProfileLayout } from "./ui/profile-layout";
import { ProfileMain } from "./ui/profile-main";
import { Chart } from "./ui/chart";
import { Tabs } from "./ui/tabs";
import ProtectedRoute from "@/app/shared/protectedRoute";

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileLayout
        profileHead={<ProfileHead />}
        profileMain={<ProfileMain tabs={<Tabs />} chart={<Chart />} />}
      />
    </ProtectedRoute>
  );
}
