export interface User {
  fullName?: string;
  avatar?:string;
  messages?:MessageItem[],
  lastOnline?:string;
  firstName?:string
}

export interface MessageItem{
  messageText?:string,
  messageBy?:string;
  messageDate?:string;
  messageType?:string
}
