import { create } from 'zustand';

export const useStore = create((set) => ({
  reservation: null,
  setReservation: (reservationData) =>
    set(() => ({ reservation: reservationData })),
  user: null,
  setUser: (userData) => set(() => ({ user: userData })),
}));
