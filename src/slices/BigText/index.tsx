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
        background:
          "radial-gradient(circle at 78% 20%, rgba(255, 43, 0, 0.26), transparent 28rem), linear-gradient(135deg, #050505 0%, #160204 55%, #050505 100%)",
        color: brandConfig.colors.white,
      }}
    >
      <div className="absolute top-1/4 right-8 z-50 w-32 h-32 md:right-16 md:w-48 md:h-48">
        <CircleText
          backgroundColor={brandConfig.colors.secondary}
          textColor={brandConfig.colors.primary}
        />
      </div>
      <h2 className="grid min-h-screen w-full place-content-center gap-2 px-4 py-16 text-center font-black uppercase leading-[0.82] md:gap-3">
        <div className="text-7xl md:text-9xl lg:text-[12rem]">HELL</div>
        <div className="text-7xl md:text-9xl lg:text-[12rem]">ENERGY</div>
        <div className="text-6xl md:text-8xl lg:text-[10rem]">STRONG</div>
        <div className="text-6xl md:text-8xl lg:text-[10rem]">EDGE</div>
      </h2>
    </section>
  );
};

export default BigText;
