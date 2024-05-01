"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="container"    data-aos-duration="1000">
      <Link href={"/"}>
        <Image height="100" width="165" src="/logo/logo.svg" alt="Logo" />
      </Link>
    </div>
  );
}
