import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { brandConfig } from "@/config/brandConfig";
import CircleText from "@/components/CircleText";

/**
 * Props for `BigText`.
 */
export type BigTextProps = SliceComponentProps<Content.BigTextSlice>;

/**
 * Component for "BigText" Slices.
 */
const BigText = ({ slice }: BigTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen w-screen overflow-hidden"
      style={{
        backgroundColor: brandConfig.colors.blue,
        color: brandConfig.colors.white,
      }}
    >
      <div className="absolute top-1/4 right-8 z-50 w-32 h-32 md:right-16 md:w-48 md:h-48">
        <CircleText backgroundColor={brandConfig.colors.yellow} textColor={brandConfig.colors.blue} />
      </div>
      <h2 className="grid w-full min-h-screen place-content-center gap-[1vw] py-16 text-center font-black uppercase leading-[0.8]">
        <div className="text-[25vw]">Golden</div>
        <div className="text-[29vw]">Eagle</div>
        <div className="text-[17vw]">Flavours</div>
      </h2>
    </section>
  );
};

export default BigText;
