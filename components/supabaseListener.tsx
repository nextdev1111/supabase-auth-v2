"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import supabaseBrowserClient from "../lib/supabaseBrowserClient";

const SupabaseListner = ({ accessToken }: { accessToken?: string }) => {
  const router = useRouter();

  useEffect(() => {
    supabaseBrowserClient.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });
  }, [accessToken]);

  return null;
};

export default SupabaseListner;
