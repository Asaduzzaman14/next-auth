import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";

import { signIn } from "next-auth/react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/firebase.auth";

import { useForm } from "react-hook-form"



const LoginPage = () => {
  const { register, handleSubmit, } = useForm()
  const [createUserWithEmailAndPassword, user, loadingerror,] =
    useCreateUserWithEmailAndPassword(auth);



  const onSubmit = (data) => {
    console.log(data)
    createUserWithEmailAndPassword(data.email, data.password)

  }

  console.log(user);


  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined />
          <GithubOutlined onClick={() => signIn("github", {
            callbackUrl: 'http://localhost:3000/'
          })} />
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register("email", { required: true })}
            type="email" />
          <label htmlFor="">Your Password</label>
          <input
            {...register("password", { required: true })}
            type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
