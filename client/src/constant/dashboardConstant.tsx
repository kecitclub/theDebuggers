import { Home, Settings2, User } from "lucide-react";

export const clientAdmin = [
  {
    slug: "user",
    sidebar: [
      {
        title: "Dashboard",
        url: "user",
        icon: Home,
        isActive: true,
      },
      {
        title: "Profile",
        url: "profile",
        icon: User,
      },
    ],
  },
  {
    slug: "admin",
  },
];
