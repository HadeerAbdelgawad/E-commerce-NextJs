// server component
import { auth } from '@/lib/auth';
import EditProfileForm from './EditProfileForm'; // your client component
import { redirect } from 'next/navigation';

export default async function EditProfilePage() {
  const session = await auth(); // works here, server context

  if (!session?.user) {
    return redirect('/signin'); // server redirect
  }
  return <EditProfileForm user={session.user} />;
}
