// import { createSlice } from "@reduxjs/toolkit";
// import {
//   addContact,
//   deleteContact,
//   editContact,
//   fetchContacts,
// } from "./contactsOps";
// import toast from "react-hot-toast";
// const pending = (state) => {
//   state.isLoading = true;
//   state.error = false;
// };

// const rejected = (state) => {
//   state.isLoading = false;
//   state.error = null;
// };

// const notify = () => toast("Here is your toast.");

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.pending, pending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, rejected)
//       .addCase(addContact.pending, pending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//         toast.success("Contact added");
//       })
//       .addCase(addContact.rejected, rejected)
//       .addCase(deleteContact.pending, pending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(
//           (contact) => contact.id !== action.payload.id
//         );
//         toast.success("Contact deleted");
//       })
//       .addCase(deleteContact.rejected, rejected)
//       .addCase(editContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(action.payload);
//         toast.success("Contact edited");
//       });
//   },
// });

// export const contactsReducer = contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from "./contactsOps";
import toast from "react-hot-toast";

const pending = (state) => {
  state.isLoading = true;
  state.error = false;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        toast.success("Contact added");
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
        toast.success("Contact deleted");
      })
      .addCase(deleteContact.rejected, rejected)
      .addCase(editContact.pending, pending)
      .addCase(editContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        );
        toast.success("Contact edited");
      })
      .addCase(editContact.rejected, rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
