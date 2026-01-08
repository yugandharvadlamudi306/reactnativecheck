import {create} from "zustand/react";

export const userDatastore = create((set) => ({
        user: null,
        isLoggedIn: false,
        login: (userData: any) => {
            set({user: userData, isLoggedIn: true})
        },
        loggeOut: () => {
            set({user: null, isLoggedIn: false})
        }
    })
);