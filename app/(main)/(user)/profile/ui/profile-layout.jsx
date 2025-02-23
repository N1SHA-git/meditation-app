export function ProfileLayout({ profileHead, profileMain }) {
  return (
    <div className="flex flex-col items-center gap-4 py-2">
      {profileHead}
      {profileMain}
    </div>
  );
}
