import Twitter from "@assets/networks/twitter.svg"
import Facebook from "@assets/networks/facebook.svg"
import Github from "@assets/networks/github.svg"
import Instagram from "@assets/networks/instagram.svg"
export const networks = [
  { id: 1, icon: Twitter },
  { id: 2, icon: Facebook },
  { id: 3, icon: Instagram },
  { id: 4, icon: Github },
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
