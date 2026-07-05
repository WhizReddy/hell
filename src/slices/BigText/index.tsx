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
      <h2 className="mx-auto grid min-h-screen max-w-6xl place-content-center gap-6 px-4 py-16 text-center text-7xl font-black uppercase leading-[0.88] md:text-9xl lg:text-[10rem]">
        <span>Golden</span>
        <span>Eagle</span>
        <span>Flavours</span>
      </h2>
      <Footer />
    </section>
  );
};

export default BigText;
