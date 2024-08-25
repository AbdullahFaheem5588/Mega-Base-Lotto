export const globalStates = {
  wallet: "",
  lotteries: [
    {
      id: "1",
      title: "Lottery 1",
      description: "This is the 1 lottery",
      owner: "0x26fc90ac48ac3aba8547207b83ac611471f5079e",
      prize: "70.69",
      ticketPrice: "0.09",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1704067200000, // January 1, 2025
      drawsAt: 1727808000000, // June 1, 2025
      expiresAt: 1759459200000, // December 31, 2025
      participants: 18,
      drawn: false,
    },
    {
      id: "2",
      title: "Lottery 2",
      description: "This is the 2 lottery",
      owner: "0xab72eec5d93be67a8f64fec21d21e70c47245430",
      prize: "37.18",
      ticketPrice: "0.08",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1704067200000, // January 15, 2025
      drawsAt: 1730745600000, // July 15, 2025
      expiresAt: 1755484800000, // December 15, 2025
      participants: 66,
      drawn: false,
    },
    {
      id: "3",
      title: "Lottery 3",
      description: "This is the 3 lottery",
      owner: "0x0792c21c0d5d01a0cdf95f4a881086bd461653db",
      prize: "99.06",
      ticketPrice: "0.10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1704067200000, // February 1, 2025
      drawsAt: 1733443200000, // August 1, 2025
      expiresAt: 1759459200000, // December 31, 2025
      participants: 52,
      drawn: false,
    },
    {
      id: "4",
      title: "Lottery 4",
      description: "This is the 4 lottery",
      owner: "0x14bc373115551c334dfc5c380e48bfb63e44f02a",
      prize: "38.56",
      ticketPrice: "0.02",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1704067200000, // March 1, 2025
      drawsAt: 1735785600000, // September 1, 2025
      expiresAt: 1752336000000, // December 1, 2025
      participants: 31,
      drawn: false,
    },
    {
      id: "5",
      title: "Lottery 5",
      description: "This is the 5 lottery",
      owner: "0x59ea09a181e8ce2a5beabba234d8be46f606cb35",
      prize: "55.21",
      ticketPrice: "0.08",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA96DGvTREoPOb7gdmWkG66JHbbVhHJ539Nw&usqp=CAU",
      createdAt: 1704067200000, // April 1, 2025
      drawsAt: 1735689600000, // October 1, 2025
      expiresAt: 1752336000000, // December 1, 2025
      participants: 61,
      drawn: false,
    },
  ],
  lottery: null,
  result: null,
  luckyNumbers: [],
  purchasedNumbers: [],
  participants: [],
};
