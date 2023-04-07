import { UserProvider } from "./UserContext";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <UserProvider>{children}</UserProvider>
    </section>
  );
}
