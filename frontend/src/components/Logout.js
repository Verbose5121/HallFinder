export default function LogoutUser() {
localStorage.setItem("user", null);
window.location.href = "/";
}
