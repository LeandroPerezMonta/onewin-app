"use client";
import { Image, Spinner } from "@nextui-org/react";
import React from "react";

interface SpinnerLoadingPros {
  label?: boolean;
}
export const SpinnerLoading = ({ label }: SpinnerLoadingPros) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <Spinner
        classNames={{
          base: "",
          wrapper: "w-[11rem] h-[11rem]",
          circle1: "border-[1rem]",
          circle2: "border-[1rem]",
          label: "absolute right-[8rem]",
        }}
        className="w-16 z-[2]"
        label={label ? "Cargando..." : ""}
        size="lg"
      >
      </Spinner>
        <Image
          src="https://v1.bundlecdn.com/img/1win-normal.d39105a87.svg"
          alt="1win"
          width={300}
          height={300}
          className=" w-[7rem] h-[7rem] -translate-x-20 z-[3]"
        />
    </div>
  );
};
