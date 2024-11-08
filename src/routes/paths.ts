// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: "/auth",
  CHARACTERS: "/characters",
  LOCATION: "/location",
  EPISODE: "/episode",
};

// ----------------------------------------------------------------------

export const paths = {
  // AUTH
  auth: {
    root: ROOTS.AUTH,
    login: `${ROOTS.AUTH}/login`,
    signUp: `${ROOTS.AUTH}/signUp`,
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
  },
  // CHARACTERS
  characters: {
    root: ROOTS.CHARACTERS,
    details: (id: number) => `${ROOTS.CHARACTERS}/${id}`,
  },

  // LOCATION
  location: {
    root: ROOTS.LOCATION,
    details: (id: string) => `${ROOTS.LOCATION}/${id}`,
  },

  // EPISODE
  episode: {
    root: ROOTS.EPISODE,
    details: (id: number) => `${ROOTS.EPISODE}/${id}`,
  },
};
