"use client";

import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Expends() {
  const roeuter = useRouter();
  const currentYearMonth = dayjs().format("YYYY-MM");

  useEffect(() => {
    roeuter.push(`/expends/${currentYearMonth}`);
  });
}
