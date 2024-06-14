

export type ChatEvent = {
  user_name: string;
  message: string;
};
export type PollEvent = {
  question: string;
  options: string[];
  votes: number[];
};
export type RankEvent = {
  user: string;
  rank: number;
};