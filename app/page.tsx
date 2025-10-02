"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/onboarding");
  });
  return <div></div>;
}

// #535353
// #324ea2
// #eeeeee
// #6c6c6c
// #393939
// #4263c5
