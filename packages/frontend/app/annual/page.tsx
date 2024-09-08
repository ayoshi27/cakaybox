"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Annual() {
  const roeuter = useRouter();
  const currentYear = dayjs().format("YYYY");

  useEffect(() => {
    roeuter.push(`/annual/${currentYear}`);
  });
}
