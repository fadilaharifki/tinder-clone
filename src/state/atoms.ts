import { atom } from 'recoil';

export const likedPeopleState = atom<number[]>({
  key: 'likedPeople',
  default: [],
});
