import Twitter from "@assets/networks/twitter.svg"
import Facebook from "@assets/networks/facebook.svg"
import Github from "@assets/networks/github.svg"
import Instagram from "@assets/networks/instagram.svg"
export const networks = [
  { id: 1, icon: Twitter, background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.2)" },
  { id: 2, icon: Facebook, background: "#e0a449", border: "none" },
  { id: 3, icon: Instagram, background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.2)" },
  { id: 4, icon: Github, background: "#FFFFFF", border: "1px solid rgba(0, 0, 0, 0.2)" },
]

export const footerContent = [
  {
    id: 1,
    title: "Company",
    maxWidth: 128,
    btns: ["About", "Features", "Works", "Career"],
  },
  {
    id: 2,
    title: "Help",
    maxWidth: 175,
    btns: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  },

  {
    id: 3,
    title: "FAQ",
    maxWidth: 149,
    btns: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    id: 4,
    title: "Resources",
    maxWidth: 189,
    btns: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
  },
]
