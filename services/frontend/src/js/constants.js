// API

export const USER_INFO = {
  userName: "Karen",
  userID: "kxylu"
}

export const SAMPLE_BOT = {
  currBotName: 'Sample Bot',
  currBotDescription: 'A sample bot for debugging',
  currBotId: 'sample_bot',
};

export const STATUS_LOADING = {
  message: 'configuring your bot...',
  loading: true,
  status: 'info'
}

export const STATUS_SUCCESS = {
  message: 'Bot Loaded',
  loading: false,
  status: 'success'
}

export const STATUS_FAILED = {
  message: 'bot failed...',
  loading: false,
  status: 'error'
}


export const BOT_RESPONSE = {
  senderId: SAMPLE_BOT.currBotId, 
  message: "Hello",
  isUser: false,
  senderName: SAMPLE_BOT.currBotName,



}

export const USER_RESPONSE = {
  senderId: USER_INFO.userID, 
  message: "Hello",
  isUser: true,
  senderName: USER_INFO.userName,


}

export const CHAT_HISTORY = [
  {...BOT_RESPONSE, message:"hello, how are you?"},
  {...USER_RESPONSE, message:"hello"},
  {...BOT_RESPONSE, message:"what is your name?"},
  {...USER_RESPONSE, message:"my name is bob"},
  {...BOT_RESPONSE, message:"nice to meet you bob, my name is Aeri"},
  {...USER_RESPONSE, message:"Tell me something about life"},
  {...BOT_RESPONSE, message:"Life is one of the most beautiful concept in the world, but it is too complicated for me to understand."},
  {...USER_RESPONSE, message:"Are you alive?"},

]

// Chatbot Management
export const BOT_TOGGLE = 'BOT_TOGGLE';
export const MODE_TOGGLE = 'MODE_TOGGLE';
export const SPEECH_MODE = 'Speech';
export const TEXT_MODE = 'Text';

// Message Control
export const START_CHAT = 'START_CHAT';
export const MESSAGE_PATH = ''; //TODO
export const ROOT_URL = ''; //TODO
