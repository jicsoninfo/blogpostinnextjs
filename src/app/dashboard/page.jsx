"use client"
import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import react, {useEffect, useState} from "react";
import useSWR from "swr";

const Dashboard =() => {
  //Old way to Fetch data
  // const [data, setData] = useState([]);
  // const [er, setErr] = useState(false);
  // const[isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       //next: { revalidate: 10 },
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       //throw new Error("Failed to fetch data");
  //       setErr(true);
  //     }
  //     //return res.json();
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, []);

  const session = useSession();
  console.log(session);
  //new way fetch data
  const fetcher = (...args) => fetch(...args).then((res)=> res.json());
  const { data, error, isLoading } = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher)
  console.log(data);
    return (
      <div>Dashboard</div>
    )
  }
  
  export default Dashboard
  
