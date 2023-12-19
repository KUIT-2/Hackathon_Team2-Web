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
            store: null,
            peopleNum: 1,
          },
        };
      }
      return { reservation: { ...state.reservation, time } };
    }),
  setReservationStore: (store) =>
    set((state) => {
      if (!state.reservation) {
        return {
          reservation: {
            time: 17,
            date: new Date(),
            store,
            peopleNum: 1,
          },
        };
      }
      return { reservation: { ...state.reservation, store } };
    }),
  setReservationDate: (date) =>
    set((state) => {
      if (!state.reservation) {
        return {
          reservation: {
            time: 17,
            date,
            store: null,
            peopleNum: 1,
          },
        };
      }
      return { reservation: { ...state.reservation, date } };
    }),
  setReservationPeopleNum: (peopleNum) =>
    set((state) => {
      if (!state.reservation) {
        return {
          reservation: {
            time: 17,
            date: new Date(),
            store: null,
            peopleNum,
          },
        };
      }
      return { reservation: { ...state.reservation, peopleNum } };
    }),
  userId: null,
  setUserId: (id) => set(() => ({ userId: id })),
}));
