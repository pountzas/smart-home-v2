import Image from "next/image";
import PercentageBar from "./PercentageBar";

function CarIllustrationCard({ cars, carIndex }: CarDetailsTypes) {
  return (
    <div className="relative px-4 pt-4 pb-8 text-sm w-[100%] bg-tertiary rounded-lg">
      <div className="flex items-center pb-4 space-x-2">
        <div className="w-2 h-2 rounded-full bg-lightBlue_custom"></div>
        <h3>{cars[carIndex].car}</h3>
        <h4 className="text-textTertiary">{cars[carIndex].owner}</h4>
      </div>
      <div className="space-y-2">
        <p className="text-textTertiary">Status:</p>
        {/* <StatusButton status={cars[carIndex].block3[1]} /> */}
      </div>

      <div className="flex justify-center ">
        {/* add tesla image from public assets */}
        <Image
          src="/tesla.png"
          alt="tesla"
          width={500}
          height={300}

          // className='absolute object-contain'
        />
      </div>

      <PercentageBar
        title="Chraging Time"
        bottomLeft="2h 3m"
        startValue={35}
        endValue={100}
      />
    </div>
  );
}

export default CarIllustrationCard;