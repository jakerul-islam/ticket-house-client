import ProfileForm from "@/components/dashborad/ProfileForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export default async function VendorProfilePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div className="p-6">
     
      <ProfileForm user={session?.user} />
    </div>
  );
}