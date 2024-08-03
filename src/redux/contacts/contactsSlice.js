import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
const pending = (state) => {
  state.isLoading = true;
  state.error = false;
};

const rejected = (state) => {
  state.isLoading = false;
  state.error = null;
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
      })
      .addCase(addContact.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, rejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
