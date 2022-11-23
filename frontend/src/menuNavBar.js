import {
  mdiAccount,
  mdiCogOutline,
  mdiLogout,
  mdiThemeLightDark,
  mdiSearchWeb
} from "@mdi/js";

export default [
  {
    icon: mdiSearchWeb,
    label: "Light/Dark",
    isDesktopNoLabel: true,
  },
  {
    icon: mdiThemeLightDark,
    label: "Light/Dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true,
  },
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: "My Profile",
        to: "/profile",
      },
      {
        icon: mdiCogOutline,
        label: "My Preferences",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiLogout,
        label: "Log Out",
        isLogout: true,
      },
    ],
  },
];