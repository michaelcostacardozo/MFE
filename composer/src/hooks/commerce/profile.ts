import { useState, useEffect } from "react";

import { getCurrentProfile } from "@/lib/commerce/profile";

export const useCurrentProfile = () => {
  const [currentProfile, setCurrentProfile] = useState({});

  const fetchCurrentProfile = async () => {
    const profile = await getCurrentProfile();

    if (profile) {
      setCurrentProfile(profile);
    }
  };

  useEffect(() => {
    fetchCurrentProfile();
  }, []);

  return currentProfile;
};
