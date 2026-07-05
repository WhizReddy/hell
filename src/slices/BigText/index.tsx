import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { brandConfig } from "@/config/brandConfig";
import Footer from "@/components/Footer";
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
      <h2 className="mx-auto grid min-h-screen max-w-full place-content-center gap-6 px-4 py-16 text-center text-8xl font-black uppercase leading-[0.85] md:text-[12rem] lg:text-[16rem]">
        <span>Golden</span>
        <span>Eagle</span>
        <span>Flavours</span>
      </h2>
      <Footer />
    </section>
  );
};

export default BigText;
