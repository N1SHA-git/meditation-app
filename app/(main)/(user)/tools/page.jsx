import ProtectedRoute from "@/app/shared/protectedRoute";

export default function ToolsPage() {
  return (
    <ProtectedRoute>
      <div className="flex justify-center items-center">Tools in progress</div>
    </ProtectedRoute>
  );
}
