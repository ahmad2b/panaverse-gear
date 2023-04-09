// hooks/useUserRole.ts

import { useLayoutEffect, useEffect, useState } from "react";

type UserRoleState = {
  loading: boolean;
  userRole: string | null;
};

export function useUserRole() {
  const [state, setState] = useState<UserRoleState>({
    loading: true,
    userRole: null,
  });

  useEffect(() => {
    const sessionToken = localStorage.getItem("sessionToken");
    if (sessionToken) {
      const [, role] = sessionToken.split(":");
      setState({ loading: false, userRole: role });
    } else {
      setState({ loading: false, userRole: null });
    }
  }, []);

  return state;
}
