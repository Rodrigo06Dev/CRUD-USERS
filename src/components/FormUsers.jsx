import React, { useEffect} from "react";
import { useForm } from "react-hook-form";
import "../styles/formUser.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const handleReset = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
};

const FormUsers = ({createNewUser, updateUser, setUpdateUser, updateUserById, handleModal}) => {
  const { handleSubmit, reset, register} = useForm();

  useEffect(() => {
    if (updateUser) {
      reset(updateUser);
    }
  }, [updateUser]);

  const submit = (data) => {
    console.log(data);
    if (updateUser) {
      updateUserById(updateUser.id, data);
      setUpdateUser();
    } else {
      createNewUser(data);
    }
    reset(handleReset);
  };
  const resetModal = () => {
    handleModal()
    reset(handleReset);
    setUpdateUser();
  }
  return (
    <>
        <button onClick={resetModal} className="modal__close"><AiOutlineCloseCircle/></button>
        <form onSubmit={handleSubmit(submit)} className='form'>
        <div className="form__input">
            <label htmlFor="first_name" className="form__label">First Name</label>
            <input type="text" id="first_name" placeholder="Enter your first Name" {...register("first_name")} className='input__item' />
        </div>
        <div className="form__input">
            <label htmlFor="last-name" className="form__label">Last Name</label>
            <input type="text" id="last_name" placeholder="Enter your last Name" {...register("last_name")} className='input__item' />
        </div>
        <div className="form__input">
            <label htmlFor="email" className="form__label">Email</label>
            <input type="email" id="email" placeholder="Enter your email" {...register("email")} className='input__item' />
        </div>
        <div className="form__input">
            <label htmlFor="password" className="form__label">Password</label>
            <input type="password" id="password" placeholder="Enter your password" {...register("password")} className='input__item' />
        </div>     
        <div className="form__input">
            <label htmlFor="birthday" className="form__label">Birthday</label>
            <input type="date" id="birthday" placeholder="Enter your birthday" {...register("birthday")} className='input__item' />
        </div>
        <button onClick={handleModal} className='form__btn'>{updateUser ? "Update User" : "add new user"}</button>
        </form>
    </>
   
  );
};

export default FormUsers;
