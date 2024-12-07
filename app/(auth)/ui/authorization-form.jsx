export function AuthorizationForm({
  handleSubmit,
  nameInput,
  emailInput,
  passwordInput,
}) {
  return (
    <form id="AuthorizationForm" onSubmit={handleSubmit} className="flex flex-col gap-10">
      {!!nameInput && (nameInput)}
      {emailInput}
      {passwordInput}
    </form>
  );
}
