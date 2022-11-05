import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import splitNumber from "../../lib/splitNumber";

type Props = {};

export default function ShopManagement({}: Props) {
  return (
    <div className="px-[35px]">
      <div className="bg-[#F9F9F9] rounded-2xl flex flex-row p-2 py-4 gap-2 items-center justify-around ">
        <div className="flex flex-row gap-2 items-center">
          <Image src={"../../../../public/Images/WalletIcon.png"} height="37px" width={"40px"} />
          <span className="text-[13px] text-[#545454]">{`${splitNumber(
            "1450000"
          )} تومان`}</span>
        </div>
        <span className="text-[13px] text-rose-400 font-[600]">
          مدیریت حساب
        </span>
      </div>
      <hr className="my-8 bg-[#F0F0F0]" />
      <div className="w-full flex flex-col gap-8">
        <h4 className="text-[#464646] text-[12px] font-[500] mb-[-5px]">
          اطلاعات فروشگاه
        </h4>
        <TextField
          id="outlined-basic"
          label="نام"
          variant="outlined"
          size="medium"
          InputLabelProps={{
            shrink: true,
          }}
          value="عباس"
          disabled
        />
        <TextField
          id="outlined-basic"
          label="نام خانوادگی"
          variant="outlined"
          size="medium"
          InputLabelProps={{
            shrink: true,
          }}
          value="رضائی"
          disabled
        />
      </div>
    </div>
  );
}
