import { create } from "zustand";

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
}

interface AppState {
  patients: Patient[];
  viewMode: "grid" | "list";

  setPatients: (data: Patient[]) => void;
  addPatient: (patient: Patient) => void;
  toggleView: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  patients: [
    { id: 1, name: "John Doe", age: 32, condition: "Flu" },
    { id: 2, name: "Jane Smith", age: 28, condition: "Diabetes" },
  ],

  viewMode: "grid",

  setPatients: (data) => set({ patients: data }),

  addPatient: (patient) =>
    set((state) => ({
      patients: [...state.patients, patient],
    })),

  toggleView: () =>
    set((state) => ({
      viewMode: state.viewMode === "grid" ? "list" : "grid",
    })),
}));