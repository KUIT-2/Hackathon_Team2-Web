import { create } from 'zustand';

export const useStore = create((set) => ({
  reservation: null,
  setReservation: (reservationData) =>
    set(() => ({ reservation: reservationData })),
  setReservationTime: (time) =>
    set((state) => {
      if (!state.reservation) {
        return {
          reservation: {
            time,
            date: new Date(),
          },
        };
      }
      return { ...state.reservation, time };
    }),
  setReservationDate: (date) =>
    set((state) => {
      if (!state.reservation) {
        return {
          reservation: {
            time: 17,
            date,
          },
        };
      }
      return { ...state.reservation, date };
    }),
  user: null,
  setUser: (userData) => set(() => ({ user: userData })),
}));
