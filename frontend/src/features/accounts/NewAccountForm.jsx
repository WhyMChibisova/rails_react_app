import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createAccount } from "../../services/accountService";
import { createStudent } from "../../services/studentService";
import AccountForm from "./AccountForm";

function NewAccountForm() {
  const navigate = useNavigate();

  const handleCreateSubmit = async (formData, studentData) => {
    const accountData = new FormData();

    accountData.append("account[email]", formData.account.email);
    accountData.append("account[password]", formData.account.password);
    accountData.append("account[password_confirmation]", formData.account.password_confirmation);
    accountData.append("account[role]", "student");
    accountData.append("account[photo]", formData.account.photo);

    try {
      const response = await createAccount(accountData);
      const response2 = await createStudent(studentData);
      navigate("/sessions/new");
    } catch (e) {
      console.error("An error occured: ", e);
    }
  };

  return (
    <AccountForm
      headerText="Регистрация"
      onSubmit={handleCreateSubmit}
      buttonText="Зарегистрироваться" />
  );
}

export default NewAccountForm;
