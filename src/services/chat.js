const CONSTANTS = {
  APP_ID: process.env.NEXT_PUBLIC_APP_ID,
  REGION: process.env.NEXT_PUBLIC_REGION,
  AUTH_KEY: process.env.NEXT_PUBLIC_AUTH_KEY,
};

export const initCometChat = async (CometChat) => {
  const appID = CONSTANTS.APP_ID;
  const region = CONSTANTS.REGION;

  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();

  return CometChat.init(appID, appSetting)
    .then(() => console.log("Initialization completed successfully"))
    .catch((error) =>
      console.error("Initialization failed with error:", error)
    );
};

export const loginWithCometChat = async (CometChat, UID) => {
  const authKey = CONSTANTS.AUTH_KEY;

  return CometChat.login(UID, authKey)
    .then((user) => user)
    .catch((error) => {
      console.error("Login failed with error:", error);
      throw error;
    });
};

export const signUpWithCometChat = async (CometChat, UID) => {
  const authKey = CONSTANTS.AUTH_KEY;
  const user = new CometChat.User(UID);

  user.setName(UID);
  return CometChat.createUser(user, authKey)
    .then((user) => user)
    .catch((error) => {
      console.error("Sign-up failed with error:", error);
      throw error;
    });
};

export const logOutWithCometChat = async (CometChat) => {
  return CometChat.logout()
    .then(() => console.log("Logout successful"))
    .catch((error) => {
      console.error("Logout failed with error:", error);
      throw error;
    });
};

export const checkAuthState = async (CometChat) => {
  return CometChat.getLoggedinUser()
    .then((user) => user)
    .catch((error) => {
      console.error("Failed to get logged-in user with error:", error);
      throw error;
    });
};

export const createNewGroup = async (CometChat, GUID, groupName) => {
  const groupType = CometChat.GROUP_TYPE.PUBLIC;
  const group = new CometChat.Group(GUID, groupName, groupType, "");

  return CometChat.createGroup(group)
    .then((group) => group)
    .catch((error) => {
      console.error("Failed to create group with error:", error);
      throw error;
    });
};

export const getGroup = async (CometChat, GUID) => {
  return CometChat.getGroup(GUID)
    .then((group) => group)
    .catch((error) => {
      console.error("Failed to get group with error:", error);
      throw error;
    });
};

export const joinGroup = async (CometChat, GUID) => {
  const groupType = CometChat.GROUP_TYPE.PUBLIC;

  return CometChat.joinGroup(GUID, groupType, "")
    .then((group) => group)
    .catch((error) => {
      console.error("Failed to join group with error:", error);
      throw error;
    });
};

export const getMessages = async (CometChat, GUID) => {
  const limit = 30;
  const messagesRequest = new CometChat.MessagesRequestBuilder()
    .setGUID(GUID)
    .setLimit(limit)
    .build();

  return messagesRequest
    .fetchPrevious()
    .then((messages) => messages.filter((msg) => msg.type === "text"))
    .catch((error) => {
      console.error("Failed to fetch messages with error:", error);
      throw error;
    });
};

export const sendMessage = async (CometChat, receiverID, messageText) => {
  const receiverType = CometChat.RECEIVER_TYPE.GROUP;
  const textMessage = new CometChat.TextMessage(
    receiverID,
    messageText,
    receiverType
  );

  return CometChat.sendMessage(textMessage)
    .then((message) => message)
    .catch((error) => {
      console.error("Failed to send message with error:", error);
      throw error;
    });
};

export const listenForMessage = (CometChat, listenerID, onMessageReceived) => {
  CometChat.addMessageListener(
    listenerID,
    new CometChat.MessageListener({
      onTextMessageReceived: (message) => onMessageReceived(message),
    })
  );
};
