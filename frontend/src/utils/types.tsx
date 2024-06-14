

export interface StateType {
  user_name?: string; 
  points?:number;
  isAuthenticated?: boolean;
}

export interface RootState {
  auth: StateType;
}

export type ChatEvent = {
  user_name?: string;
  message?: string;
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