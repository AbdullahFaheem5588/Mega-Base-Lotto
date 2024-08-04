export const globalActions = {
  setWallet: (state, action) => {
    state.wallet = action.payload;
  },
  setLotteries: (state, action) => {
    state.jackpots = action.payload;
  },
  setLottery: (state, action) => {
    state.jackpot = action.payload;
  },
  setLuckyNumbers: (state, action) => {
    state.luckyNumbers = action.payload;
  },
  setPurchasedNumbers: (state, action) => {
    state.purchasedNumbers = action.payload;
  },
  setResult: (state, action) => {
    state.result = action.payload;
  },
  setParticipants: (state, action) => {
    state.participants = action.payload;
  },
};
