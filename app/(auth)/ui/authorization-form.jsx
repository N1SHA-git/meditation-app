"use client";
export function AuthorizationForm({
  onSubmit,
  nameInput,
  emailInput,
  passwordInput,
  usernameErrorMessage,
  emailErrorMessage,
  passwordErrorMessage,
}) {
  return (
    <form
      id="AuthorizationForm"
      action=""
      onSubmit={onSubmit}
      method=""
      className="flex flex-col gap-3"
    >
      {!!nameInput && nameInput}
      {!!nameInput && (
        <p className="-mt-2 text-sm text-red-500">{usernameErrorMessage}</p>
      )}
      {emailInput}
      <p className="-mt-2 text-sm text-red-500">{emailErrorMessage}</p>
      {passwordInput}
      <p className="-mt-2 text-sm text-red-500">{passwordErrorMessage}</p>
    </form>
  );
}
