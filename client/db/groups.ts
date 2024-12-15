import { Group } from "@/types/types";

export const dummyGroups: Group[] = [
  {
    id: 1,
    name: "Multimedia Technologies",
    description:
      "Connect with teammates, share ideas, and engage in dynamic discussions...",
    members: ["user2", "user3"],
    admin: "admin2",
  },
  {
    id: 2,
    name: "Gamers Unite",
    description: "Find teammates and discuss games.",
    members: ["user2"],
    admin: "admin2",
    iconUrl: "/img1.png",
  },
];

export const dummyMessages = [
  {
    id: 1,
    sender: "user2",
    text: "Hello everyone!",
    image: null,
    timestamp: new Date(),
  },
  {
    id: 2,
    sender: "user3",
    text: "Hi there!",
    image: null,
    timestamp: new Date(),
  },
  {
    id: 3,
    sender: "user2",
    text: "yeah bro, whats up",
    image: null,
    timestamp: new Date(),
  },
];
