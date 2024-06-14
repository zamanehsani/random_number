

export type ChatEvent = {
  user_name: string;
  message: string;
};
export type PollEvent = {
  name?: string;
  points?: number;
  multiplier?: number;
};
export type RankEvent = {
  user: string;
  rank: number;
};