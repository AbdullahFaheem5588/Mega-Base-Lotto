export const globalActions = {
  setWallet: (state, action) => {
    state.wallet = action.payload;
  },
  setLotteries: (state, action) => {
    state.lotteries = action.payload;
  },
  addLottery: (state, action) => {
    state.lotteries.push(action.payload);
  },
  setLottery: (state, action) => {
    state.lottery = action.payload;
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
