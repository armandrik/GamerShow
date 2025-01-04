export async function signOutUser() {
  try {
    const response = await fetch("/api/auth/signout");
    return response;
  } catch (error) {
    console.log("log out user fetch", error);
  }
}
