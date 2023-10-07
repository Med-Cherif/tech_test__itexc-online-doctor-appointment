const messages = [
  "Hey doc, I'm feeling better after my recent illness. Can I stop taking my medication?",
  "Hi there! I'm glad to hear that you're feeling better. However, I strongly advise against stopping your medication without consulting with me first. Even if you're feeling better, it's important to complete the full course of treatment to ensure that the infection is completely eradicated and prevent the risk of it returning or developing antibiotic resistance.",
  "Oh, I see. I didn't realize that. What should I do next?",
];
const conversations = [
  {
    id: 1,
    user: {
      name: "Sarah Lee",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/672.jpg",
    },
    lastMessage: {
      content: "Hi how are you",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
  {
    id: 2,
    user: {
      name: "John Smith",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1129.jpg",
    },
    lastMessage: {
      content: "Doctor, ",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
  {
    id: 3,
    user: {
      name: "Mark Johnson",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 2,
  },
  {
    id: 4,
    user: {
      name: "Emily Johnson",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
  {
    id: 5,
    user: {
      name: "Maria Rodriguez",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 1,
  },
  {
    id: 6,
    user: {
      name: "Jack Thompson",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
  {
    id: 7,
    user: {
      name: "Emily Johnson",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
  {
    id: 8,
    user: {
      name: "David Kim",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
  {
    id: 9,
    user: {
      name: "Sarah ahmed",
      avatar: "",
    },
    lastMessage: {
      content: "Doctor i have been",
      time: "12:45PM",
    },
    unseenMessages: 0,
  },
].map((conversation) => {
  const { user } = conversation;

  return {
    ...conversation,
    messages: messages.map((message, index) => {
      return {
        id: index,
        sender:
          index === 1
            ? {
                name: "Me",
                avatar: "",
              }
            : {
                name: user.name,
                avatar: user.avatar,
              },
        content: message,
        time: `12:${45 + index}PM`,
      };
    }),
  };
});

// const messages = [
//   {
//     sender: {
//       name: ""
//     }
//   }
// ]

export { conversations };
