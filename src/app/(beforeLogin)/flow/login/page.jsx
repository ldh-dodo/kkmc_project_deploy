"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };
  const onSubmit = async e => {
    e.preventDefault();
    try {
      await signIn("credentials", {
        username: id,
        password,
        redirect: false,
      });
      router.replace("/");
    } catch (err) {
      console.log(err);
    }
  };
  const onChangeId = e => {
    setId(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ border: "2px solid #a7a7a7", borderRadius: "10px", overflow: "hidden", width: "350px" }}>
        <div style={{ padding: "20px", textAlign: "center", fontSize: "20px", color: "#000000" }}>
          KKMC
          <br />
          생산관리 시스템
        </div>
        <Image
          src="/icons/pwa-icons/KKMC.png"
          alt="로그인 페이지 로고"
          width={200}
          height={150}
          style={{ display: "block", margin: "0 auto" }}
        />
        <div
          style={{ backgroundColor: "hsla(43, 30%, 95%, 1)", padding: "20px", width: "100%", boxSizing: "border-box" }}
        >
          <form
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
            onSubmit={onSubmit}
          >
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디"
              required
              style={{
                marginBottom: "12px",
                padding: "8px",
                backgroundColor: "hsla(0, 0%, 90%, 1)",
                width: "80%",
                border: "1px solid #d3d3d3",
                color: "black",
              }}
              onChange={onChangeId}
            />

            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
              required
              style={{
                marginBottom: "20px",
                padding: "8px",
                backgroundColor: "hsla(0, 0%, 90%, 1)",
                width: "80%",
                border: "1px solid #d3d3d3",
                color: "black",
              }}
              onChange={onChangePassword}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#000000",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "90%",
                marginBottom: "10px",
              }}
            >
              로그인
            </button>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "90%" }}>
              <button
                type="button"
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "10px",
                  backgroundColor: "hsla(43, 30%, 95%, 1)",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "48%",
                }}
              >
                비밀번호 찾기
              </button>
              <div style={{ width: "1px", height: "24px", backgroundColor: "#a7a7a7" }}></div>
              <Link
                href="/flow/signup"
                style={{
                  textAlign: "center",
                  fontSize: "12px",
                  padding: "10px",
                  backgroundColor: "hsla(43, 30%, 95%, 1)",
                  color: "black",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "48%",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                회원가입
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
